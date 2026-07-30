import { LitElement } from "lit";
type StackGap = "xs" | "sm" | "md" | "lg";
/**
 * A horizontal layout primitive that arranges slotted content in a row with token-based gap variants.
 *
 * @tag hpe-x-stack
 * @summary Organizes content horizontally with configurable stack spacing.
 *
 * @attr {string} gap - Gap variant: 'xs' | 'sm' | 'md' | 'lg'
 *
 * @slot - Stack content
 *
 * @csspart stack - The stack container element
 */
export declare class HpeXStack extends LitElement {
    static styles: import("lit").CSSResult;
    gap: StackGap;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-x-stack": HpeXStack;
    }
}
export {};
//# sourceMappingURL=hpe-x-stack.d.ts.map