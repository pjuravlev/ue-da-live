import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-card-grid.styles.js";
import "../../foundation/hpe-section/hpe-section.js";
import "../hpe-text-recipe/hpe-text-recipe.js";

type TextRecipeFormat = "h2" | "h3" | "h4" | "h5";

const DEFAULT_INTRO_BODY =
  "No matter how unique your needs are, HPE's edge expertise, data management tools, and proven integration capabilities can help you scale across all your edge locations.";

/**
 * A card-grid pattern that composes optional intro copy and a responsive card grid.
 *
 * @tag hpe-card-grid
 * @summary Arranges card elements in a responsive CSS Grid layout with an optional lead text recipe.
 *
 * @attr {string} padding - Section padding variant: 'default' | 'none' | 'top' | 'bottom' | 'left-right-only'
 * @attr {number} columns - Number of columns: 1 | 2 | 3 | 4 (default: 3)
 * @attr {string} heading - Optional intro heading text (kept for backward compatibility)
 * @attr {boolean} show-intro - Whether to render the intro text recipe block
 * @attr {string} intro-format - Intro text recipe format: 'h2' | 'h3' | 'h4' | 'h5'
 * @attr {string} intro-eyebrow - Optional intro eyebrow text
 * @attr {string} intro-heading - Intro heading text
 * @attr {string} intro-body - Intro body copy
 * @attr {string} intro-button-label - Intro CTA button label
 * @attr {boolean} show-intro-button - Whether to show the intro CTA button
 *
 * @slot - Card elements to display in the grid
 * @slot intro-secondary-action - Optional secondary CTA for the intro text recipe
 *
 * @csspart section - The outer section wrapper element
 * @csspart container - The inner content wrapper
 * @csspart intro - The intro text recipe wrapper
 * @csspart grid - The CSS grid container element
 */
@customElement("hpe-card-grid")
export class HpeCardGrid extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  padding: "default" | "none" | "top" | "bottom" | "left-right-only" =
    "default";

  @property({ reflect: true })
  heading?: string;

  @property({ reflect: true, type: Number })
  columns: 1 | 2 | 3 | 4 = 3;

  @property({ reflect: true, attribute: "show-intro", type: Boolean })
  showIntro = false;

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
    return this.heading ?? this.introHeading;
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

        <div part="grid" class="grid">
          <slot></slot>
        </div>
      </hpe-section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-card-grid": HpeCardGrid;
  }
}
