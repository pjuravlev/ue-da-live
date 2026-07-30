import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-heading.styles.js";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingSize = "auto" | "xs" | "sm" | "md" | "lg" | "xl" | "display";
type HeadingRenderTag = HeadingLevel | "div" | "span";

/**
 * Semantic heading text with token-backed visual sizing for the default heading styles from the Figma typography spec.
 *
 * @tag hpe-heading
 * @summary Renders semantic headings with the default heading scale.
 *
 * @attr {string} level - Semantic heading level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
 * @attr {string} size - Visual size: "auto" | "xs" | "sm" | "md" | "lg" | "xl" | "display"
 * @attr {string} as - Render tag override: semantic heading by default, or "div" | "span" for typography-only usage.
 *
 * @slot - Heading content
 *
 * @csspart heading - The rendered heading element
 */
@customElement("hpe-heading")
export class HpeHeading extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  level: HeadingLevel = "h2";

  @property({ reflect: true })
  size: HeadingSize = "auto";

  @property({ reflect: true })
  as?: HeadingRenderTag;

  private get resolvedScale(): "h1-large" | HeadingLevel {
    switch (this.size) {
      case "display":
        return "h1-large";
      case "xl":
        return "h1";
      case "lg":
        return "h2";
      case "md":
        return "h3";
      case "sm":
        return "h4";
      case "xs":
        return "h5";
      default:
        return this.level;
    }
  }

  private get headingClass(): string {
    const scale = this.resolvedScale;
    return scale === "h1-large"
      ? "heading default-h1-large"
      : `heading default-${scale}`;
  }

  private get renderedTag(): HeadingRenderTag {
    return this.as ?? this.level;
  }

  private renderTag() {
    const tagName = this.renderedTag;
    const content = html`<slot></slot>`;

    switch (tagName) {
      case "h1":
        return html`<h1 part="heading" class=${this.headingClass}>
          ${content}
        </h1>`;
      case "h2":
        return html`<h2 part="heading" class=${this.headingClass}>
          ${content}
        </h2>`;
      case "h3":
        return html`<h3 part="heading" class=${this.headingClass}>
          ${content}
        </h3>`;
      case "h4":
        return html`<h4 part="heading" class=${this.headingClass}>
          ${content}
        </h4>`;
      case "h5":
        return html`<h5 part="heading" class=${this.headingClass}>
          ${content}
        </h5>`;
      case "h6":
        return html`<h6 part="heading" class=${this.headingClass}>
          ${content}
        </h6>`;
      case "div":
        return html`<div part="heading" class=${this.headingClass}>
          ${content}
        </div>`;
      case "span":
        return html`<span part="heading" class=${this.headingClass}>
          ${content}
        </span>`;
      default:
        return nothing;
    }
  }

  override render() {
    return this.renderTag();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-heading": HpeHeading;
  }
}
