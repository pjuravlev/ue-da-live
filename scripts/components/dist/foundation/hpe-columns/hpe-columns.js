var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-columns.styles.js";
/**
 * A layout primitive that arranges slotted content into configurable columns.
 *
 * @tag hpe-columns
 * @summary Distributes content into horizontal or vertical column layouts with optional reverse order.
 *
 * @attr {string} columns - Layout variant: '1' | '2' | '3' | '4' | '5' | '40:60' | '60:40' | '33:66' | '66:33' | '20:80' | '80:20'
 * @attr {string} orientation - Layout direction: 'horizontal' | 'vertical'
 * @attr {string} order - Item order: 'default' | 'reverse'
 *
 * @slot column-1 - Content for the first column
 * @slot column-2 - Content for the second column
 * @slot column-3 - Content for the third column
 * @slot column-4 - Content for the fourth column
 * @slot column-5 - Content for the fifth column
 *
 * @csspart columns - The columns layout container
 * @csspart column - A column wrapper element
 */
let HpeColumns = class HpeColumns extends LitElement {
    constructor() {
        super(...arguments);
        this.columns = "2";
        this.orientation = "horizontal";
        this.order = "default";
    }
    render() {
        return html `
      <div part="columns" class="columns">
        ${this.renderColumn("column-1")}
        ${this.shouldRenderColumn(2) ? this.renderColumn("column-2") : ""}
        ${this.shouldRenderColumn(3) ? this.renderColumn("column-3") : ""}
        ${this.shouldRenderColumn(4) ? this.renderColumn("column-4") : ""}
        ${this.shouldRenderColumn(5) ? this.renderColumn("column-5") : ""}
      </div>
    `;
    }
    renderColumn(slotName) {
        return html `
      <div part="column" class="column ${slotName}">
        <slot name=${slotName}></slot>
      </div>
    `;
    }
    shouldRenderColumn(columnNumber) {
        return columnNumber <= this.columnCount;
    }
    get columnCount() {
        if (this.columns.includes(":")) {
            return 2;
        }
        return Number(this.columns);
    }
};
HpeColumns.styles = styles;
__decorate([
    property({ reflect: true })
], HpeColumns.prototype, "columns", void 0);
__decorate([
    property({ reflect: true })
], HpeColumns.prototype, "orientation", void 0);
__decorate([
    property({ reflect: true })
], HpeColumns.prototype, "order", void 0);
HpeColumns = __decorate([
    customElement("hpe-columns")
], HpeColumns);
export { HpeColumns };
//# sourceMappingURL=hpe-columns.js.map