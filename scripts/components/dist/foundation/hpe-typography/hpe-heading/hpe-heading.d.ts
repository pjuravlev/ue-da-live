import { LitElement, nothing } from "lit";
type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingSize = "auto" | "xs" | "sm" | "md" | "lg" | "xl" | "display";
type HeadingRenderTag = HeadingLevel | "div" | "span";
/**
 * Semantic heading text with token-backed visual sizing for the default heading styles from the Figma typography spec.
 *
 * @tag hpe-heading
 * @summary Renders semantic headings with the default heading scale.
 *
 * @attr {string} level - Semantic heading level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
 * @attr {string} size - Visual size: "auto" | "xs" | "sm" | "md" | "lg" | "xl" | "display"
 * @attr {string} as - Render tag override: semantic heading by default, or "div" | "span" for typography-only usage.
 *
 * @slot - Heading content
 *
 * @csspart heading - The rendered heading element
 */
export declare class HpeHeading extends LitElement {
    static styles: import("lit").CSSResult;
    level: HeadingLevel;
    size: HeadingSize;
    as?: HeadingRenderTag;
    private get resolvedScale();
    private get headingClass();
    private get renderedTag();
    private renderTag;
    render(): import("lit-html").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-heading": HpeHeading;
    }
}
export {};
//# sourceMappingURL=hpe-heading.d.ts.map