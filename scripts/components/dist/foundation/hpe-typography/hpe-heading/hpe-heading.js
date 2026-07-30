var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-heading.styles.js";
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
let HpeHeading = class HpeHeading extends LitElement {
    constructor() {
        super(...arguments);
        this.level = "h2";
        this.size = "auto";
    }
    get resolvedScale() {
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
    get headingClass() {
        const scale = this.resolvedScale;
        return scale === "h1-large"
            ? "heading default-h1-large"
            : `heading default-${scale}`;
    }
    get renderedTag() {
        return this.as ?? this.level;
    }
    renderTag() {
        const tagName = this.renderedTag;
        const content = html `<slot></slot>`;
        switch (tagName) {
            case "h1":
                return html `<h1 part="heading" class=${this.headingClass}>
          ${content}
        </h1>`;
            case "h2":
                return html `<h2 part="heading" class=${this.headingClass}>
          ${content}
        </h2>`;
            case "h3":
                return html `<h3 part="heading" class=${this.headingClass}>
          ${content}
        </h3>`;
            case "h4":
                return html `<h4 part="heading" class=${this.headingClass}>
          ${content}
        </h4>`;
            case "h5":
                return html `<h5 part="heading" class=${this.headingClass}>
          ${content}
        </h5>`;
            case "h6":
                return html `<h6 part="heading" class=${this.headingClass}>
          ${content}
        </h6>`;
            case "div":
                return html `<div part="heading" class=${this.headingClass}>
          ${content}
        </div>`;
            case "span":
                return html `<span part="heading" class=${this.headingClass}>
          ${content}
        </span>`;
            default:
                return nothing;
        }
    }
    render() {
        return this.renderTag();
    }
};
HpeHeading.styles = styles;
__decorate([
    property({ reflect: true })
], HpeHeading.prototype, "level", void 0);
__decorate([
    property({ reflect: true })
], HpeHeading.prototype, "size", void 0);
__decorate([
    property({ reflect: true })
], HpeHeading.prototype, "as", void 0);
HpeHeading = __decorate([
    customElement("hpe-heading")
], HpeHeading);
export { HpeHeading };
//# sourceMappingURL=hpe-heading.js.map