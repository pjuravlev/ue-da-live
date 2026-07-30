import { LitElement } from "lit";
/**
 * A button component for user interactions with multiple types, sizes, and states.
 *
 * @tag hpe-button
 * @summary Displays a button with configurable type, size, and state variants.
 *
 * @attr {string} type - Button type: "primary" | "secondary" | "link-primary" | "link-neutral"
 * @attr {string} size - Button size: "small" | "default" | "large"
 * @attr {string} label - Fallback label when no slotted text is provided
 * @attr {boolean} disabled - Whether the button is disabled
 * @attr {boolean} show-left-icon - Whether to show the fallback leading arrow icon
 * @attr {boolean} show-right-icon - Whether to show the fallback trailing arrow icon
 *
 * @slot - Button label text
 * @slot start-icon - Leading icon content, typically an icon component from a separate package
 * @slot end-icon - Trailing icon content, typically an icon component from a separate package
 *
 * @csspart button - The button element
 * @csspart label - The button label text
 * @csspart icon - The icon container
 * @csspart start-icon - The leading icon container
 * @csspart end-icon - The trailing icon container
 */
export declare class HpeButton extends LitElement {
    static styles: import("lit").CSSResult;
    private hasStartIcon;
    private hasEndIcon;
    type: "primary" | "secondary" | "link-primary" | "link-neutral";
    size: "small" | "default" | "large";
    label: string;
    disabled: boolean;
    showLeftIcon: boolean;
    showRightIcon: boolean;
    private hasSlottedIcon;
    connectedCallback(): void;
    private syncSlottedIcons;
    private handleIconSlotChange;
    private get backwardArrowIcon();
    private get forwardArrowIcon();
    private renderIcon;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-button": HpeButton;
    }
}
//# sourceMappingURL=hpe-button.d.ts.map