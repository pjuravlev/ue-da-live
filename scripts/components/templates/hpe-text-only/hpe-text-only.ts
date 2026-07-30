import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-text-only.styles.js";
import "../../foundation/hpe-section/hpe-section.js";
import "../hpe-text-recipe/hpe-text-recipe.js";

type TextRecipeFormat = "h2" | "h3" | "h4" | "h5";

const DEFAULT_BODY =
  "No matter how unique your needs are, HPE's edge expertise, data management tools, and proven integration capabilities can help you scale across all your edge locations.";

/**
 * A full-width section pattern that composes a text recipe inside the shared section layout.
 *
 * @tag hpe-text-only
 * @summary Renders an optional eyebrow, heading, body copy, and CTA in a section constrained to the design-system content width.
 *
 * @attr {string} padding - Section padding variant: "default" | "none" | "top" | "bottom" | "left-right-only"
 * @attr {string} format - Text recipe format: "h2" | "h3" | "h4" | "h5"
 * @attr {string} eyebrow - Optional eyebrow label text
 * @attr {string} heading - Heading text
 * @attr {string} body - Body copy text
 * @attr {string} button-label - CTA label text
 * @attr {string} button-group-orientation - Optional button group orientation: "horizontal" | "vertical"
 * @attr {boolean} show-eyebrow - Whether to render the eyebrow text
 * @attr {boolean} show-body - Whether to render the body copy
 * @attr {boolean} show-button - Whether to render the CTA button
 * @attr {boolean} use-button-group - Whether to wrap CTA actions in hpe-button-group
 *
 * @slot secondary-action - Optional secondary action passed through to hpe-text-recipe
 *
 * @csspart container - Pattern wrapper element
 * @csspart section - Inner hpe-section element
 * @csspart content - Inner hpe-text-recipe element
 */
@customElement("hpe-text-only")
export class HpeTextOnly extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  padding: "default" | "none" | "top" | "bottom" | "left-right-only" =
    "default";

  @property({ reflect: true })
  format: TextRecipeFormat = "h2";

  @property({ reflect: true })
  eyebrow = "Eyebrow label (optional)";

  @property({ reflect: true })
  heading = "Text Only";

  @property({ reflect: true })
  body = DEFAULT_BODY;

  @property({ reflect: true, attribute: "button-label" })
  buttonLabel = "Label";

  @property({ reflect: true, attribute: "button-group-orientation" })
  buttonGroupOrientation: "horizontal" | "vertical" = "horizontal";

  @property({ reflect: true, attribute: "show-eyebrow", type: Boolean })
  showEyebrow = true;

  @property({ reflect: true, attribute: "show-body", type: Boolean })
  showBody = true;

  @property({ reflect: true, attribute: "show-button", type: Boolean })
  showButton = true;

  @property({ reflect: true, attribute: "use-button-group", type: Boolean })
  useButtonGroup = false;

  override render() {
    return html`
      <hpe-section part="section" padding=${this.padding}>
        <hpe-text-recipe
          part="content"
          class="content"
          format=${this.format}
          eyebrow=${this.eyebrow}
          heading=${this.heading}
          body=${this.body}
          button-label=${this.buttonLabel}
          button-group-orientation=${this.buttonGroupOrientation}
          ?show-eyebrow=${this.showEyebrow}
          ?show-body=${this.showBody}
          ?show-button=${this.showButton}
          ?use-button-group=${this.useButtonGroup}
        >
          <slot slot="secondary-action" name="secondary-action"></slot>
        </hpe-text-recipe>
      </hpe-section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-text-only": HpeTextOnly;
  }
}
