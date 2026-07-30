import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-columns.styles.js";

type ColumnsVariant =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "40:60"
  | "60:40"
  | "33:66"
  | "66:33"
  | "20:80"
  | "80:20";

type Orientation = "horizontal" | "vertical";
type Order = "default" | "reverse";

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
@customElement("hpe-columns")
export class HpeColumns extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  columns: ColumnsVariant = "2";

  @property({ reflect: true })
  orientation: Orientation = "horizontal";

  @property({ reflect: true })
  order: Order = "default";

  override render() {
    return html`
      <div part="columns" class="columns">
        ${this.renderColumn("column-1")}
        ${this.shouldRenderColumn(2) ? this.renderColumn("column-2") : ""}
        ${this.shouldRenderColumn(3) ? this.renderColumn("column-3") : ""}
        ${this.shouldRenderColumn(4) ? this.renderColumn("column-4") : ""}
        ${this.shouldRenderColumn(5) ? this.renderColumn("column-5") : ""}
      </div>
    `;
  }

  private renderColumn(slotName: string) {
    return html`
      <div part="column" class="column ${slotName}">
        <slot name=${slotName}></slot>
      </div>
    `;
  }

  private shouldRenderColumn(columnNumber: number) {
    return columnNumber <= this.columnCount;
  }

  private get columnCount() {
    if (this.columns.includes(":")) {
      return 2;
    }

    return Number(this.columns);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-columns": HpeColumns;
  }
}
