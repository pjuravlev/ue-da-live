import { LitElement } from "lit";
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
export declare class HpeTableHeaderCell extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
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
export declare class HpeTableBodyCell extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
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
export declare class HpeTableHeaderRow extends LitElement {
    static styles: import("lit").CSSResult;
    type: "default" | "gray" | "dark";
    render(): import("lit-html").TemplateResult<1>;
}
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
export declare class HpeTableBodyRow extends LitElement {
    static styles: import("lit").CSSResult;
    orientation: "horizontal" | "vertical";
    type: "default" | "stripped";
    render(): import("lit-html").TemplateResult<1>;
}
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
export declare class HpeTable extends LitElement {
    static styles: import("lit").CSSResult;
    private structureObserver;
    private headerRows;
    private bodyRows;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(): void;
    render(): import("lit-html").TemplateResult<1>;
    private handleSlotChange;
    private observeStructureChanges;
    private renderHeaderRow;
    private renderBodyRow;
    private renderCellContent;
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-table": HpeTable;
        "hpe-table-header-row": HpeTableHeaderRow;
        "hpe-table-header-cell": HpeTableHeaderCell;
        "hpe-table-body-row": HpeTableBodyRow;
        "hpe-table-body-cell": HpeTableBodyCell;
    }
}
//# sourceMappingURL=hpe-table.d.ts.map