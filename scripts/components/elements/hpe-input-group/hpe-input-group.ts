import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-input-group.styles.js";

/**
 * An input group component for organizing related input controls in a layout.
 *
 * @tag hpe-input-group
 * @summary Organizes checkbox, radio, or other input controls horizontally or vertically with consistent spacing.
 *
 * @attr {string} orientation - Layout orientation: "horizontal" | "vertical"
 *
 * @slot - Input elements to be grouped
 *
 * @csspart input-group - The input group container
 */
@customElement("hpe-input-group")
export class HpeInputGroup extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  orientation: "horizontal" | "vertical" = "horizontal";

  override render() {
    return html`
      <div part="input-group" class="input-group">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-input-group": HpeInputGroup;
  }
}
