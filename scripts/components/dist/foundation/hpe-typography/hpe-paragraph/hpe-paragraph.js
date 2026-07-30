var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-paragraph.styles.js";
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
let HpeParagraph = class HpeParagraph extends LitElement {
    constructor() {
        super(...arguments);
        this.size = "md";
        this.as = "p";
    }
    render() {
        const paragraphClass = `paragraph size-${this.size}`;
        switch (this.as) {
            case "div":
                return html `<div part="paragraph" class=${paragraphClass}>
          <slot></slot>
        </div>`;
            case "span":
                return html `<span part="paragraph" class=${paragraphClass}
          ><slot></slot
        ></span>`;
            default:
                return html `<p part="paragraph" class=${paragraphClass}>
          <slot></slot>
        </p>`;
        }
    }
};
HpeParagraph.styles = styles;
__decorate([
    property({ reflect: true })
], HpeParagraph.prototype, "size", void 0);
__decorate([
    property({ reflect: true })
], HpeParagraph.prototype, "as", void 0);
HpeParagraph = __decorate([
    customElement("hpe-paragraph")
], HpeParagraph);
export { HpeParagraph };
//# sourceMappingURL=hpe-paragraph.js.map