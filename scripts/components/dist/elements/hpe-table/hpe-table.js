var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, nothing } from "lit";
import { customElement, property, queryAssignedElements, } from "lit/decorators.js";
import { styles } from "./hpe-table.styles.js";
/**
 * A table heading cell used within table header rows.
 *
 * @tag hpe-table-header-cell
 * @summary Displays heading text for a table column.
 *
 * @slot - Header cell content
 *
 * @csspart header-cell - The header cell container
 * @csspart header-cell-content - The header cell content wrapper
 */
let HpeTableHeaderCell = class HpeTableHeaderCell extends LitElement {
    render() {
        return html `
      <th part="header-cell" class="header-cell" scope="col">
        <div part="header-cell-content" class="header-cell-content">
          <slot>Table Heading Cell</slot>
        </div>
      </th>
    `;
    }
};
HpeTableHeaderCell.styles = styles;
HpeTableHeaderCell = __decorate([
    customElement("hpe-table-header-cell")
], HpeTableHeaderCell);
export { HpeTableHeaderCell };
/**
 * A table body cell used within table body rows.
 *
 * @tag hpe-table-body-cell
 * @summary Displays body text content for a table row cell.
 *
 * @slot - Body cell content
 *
 * @csspart body-cell - The body cell container
 * @csspart body-cell-content - The body cell content wrapper
 */
let HpeTableBodyCell = class HpeTableBodyCell extends LitElement {
    render() {
        return html `
      <td part="body-cell" class="body-cell">
        <div part="body-cell-content" class="body-cell-content">
          <slot>Table Body Cell</slot>
        </div>
      </td>
    `;
    }
};
HpeTableBodyCell.styles = styles;
HpeTableBodyCell = __decorate([
    customElement("hpe-table-body-cell")
], HpeTableBodyCell);
export { HpeTableBodyCell };
/**
 * A table header row wrapper for grouping heading cells.
 *
 * @tag hpe-table-header-row
 * @summary Groups one or more table heading cells with a themed row surface.
 *
 * @attr {string} type - Header row theme: "default" | "gray" | "dark"
 *
 * @slot - Header cell elements, typically `<hpe-table-header-cell>`
 *
 * @csspart header-row - The header row container
 */
let HpeTableHeaderRow = class HpeTableHeaderRow extends LitElement {
    constructor() {
        super(...arguments);
        this.type = "default";
    }
    render() {
        return html `
      <tr part="header-row" class="header-row">
        <slot></slot>
      </tr>
    `;
    }
};
HpeTableHeaderRow.styles = styles;
__decorate([
    property({ reflect: true })
], HpeTableHeaderRow.prototype, "type", void 0);
HpeTableHeaderRow = __decorate([
    customElement("hpe-table-header-row")
], HpeTableHeaderRow);
export { HpeTableHeaderRow };
/**
 * A table body row wrapper for grouping body cells.
 *
 * @tag hpe-table-body-row
 * @summary Groups one or more table body cells in horizontal or stacked layouts.
 *
 * @attr {string} orientation - Body row layout: "horizontal" | "vertical"
 * @attr {string} type - Body row theme: "default" | "stripped"
 *
 * @slot - Body cell elements, typically `<hpe-table-body-cell>`
 *
 * @csspart body-row - The body row container
 * @csspart body-row-cells - The body row cells wrapper
 */
let HpeTableBodyRow = class HpeTableBodyRow extends LitElement {
    constructor() {
        super(...arguments);
        this.orientation = "horizontal";
        this.type = "default";
    }
    render() {
        return html `
      <tr part="body-row" class="body-row">
        <div part="body-row-cells" class="body-row-cells">
          <slot></slot>
        </div>
      </tr>
    `;
    }
};
HpeTableBodyRow.styles = styles;
__decorate([
    property({ reflect: true })
], HpeTableBodyRow.prototype, "orientation", void 0);
__decorate([
    property({ reflect: true })
], HpeTableBodyRow.prototype, "type", void 0);
HpeTableBodyRow = __decorate([
    customElement("hpe-table-body-row")
], HpeTableBodyRow);
export { HpeTableBodyRow };
/**
 * A composite table component with slotted header and body rows.
 *
 * @tag hpe-table
 * @summary Displays coordinated table header and body rows with responsive mobile overflow treatment.
 *
 * Provide an accessible name with `aria-label` or `aria-labelledby`.
 *
 * @slot header-row - Header row elements, typically `<hpe-table-header-row>`
 * @slot body-row - Body row elements, typically `<hpe-table-body-row>`
 *
 * @csspart container - The outer table container
 * @csspart table - The scrollable table surface
 * @csspart header-rows - The header rows wrapper
 * @csspart body-rows - The body rows wrapper
 * @csspart overflow-gradient - The mobile overflow gradient hint
 */
