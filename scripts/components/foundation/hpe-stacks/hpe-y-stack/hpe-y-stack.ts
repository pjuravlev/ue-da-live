import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-y-stack.styles.js";

type StackGap = "xs" | "sm" | "md" | "lg";

/**
 * A vertical layout primitive that arranges slotted content in a column with token-based gap variants.
 *
 * @tag hpe-y-stack
 * @summary Organizes content vertically with configurable stack spacing.
 *
 * @attr {string} gap - Gap variant: 'xs' | 'sm' | 'md' | 'lg'
 *
 * @slot - Stack content
 *
 * @csspart stack - The stack container element
 */
@customElement("hpe-y-stack")
export class HpeYStack extends LitElement {
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
    "hpe-y-stack": HpeYStack;
  }
}
