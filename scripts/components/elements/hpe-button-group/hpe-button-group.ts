import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-button-group.styles.js";

/**
 * A button group component for organizing multiple buttons in a layout.
 *
 * @tag hpe-button-group
 * @summary Organizes buttons horizontally or vertically with consistent spacing.
 *
 * @attr {string} orientation - Layout orientation: "horizontal" | "vertical"
 *
 * @slot - Button elements to be grouped
 *
 * @csspart group - The button group container
 */
@customElement("hpe-button-group")
export class HpeButtonGroup extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  orientation: "horizontal" | "vertical" = "horizontal";

  override render() {
    return html`
      <div part="button-group" class="button-group">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-button-group": HpeButtonGroup;
  }
}
