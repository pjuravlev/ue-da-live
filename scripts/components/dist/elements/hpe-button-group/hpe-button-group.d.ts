import { LitElement } from "lit";
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
export declare class HpeButtonGroup extends LitElement {
    static styles: import("lit").CSSResult;
    orientation: "horizontal" | "vertical";
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-button-group": HpeButtonGroup;
    }
}
//# sourceMappingURL=hpe-button-group.d.ts.map