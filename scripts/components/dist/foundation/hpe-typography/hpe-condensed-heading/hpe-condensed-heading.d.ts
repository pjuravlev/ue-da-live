import { LitElement, nothing } from "lit";
type CondensedHeadingLevel = "h1" | "h2";
type CondensedHeadingSize = "auto" | "display";
type CondensedHeadingWeight = "regular" | "bold" | "light";
type CondensedHeadingRenderTag = CondensedHeadingLevel | "div" | "span";
/**
 * Condensed uppercase heading text for the display heading styles shown in the Figma typography spec.
 *
 * @tag hpe-condensed-heading
 * @summary Renders token-backed condensed heading text for h1 and h2 display scales.
 *
 * @attr {string} level - Semantic heading level: "h1" | "h2"
 * @attr {string} size - Visual size: "auto" | "display"
 * @attr {string} weight - Condensed weight: "regular" | "bold" | "light"
 * @attr {string} as - Render tag override: semantic heading by default, or "div" | "span" for typography-only usage.
 *
 * @slot - Heading content
 *
 * @csspart heading - The rendered condensed heading element
 */
export declare class HpeCondensedHeading extends LitElement {
    static styles: import("lit").CSSResult;
    level: CondensedHeadingLevel;
    size: CondensedHeadingSize;
    weight: CondensedHeadingWeight;
    as?: CondensedHeadingRenderTag;
    private get resolvedScale();
    private get headingClass();
    private get renderedTag();
    private renderTag;
    render(): import("lit-html").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-condensed-heading": HpeCondensedHeading;
    }
}
export {};
//# sourceMappingURL=hpe-condensed-heading.d.ts.map