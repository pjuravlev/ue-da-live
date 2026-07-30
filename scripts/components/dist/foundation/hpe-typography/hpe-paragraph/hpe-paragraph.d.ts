import { LitElement } from "lit";
type ParagraphSize = "sm" | "md" | "lg" | "disclaimer";
type ParagraphRenderTag = "p" | "div" | "span";
/**
 * Paragraph text component covering the paragraph sizes shown in the Figma typography spec.
 *
 * @tag hpe-paragraph
 * @summary Renders token-backed paragraph text with size variants.
 *
 * @attr {string} size - Paragraph size: "sm" | "md" | "lg" | "disclaimer"
 * @attr {string} as - Render tag override: "p" by default, or "div" | "span" for typography-only usage.
 *
 * @slot - Paragraph content
 *
 * @csspart paragraph - The paragraph element
 */
export declare class HpeParagraph extends LitElement {
    static styles: import("lit").CSSResult;
    size: ParagraphSize;
    as: ParagraphRenderTag;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-paragraph": HpeParagraph;
    }
}
export {};
//# sourceMappingURL=hpe-paragraph.d.ts.map