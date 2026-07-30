import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-button-only.styles.js";
import "../../foundation/hpe-section/hpe-section.js";
import "../../elements/hpe-button/hpe-button.js";
import "../../elements/hpe-button-group/hpe-button-group.js";

type Padding = "default" | "none" | "top" | "bottom" | "left-right-only";
type ButtonGroupOrientation = "horizontal" | "vertical";

/**
 * A button-only section template that composes a button group inside the shared section layout.
 *
 * @tag hpe-button-only
 * @summary Renders a section-scoped CTA group with a default primary action and optional projected custom actions.
 *
 * @attr {string} padding - Section padding variant: "default" | "none" | "top" | "bottom" | "left-right-only"
 * @attr {string} button-label - Primary CTA label text
 * @attr {string} button-group-orientation - Button group orientation: "horizontal" | "vertical"
 * @attr {boolean} show-icon - Whether to show the primary button trailing icon
 *
 * @slot - Optional custom action buttons. When provided, these replace the default fallback primary action.
 *
 * @csspart section - The inner hpe-section element
 * @csspart actions - The button group wrapper
 * @csspart default-button - The default primary hpe-button element
 */
@customElement("hpe-button-only")
export class HpeButtonOnly extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  padding: Padding = "default";

  @property({ reflect: true, attribute: "button-label" })
  buttonLabel = "Label";

  @property({ reflect: true, attribute: "button-group-orientation" })
  buttonGroupOrientation: ButtonGroupOrientation = "horizontal";

  @property({ reflect: true, attribute: "show-icon", type: Boolean })
  buttonIcon = true;

  override render() {
    return html`
      <hpe-section part="section" class="section" padding=${this.padding}>
        <hpe-button-group
          part="actions"
          orientation=${this.buttonGroupOrientation}
        >
          <slot>
            <hpe-button
              part="default-button"
              type="primary"
              size="default"
              ?show-right-icon=${this.buttonIcon}
            >
              ${this.buttonLabel}
            </hpe-button>
          </slot>
        </hpe-button-group>
      </hpe-section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-button-only": HpeButtonOnly;
  }
}
