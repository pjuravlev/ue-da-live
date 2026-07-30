import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-paragraph.styles.js";

type ParagraphSize = "sm" | "md" | "lg" | "disclaimer";
type ParagraphRenderTag = "p" | "div" | "span";

/**
 * Paragraph text component covering the paragraph sizes shown in the Figma typography spec.
 *
 * @tag hpe-paragraph
 * @summary Renders token-backed paragraph text with size variants.
 *
 * @attr {string} size - Paragraph size: "sm" | "md" | "lg" | "disclaimer"
 * @attr {string} as - Render tag override: "p" by default, or "div" | "span" for typography-only usage.
 *
 * @slot - Paragraph content
 *
 * @csspart paragraph - The paragraph element
 */
@customElement("hpe-paragraph")
export class HpeParagraph extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  size: ParagraphSize = "md";

  @property({ reflect: true })
  as: ParagraphRenderTag = "p";

  override render() {
    const paragraphClass = `paragraph size-${this.size}`;

    switch (this.as) {
      case "div":
        return html`<div part="paragraph" class=${paragraphClass}>
          <slot></slot>
        </div>`;
      case "span":
        return html`<span part="paragraph" class=${paragraphClass}
          ><slot></slot
        ></span>`;
      default:
        return html`<p part="paragraph" class=${paragraphClass}>
          <slot></slot>
        </p>`;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-paragraph": HpeParagraph;
  }
}
