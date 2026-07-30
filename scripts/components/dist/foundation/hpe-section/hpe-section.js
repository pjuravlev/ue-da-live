var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let HpeSection = class HpeSection extends LitElement {
    constructor() {
        super(...arguments);
        this.padding = "default";
    }
    render() {
        return html `
      <section part="section" class="section">
        <div part="container" class="container">
          <slot></slot>
        </div>
      </section>
    `;
    }
};
HpeSection.styles = styles;
__decorate([
    property({ reflect: true })
], HpeSection.prototype, "padding", void 0);
HpeSection = __decorate([
    customElement("hpe-section")
], HpeSection);
export { HpeSection };
//# sourceMappingURL=hpe-section.js.map