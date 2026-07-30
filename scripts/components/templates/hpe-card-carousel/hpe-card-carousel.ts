import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-card-carousel.styles.js";
import "../../foundation/hpe-section/hpe-section.js";
import "../hpe-text-recipe/hpe-text-recipe.js";
import "../../elements/hpe-carousel/hpe-carousel.js";

type TextRecipeFormat = "h2" | "h3" | "h4" | "h5";

const DEFAULT_INTRO_BODY =
  "No matter how unique your needs are, HPE's edge expertise, data management tools, and proven integration capabilities can help you scale across all your edge locations.";

/**
 * A card-carousel pattern that composes optional intro copy and a horizontal carousel of cards.
 *
 * @tag hpe-card-carousel
 * @summary Displays card elements in a horizontally scrollable carousel with an optional lead text recipe.
 *
 * @attr {string} padding - Section padding variant: 'default' | 'none' | 'top' | 'bottom' | 'left-right-only'
 * @attr {string} heading - Optional intro heading text (kept for backward compatibility)
 * @attr {number} visible-cards - How many cards are visible at once (default 4)
 * @attr {boolean} show-intro - Whether to render the intro text recipe block
 * @attr {string} intro-format - Intro text recipe format: 'h2' | 'h3' | 'h4' | 'h5'
 * @attr {string} intro-eyebrow - Optional intro eyebrow text
 * @attr {string} intro-heading - Intro heading text
 * @attr {string} intro-body - Intro body copy
 * @attr {string} intro-button-label - Intro CTA button label
 * @attr {boolean} show-intro-button - Whether to show the intro CTA button
 *
 * @slot - Card elements to display in the carousel
 * @slot intro-secondary-action - Optional secondary CTA for the intro text recipe
 *
 * @csspart section - The outer section wrapper element
 * @csspart intro - The intro text recipe wrapper
 * @csspart carousel - The delegated carousel element
 */
@customElement("hpe-card-carousel")
export class HpeCardCarousel extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  padding: "default" | "none" | "top" | "bottom" | "left-right-only" =
    "default";

  @property({ reflect: true })
  heading = "";

  @property({ type: Number, reflect: true, attribute: "visible-cards" })
  visibleCards = 4;

  @property({ reflect: true, attribute: "show-intro", type: Boolean })
  showIntro = true;

  @property({ reflect: true, attribute: "intro-format" })
  introFormat: TextRecipeFormat = "h2";

  @property({ reflect: true, attribute: "intro-eyebrow" })
  introEyebrow = "Eyebrow label (optional)";

  @property({ reflect: true, attribute: "intro-heading" })
  introHeading = "Content headline goes here";

  @property({ reflect: true, attribute: "intro-body" })
  introBody = DEFAULT_INTRO_BODY;

  @property({ reflect: true, attribute: "intro-button-label" })
  introButtonLabel = "Label";

  @property({ reflect: true, attribute: "show-intro-button", type: Boolean })
  showIntroButton = true;

  private get shouldRenderIntro() {
    return this.showIntro || !!this.heading;
  }

  private get resolvedIntroHeading() {
    return this.heading || this.introHeading;
  }

  override render() {
    return html`
      <hpe-section part="section" class="section" padding=${this.padding}>
        ${this.shouldRenderIntro
          ? html`
              <hpe-text-recipe
                part="intro"
                class="intro"
                format=${this.introFormat}
                eyebrow=${this.introEyebrow}
                heading=${this.resolvedIntroHeading}
                body=${this.introBody}
                button-label=${this.introButtonLabel}
                ?show-button=${this.showIntroButton}
              >
                <slot
                  slot="secondary-action"
                  name="intro-secondary-action"
                ></slot>
              </hpe-text-recipe>
            `
          : nothing}

        <hpe-carousel
          part="carousel"
          class="carousel"
          .visibleSlides=${this.visibleCards}
          ?show-controls=${true}
          ?show-slide-count=${false}
        >
          <slot></slot>
        </hpe-carousel>
      </hpe-section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-card-carousel": HpeCardCarousel;
  }
}
