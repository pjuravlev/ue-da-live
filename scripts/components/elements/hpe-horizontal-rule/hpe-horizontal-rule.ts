import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "./hpe-horizontal-rule.styles.js";

/**
 * A decorative horizontal rule used to visually separate sections of content.
 *
 * @tag hpe-horizontal-rule
 * @summary A full-width horizontal divider styled with the design-system border token.
 *
 * @csspart rule - The underlying `<hr>` element.
 */
@customElement("hpe-horizontal-rule")
export class HpeHorizontalRule extends LitElement {
  static override styles = styles;

  override render() {
    return html`<hr part="rule" class="rule" />`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-horizontal-rule": HpeHorizontalRule;
  }
}
