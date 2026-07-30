import { LitElement } from "lit";
type ColumnsVariant = "1" | "2" | "3" | "4" | "5" | "40:60" | "60:40" | "33:66" | "66:33" | "20:80" | "80:20";
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
export declare class HpeColumns extends LitElement {
    static styles: import("lit").CSSResult;
    columns: ColumnsVariant;
    orientation: Orientation;
    order: Order;
    render(): import("lit-html").TemplateResult<1>;
    private renderColumn;
    private shouldRenderColumn;
    private get columnCount();
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-columns": HpeColumns;
    }
}
export {};
//# sourceMappingURL=hpe-columns.d.ts.map