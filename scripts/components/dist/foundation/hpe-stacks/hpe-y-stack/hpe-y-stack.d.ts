import { LitElement } from "lit";
type StackGap = "xs" | "sm" | "md" | "lg";
/**
 * A vertical layout primitive that arranges slotted content in a column with token-based gap variants.
 *
 * @tag hpe-y-stack
 * @summary Organizes content vertically with configurable stack spacing.
 *
 * @attr {string} gap - Gap variant: 'xs' | 'sm' | 'md' | 'lg'
 *
 * @slot - Stack content
 *
 * @csspart stack - The stack container element
 */
export declare class HpeYStack extends LitElement {
    static styles: import("lit").CSSResult;
    gap: StackGap;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-y-stack": HpeYStack;
    }
}
export {};
//# sourceMappingURL=hpe-y-stack.d.ts.map