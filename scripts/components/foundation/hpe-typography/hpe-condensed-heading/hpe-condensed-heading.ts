import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-condensed-heading.styles.js";

type CondensedHeadingLevel = "h1" | "h2";
type CondensedHeadingSize = "auto" | "display";
type CondensedHeadingWeight = "regular" | "bold" | "light";
type CondensedHeadingRenderTag = CondensedHeadingLevel | "div" | "span";

/**
 * Condensed uppercase heading text for the display heading styles shown in the Figma typography spec.
 *
 * @tag hpe-condensed-heading
 * @summary Renders token-backed condensed heading text for h1 and h2 display scales.
 *
 * @attr {string} level - Semantic heading level: "h1" | "h2"
 * @attr {string} size - Visual size: "auto" | "display"
 * @attr {string} weight - Condensed weight: "regular" | "bold" | "light"
 * @attr {string} as - Render tag override: semantic heading by default, or "div" | "span" for typography-only usage.
 *
 * @slot - Heading content
 *
 * @csspart heading - The rendered condensed heading element
 */
@customElement("hpe-condensed-heading")
export class HpeCondensedHeading extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  level: CondensedHeadingLevel = "h1";

  @property({ reflect: true })
  size: CondensedHeadingSize = "auto";

  @property({ reflect: true })
  weight: CondensedHeadingWeight = "regular";

  @property({ reflect: true })
  as?: CondensedHeadingRenderTag;

  private get resolvedScale(): "display" | "xl" | "lg" {
    if (this.level === "h1" && this.size === "display") {
      return "display";
    }

    return this.level === "h2" ? "lg" : "xl";
  }

  private get headingClass(): string {
    return `heading ${this.resolvedScale}-${this.weight}`;
  }

  private get renderedTag(): CondensedHeadingRenderTag {
    return this.as ?? this.level;
  }

  private renderTag() {
    const content = html`<slot></slot>`;

    switch (this.renderedTag) {
      case "h1":
        return html`<h1 part="heading" class=${this.headingClass}>
          ${content}
        </h1>`;
      case "h2":
        return html`<h2 part="heading" class=${this.headingClass}>
          ${content}
        </h2>`;
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
    "hpe-condensed-heading": HpeCondensedHeading;
  }
}
