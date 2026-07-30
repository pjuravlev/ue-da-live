import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-text-recipe.styles.js";
import "../../foundation/hpe-typography/hpe-heading/hpe-heading.js";
import "../../foundation/hpe-typography/hpe-paragraph/hpe-paragraph.js";
import "../../elements/hpe-button/hpe-button.js";
import "../../elements/hpe-button-group/hpe-button-group.js";

type TextRecipeFormat = "h2" | "h3" | "h4" | "h5";

const DEFAULT_BODY =
  "No matter how unique your needs are, HPE’s edge expertise, data management tools, and proven integration capabilities can help you scale across all your edge locations.";

/**
 * A reusable text-content recipe composed from typography and button elements.
 *
 * @tag hpe-text-recipe
 * @summary Stacks an optional eyebrow, heading, body copy, CTA button, and disclaimer using existing element components.
 *
 * @attr {string} format - Text recipe format: "h2" | "h3" | "h4" | "h5"
 * @attr {string} eyebrow - Optional eyebrow label text
 * @attr {string} heading - Heading text
 * @attr {string} body - Body copy text
 * @attr {string} button-label - CTA label text
 * @attr {string} button-group-orientation - Optional button group orientation: "horizontal" | "vertical"
 * @attr {string} disclaimer - Optional disclaimer text
 * @attr {boolean} show-eyebrow - Whether to render the eyebrow text
 * @attr {boolean} show-body - Whether to render the body copy
 * @attr {boolean} show-button - Whether to render the CTA button
 * @attr {boolean} use-button-group - Whether to wrap CTA actions in hpe-button-group
 * @attr {boolean} show-disclaimer - Whether to render the disclaimer
 *
 * @slot secondary-action - Optional secondary action to be rendered inside hpe-button-group
 *
 * @csspart container - The outer wrapper element
 * @csspart copy - The stacked text content wrapper
 * @csspart eyebrow - The eyebrow paragraph wrapper
 * @csspart heading - The heading wrapper
 * @csspart body - The body paragraph wrapper
 * @csspart actions - The CTA wrapper
 * @csspart disclaimer - The disclaimer paragraph wrapper
 */
@customElement("hpe-text-recipe")
export class HpeTextRecipe extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  format: TextRecipeFormat = "h2";

  @property({ reflect: true })
  eyebrow = "Eyebrow label (optional)";

  @property({ reflect: true })
  heading = "Content headline goes here";

  @property({ reflect: true })
  body = DEFAULT_BODY;

  @property({ reflect: true, attribute: "button-label" })
  buttonLabel = "Label";

  @property({ reflect: true, attribute: "button-group-orientation" })
  buttonGroupOrientation: "horizontal" | "vertical" = "horizontal";

  @property({ reflect: true })
  disclaimer = "Note: Times are subject to change.";

  @property({ reflect: true, attribute: "show-eyebrow", type: Boolean })
  showEyebrow = true;

  @property({ reflect: true, attribute: "show-body", type: Boolean })
  showBody = true;

  @property({ reflect: true, attribute: "show-button", type: Boolean })
  showButton = true;

  @property({ reflect: true, attribute: "use-button-group", type: Boolean })
  useButtonGroup = false;

  @property({ reflect: true, attribute: "show-disclaimer", type: Boolean })
  showDisclaimer = false;

  private get headingLevel() {
    return this.format;
  }

  private get eyebrowSize() {
    return this.format === "h5" ? "sm" : "md";
  }

  private get bodySize() {
    return this.format === "h4" || this.format === "h5" ? "sm" : "md";
  }

  override render() {
    return html`
      <div part="recipe" class="recipe">
        <div part="body" class="body">
          ${this.showEyebrow
            ? html`
                <hpe-paragraph part="eyebrow" size=${this.eyebrowSize}>
                  ${this.eyebrow}
                </hpe-paragraph>
              `
            : nothing}

          <hpe-heading part="heading" level=${this.headingLevel}
            >${this.heading}</hpe-heading
          >

          ${this.showBody
            ? html`
                <div part="body" class="body">
                  <hpe-paragraph size=${this.bodySize}>
                    ${this.body}
                  </hpe-paragraph>
                </div>
              `
            : nothing}
        </div>

        ${this.showButton
          ? html`
              <div part="actions" class="actions">
                ${this.useButtonGroup
                  ? html`
                      <hpe-button-group
                        orientation=${this.buttonGroupOrientation}
                      >
                        <hpe-button type="primary" size="default"
                          >${this.buttonLabel}</hpe-button
                        >
                        <slot name="secondary-action"></slot>
                      </hpe-button-group>
                    `
                  : html`
                      <hpe-button type="primary" size="default"
                        >${this.buttonLabel}</hpe-button
                      >
                    `}
              </div>
            `
          : nothing}
        ${this.showDisclaimer
          ? html`
              <div part="disclaimer" class="disclaimer">
                <hpe-paragraph size="disclaimer">
                  ${this.disclaimer}
                </hpe-paragraph>
              </div>
            `
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-text-recipe": HpeTextRecipe;
  }
}
