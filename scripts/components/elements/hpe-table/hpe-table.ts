import { LitElement, html, nothing } from "lit";
import {
  customElement,
  property,
  queryAssignedElements,
} from "lit/decorators.js";
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
@customElement("hpe-table-header-cell")
export class HpeTableHeaderCell extends LitElement {
  static override styles = styles;

  override render() {
    return html`
      <th part="header-cell" class="header-cell" scope="col">
        <div part="header-cell-content" class="header-cell-content">
          <slot>Table Heading Cell</slot>
        </div>
      </th>
    `;
  }
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
@customElement("hpe-table-body-cell")
export class HpeTableBodyCell extends LitElement {
  static override styles = styles;

  override render() {
    return html`
      <td part="body-cell" class="body-cell">
        <div part="body-cell-content" class="body-cell-content">
          <slot>Table Body Cell</slot>
        </div>
      </td>
    `;
  }
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
@customElement("hpe-table-header-row")
export class HpeTableHeaderRow extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  type: "default" | "gray" | "dark" = "default";

  override render() {
    return html`
      <tr part="header-row" class="header-row">
        <slot></slot>
      </tr>
    `;
  }
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
@customElement("hpe-table-body-row")
export class HpeTableBodyRow extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  orientation: "horizontal" | "vertical" = "horizontal";

  @property({ reflect: true })
  type: "default" | "stripped" = "default";

  override render() {
    return html`
      <tr part="body-row" class="body-row">
        <div part="body-row-cells" class="body-row-cells">
          <slot></slot>
        </div>
      </tr>
    `;
  }
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
@customElement("hpe-table")
export class HpeTable extends LitElement {
  static override styles = styles;

  private structureObserver = new MutationObserver(() => {
    this.requestUpdate();
  });

  @queryAssignedElements({ slot: "header-row", flatten: true })
  private headerRows!: HpeTableHeaderRow[];

  @queryAssignedElements({ slot: "body-row", flatten: true })
  private bodyRows!: HpeTableBodyRow[];

  override connectedCallback() {
    super.connectedCallback();
    this.observeStructureChanges();
  }

  override disconnectedCallback() {
    this.structureObserver.disconnect();
    super.disconnectedCallback();
  }

  override updated() {
    this.observeStructureChanges();
  }

  override render() {
    return html`
      <div part="container" class="container">
        <div class="source-slots" aria-hidden="true">
          <slot name="header-row" @slotchange=${this.handleSlotChange}></slot>
          <slot name="body-row" @slotchange=${this.handleSlotChange}></slot>
        </div>
        <div part="table" class="table">
          <table>
            ${this.headerRows.length > 0
              ? html`
                  <thead part="header-rows" class="header-rows">
                    ${this.headerRows.map((row) => this.renderHeaderRow(row))}
                  </thead>
                `
              : nothing}
            <tbody part="body-rows" class="body-rows">
              ${this.bodyRows.map((row, index) =>
                this.renderBodyRow(row, index),
              )}
            </tbody>
          </table>
        </div>
        <div part="overflow-gradient" class="overflow-gradient"></div>
      </div>
    `;
  }

  private handleSlotChange = () => {
    this.observeStructureChanges();
    this.requestUpdate();
  };

  private observeStructureChanges() {
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

  private renderHeaderRow(row: HpeTableHeaderRow) {
    const cells = Array.from(
      row.querySelectorAll("hpe-table-header-cell"),
    ) as HpeTableHeaderCell[];

    return html`
      <tr class=${`header-row ${row.type}`}>
        ${cells.map(
          (cell) => html`
            <th scope="col" class=${`header-cell ${row.type}`}>
              <div class="header-cell-content">
                ${this.renderCellContent(cell, "Table Heading Cell")}
              </div>
            </th>
          `,
        )}
      </tr>
    `;
  }

  private renderBodyRow(row: HpeTableBodyRow, index: number) {
    const cells = Array.from(
      row.querySelectorAll("hpe-table-body-cell"),
    ) as HpeTableBodyCell[];
    const rowTypeClass =
      row.type === "stripped" && index % 2 === 1 ? "stripped" : "default";

    return html`
      <tr class=${`body-row ${rowTypeClass} ${row.orientation}`}>
        ${cells.map(
          (cell) => html`
            <td class=${`body-cell ${row.orientation}`}>
              <div class="body-cell-content">
                ${this.renderCellContent(cell, "Table Body Cell")}
              </div>
            </td>
          `,
        )}
      </tr>
    `;
  }

  private renderCellContent(
    cell: HpeTableHeaderCell | HpeTableBodyCell,
    fallbackText: string,
  ) {
    const nodes = Array.from(cell.childNodes);

    if (nodes.length === 0) {
      return fallbackText;
    }

    return nodes.map((node) => node.cloneNode(true));
  }
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
