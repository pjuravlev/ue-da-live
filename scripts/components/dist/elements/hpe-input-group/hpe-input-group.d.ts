import { LitElement } from "lit";
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
export declare class HpeInputGroup extends LitElement {
    static styles: import("lit").CSSResult;
    orientation: "horizontal" | "vertical";
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-input-group": HpeInputGroup;
    }
}
//# sourceMappingURL=hpe-input-group.d.ts.map