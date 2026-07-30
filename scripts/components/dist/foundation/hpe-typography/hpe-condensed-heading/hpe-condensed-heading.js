var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-condensed-heading.styles.js";
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
let HpeCondensedHeading = class HpeCondensedHeading extends LitElement {
    constructor() {
        super(...arguments);
        this.level = "h1";
        this.size = "auto";
        this.weight = "regular";
    }
    get resolvedScale() {
        if (this.level === "h1" && this.size === "display") {
            return "display";
        }
        return this.level === "h2" ? "lg" : "xl";
    }
    get headingClass() {
        return `heading ${this.resolvedScale}-${this.weight}`;
    }
    get renderedTag() {
        return this.as ?? this.level;
    }
    renderTag() {
        const content = html `<slot></slot>`;
        switch (this.renderedTag) {
            case "h1":
                return html `<h1 part="heading" class=${this.headingClass}>
          ${content}
        </h1>`;
            case "h2":
                return html `<h2 part="heading" class=${this.headingClass}>
          ${content}
        </h2>`;
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
HpeCondensedHeading.styles = styles;
__decorate([
    property({ reflect: true })
], HpeCondensedHeading.prototype, "level", void 0);
__decorate([
    property({ reflect: true })
], HpeCondensedHeading.prototype, "size", void 0);
__decorate([
    property({ reflect: true })
], HpeCondensedHeading.prototype, "weight", void 0);
__decorate([
    property({ reflect: true })
], HpeCondensedHeading.prototype, "as", void 0);
HpeCondensedHeading = __decorate([
    customElement("hpe-condensed-heading")
], HpeCondensedHeading);
export { HpeCondensedHeading };
//# sourceMappingURL=hpe-condensed-heading.js.map