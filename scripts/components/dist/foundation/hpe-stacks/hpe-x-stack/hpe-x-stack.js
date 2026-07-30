var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-x-stack.styles.js";
/**
 * A horizontal layout primitive that arranges slotted content in a row with token-based gap variants.
 *
 * @tag hpe-x-stack
 * @summary Organizes content horizontally with configurable stack spacing.
 *
 * @attr {string} gap - Gap variant: 'xs' | 'sm' | 'md' | 'lg'
 *
 * @slot - Stack content
 *
 * @csspart stack - The stack container element
 */
let HpeXStack = class HpeXStack extends LitElement {
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
HpeXStack.styles = styles;
__decorate([
    property({ reflect: true })
], HpeXStack.prototype, "gap", void 0);
HpeXStack = __decorate([
    customElement("hpe-x-stack")
], HpeXStack);
export { HpeXStack };
//# sourceMappingURL=hpe-x-stack.js.map