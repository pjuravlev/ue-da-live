import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-section.styles.js";

/**
 * A structural container that constrains content width and applies section padding.
 *
 * @tag hpe-section
 * @summary Groups related content into a distinct area with configurable vertical padding.
 *
 * @attr {string} padding - Padding variant: 'default' | 'none' | 'top' | 'bottom' | 'left-right-only'
 *
 * @slot - Section content
 *
 * @csspart section - The outer section element
 * @csspart container - The inner content-width container
 */
@customElement("hpe-section")
export class HpeSection extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  padding: "default" | "none" | "top" | "bottom" | "left-right-only" =
    "default";

  override render() {
    return html`
      <section part="section" class="section">
        <div part="container" class="container">
          <slot></slot>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-section": HpeSection;
  }
}
