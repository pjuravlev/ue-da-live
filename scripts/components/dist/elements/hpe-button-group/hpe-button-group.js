var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-button-group.styles.js";
/**
 * A button group component for organizing multiple buttons in a layout.
 *
 * @tag hpe-button-group
 * @summary Organizes buttons horizontally or vertically with consistent spacing.
 *
 * @attr {string} orientation - Layout orientation: "horizontal" | "vertical"
 *
 * @slot - Button elements to be grouped
 *
 * @csspart group - The button group container
 */
let HpeButtonGroup = class HpeButtonGroup extends LitElement {
    constructor() {
        super(...arguments);
        this.orientation = "horizontal";
    }
    render() {
        return html `
      <div part="button-group" class="button-group">
        <slot></slot>
      </div>
    `;
    }
};
HpeButtonGroup.styles = styles;
__decorate([
    property({ reflect: true })
], HpeButtonGroup.prototype, "orientation", void 0);
HpeButtonGroup = __decorate([
    customElement("hpe-button-group")
], HpeButtonGroup);
export { HpeButtonGroup };
//# sourceMappingURL=hpe-button-group.js.map