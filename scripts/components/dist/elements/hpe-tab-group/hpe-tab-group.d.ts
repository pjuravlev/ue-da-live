import { LitElement } from "lit";
/**
 * A tab element that serves as a label for one of the tab panels.
 *
 * @tag hpe-tab
 * @summary A selectable label within a tab group that activates its associated panel
 *
 * @attr {string} activation-mode - Tab activation mode: "automatic" | "manual"
 *
 * @attr {string} orientation - Tab orientation: "horizontal" | "vertical"
 *
 * @attr {boolean} disabled - Whether the tab is disabled
 *
 * @slot - Tab label text
 *
 * @fires tab-selected - Emitted when the tab is selected
 *
 * @csspart tab - The tab container element
 */
export declare class HpeTab extends LitElement {
    static styles: import("lit").CSSResult;
    activationMode: "automatic" | "manual";
    orientation: "horizontal" | "vertical";
    active: boolean;
    disabled: boolean;
    focus(options?: FocusOptions): void;
    render(): import("lit-html").TemplateResult<1>;
    private handleClick;
    private handleKeydown;
    selectTab(): void;
}
/**
 * A tab panel component that contains content for a specific tab.
 *
 * @tag hpe-tab-panel
 * @summary A container for tab panel content that corresponds to an active tab
 *
 * @slot - Tab panel content
 *
 * @csspart tab-panel - The tab panel container element
 */
export declare class HpeTabPanel extends LitElement {
    static styles: import("lit").CSSResult;
    active: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
/**
 * A tab group component for organizing related content.
 *
 * @tag hpe-tab-group
 * @summary Tab groups organize related content and allow navigation between groups of information
 *
 * @attr {string} activation-mode - Tab activation mode: "automatic" | "manual"
 *
 * @attr {string} orientation - Tab orientation: "horizontal" | "vertical"
 *
 * @slot tab - The tab elements (use `<hpe-tab>` elements)
 * @slot panel - The tab panel elements (use `<hpe-tab-panel>` elements)
 *
 * @csspart tabs - The main tab group container
 * @csspart tab-group - The tab group wrapper
 * @csspart tab-panels - The tab panels container
 */
export declare class HpeTabGroup extends LitElement {
    static styles: import("lit").CSSResult;
    activationMode: "automatic" | "manual";
    orientation: "horizontal" | "vertical";
    activeTabIndex: number;
    private tabs;
    private panels;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(): void;
    render(): import("lit-html").TemplateResult<1>;
    private updateTabsAndPanels;
    private handleTabSelected;
    private setActiveTab;
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-tab-group": HpeTabGroup;
        "hpe-tab": HpeTab;
        "hpe-tab-panel": HpeTabPanel;
    }
}
//# sourceMappingURL=hpe-tab-group.d.ts.map