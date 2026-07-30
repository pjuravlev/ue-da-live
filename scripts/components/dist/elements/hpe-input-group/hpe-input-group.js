var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-input-group.styles.js";
/**
 * An input group component for organizing related input controls in a layout.
 *
 * @tag hpe-input-group
 * @summary Organizes checkbox, radio, or other input controls horizontally or vertically with consistent spacing.
 *
 * @attr {string} orientation - Layout orientation: "horizontal" | "vertical"
 *
 * @slot - Input elements to be grouped
 *
 * @csspart input-group - The input group container
 */
let HpeInputGroup = class HpeInputGroup extends LitElement {
    constructor() {
        super(...arguments);
        this.orientation = "horizontal";
    }
    render() {
        return html `
      <div part="input-group" class="input-group">
        <slot></slot>
      </div>
    `;
    }
};
HpeInputGroup.styles = styles;
__decorate([
    property({ reflect: true })
], HpeInputGroup.prototype, "orientation", void 0);
HpeInputGroup = __decorate([
    customElement("hpe-input-group")
], HpeInputGroup);
export { HpeInputGroup };
//# sourceMappingURL=hpe-input-group.js.map