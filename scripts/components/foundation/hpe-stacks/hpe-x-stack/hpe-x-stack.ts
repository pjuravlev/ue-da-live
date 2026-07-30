import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-x-stack.styles.js";

type StackGap = "xs" | "sm" | "md" | "lg";

/**
 * A horizontal layout primitive that arranges slotted content in a row with token-based gap variants.
 *
 * @tag hpe-x-stack
 * @summary Organizes content horizontally with configurable stack spacing.
 *
 * @attr {string} gap - Gap variant: 'xs' | 'sm' | 'md' | 'lg'
 *
 * @slot - Stack content
 *
 * @csspart stack - The stack container element
 */
@customElement("hpe-x-stack")
export class HpeXStack extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  gap: StackGap = "xs";

  override render() {
    return html`
      <div part="stack" class="stack">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-x-stack": HpeXStack;
  }
}
