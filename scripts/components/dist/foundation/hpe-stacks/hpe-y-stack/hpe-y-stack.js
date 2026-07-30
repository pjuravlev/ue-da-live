var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-y-stack.styles.js";
/**
 * A vertical layout primitive that arranges slotted content in a column with token-based gap variants.
 *
 * @tag hpe-y-stack
 * @summary Organizes content vertically with configurable stack spacing.
 *
 * @attr {string} gap - Gap variant: 'xs' | 'sm' | 'md' | 'lg'
 *
 * @slot - Stack content
 *
 * @csspart stack - The stack container element
 */
let HpeYStack = class HpeYStack extends LitElement {
    constructor() {
        super(...arguments);
        this.gap = "xs";
    }
    render() {
        return html `
      <div part="stack" class="stack">
        <slot></slot>
      </div>
    `;
    }
};
HpeYStack.styles = styles;
__decorate([
    property({ reflect: true })
], HpeYStack.prototype, "gap", void 0);
HpeYStack = __decorate([
    customElement("hpe-y-stack")
], HpeYStack);
export { HpeYStack };
//# sourceMappingURL=hpe-y-stack.js.map