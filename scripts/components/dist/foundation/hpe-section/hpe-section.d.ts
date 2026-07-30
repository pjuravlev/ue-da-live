import { LitElement } from "lit";
/**
 * A structural container that constrains content width and applies section padding.
 *
 * @tag hpe-section
 * @summary Groups related content into a distinct area with configurable vertical padding.
 *
 * @attr {string} padding - Padding variant: 'default' | 'none' | 'top' | 'bottom' | 'left-right-only'
 *
 * @slot - Section content
 *
 * @csspart section - The outer section element
 * @csspart container - The inner content-width container
 */
export declare class HpeSection extends LitElement {
    static styles: import("lit").CSSResult;
    padding: "default" | "none" | "top" | "bottom" | "left-right-only";
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-section": HpeSection;
    }
}
//# sourceMappingURL=hpe-section.d.ts.map