let HpeTable = class HpeTable extends LitElement {
    constructor() {
        super(...arguments);
        this.structureObserver = new MutationObserver(() => {
            this.requestUpdate();
        });
        this.handleSlotChange = () => {
            this.observeStructureChanges();
            this.requestUpdate();
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.observeStructureChanges();
    }
    disconnectedCallback() {
        this.structureObserver.disconnect();
        super.disconnectedCallback();
    }
    updated() {
        this.observeStructureChanges();
    }
    render() {
        return html `
      <div part="container" class="container">
        <div class="source-slots" aria-hidden="true">
          <slot name="header-row" @slotchange=${this.handleSlotChange}></slot>
          <slot name="body-row" @slotchange=${this.handleSlotChange}></slot>
        </div>
        <div part="table" class="table">
          <table>
            ${this.headerRows.length > 0
            ? html `
                  <thead part="header-rows" class="header-rows">
                    ${this.headerRows.map((row) => this.renderHeaderRow(row))}
                  </thead>
                `
            : nothing}
            <tbody part="body-rows" class="body-rows">
              ${this.bodyRows.map((row, index) => this.renderBodyRow(row, index))}
            </tbody>
          </table>
        </div>
        <div part="overflow-gradient" class="overflow-gradient"></div>
      </div>
    `;
    }
    observeStructureChanges() {
        this.structureObserver.disconnect();
        for (const row of [...this.headerRows, ...this.bodyRows]) {
            this.structureObserver.observe(row, {
                attributes: true,
                attributeFilter: ["type", "orientation"],
                childList: true,
                characterData: true,
                subtree: true,
            });
        }
    }
    renderHeaderRow(row) {
        const cells = Array.from(row.querySelectorAll("hpe-table-header-cell"));
        return html `
      <tr class=${`header-row ${row.type}`}>
        ${cells.map((cell) => html `
            <th scope="col" class=${`header-cell ${row.type}`}>
              <div class="header-cell-content">
                ${this.renderCellContent(cell, "Table Heading Cell")}
              </div>
            </th>
          `)}
      </tr>
    `;
    }
    renderBodyRow(row, index) {
        const cells = Array.from(row.querySelectorAll("hpe-table-body-cell"));
        const rowTypeClass = row.type === "stripped" && index % 2 === 1 ? "stripped" : "default";
        return html `
      <tr class=${`body-row ${rowTypeClass} ${row.orientation}`}>
        ${cells.map((cell) => html `
            <td class=${`body-cell ${row.orientation}`}>
              <div class="body-cell-content">
                ${this.renderCellContent(cell, "Table Body Cell")}
              </div>
            </td>
          `)}
      </tr>
    `;
    }
    renderCellContent(cell, fallbackText) {
        const nodes = Array.from(cell.childNodes);
        if (nodes.length === 0) {
            return fallbackText;
        }
        return nodes.map((node) => node.cloneNode(true));
    }
};
HpeTable.styles = styles;
__decorate([
    queryAssignedElements({ slot: "header-row", flatten: true })
], HpeTable.prototype, "headerRows", void 0);
__decorate([
    queryAssignedElements({ slot: "body-row", flatten: true })
], HpeTable.prototype, "bodyRows", void 0);
HpeTable = __decorate([
    customElement("hpe-table")
], HpeTable);
export { HpeTable };
//# sourceMappingURL=hpe-table.js.map