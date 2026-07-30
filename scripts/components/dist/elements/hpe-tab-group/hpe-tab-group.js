var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-tab-group.styles.js";
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
let HpeTab = class HpeTab extends LitElement {
    constructor() {
        super(...arguments);
        this.activationMode = "automatic";
        this.orientation = "horizontal";
        this.active = false;
        this.disabled = false;
    }
    focus(options) {
        this.shadowRoot?.querySelector("button")?.focus(options);
    }
    render() {
        return html `
      <button
        part="tab"
        class="tab"
        @click=${this.handleClick}
        @keydown=${this.handleKeydown}
        role="tab"
        aria-selected=${this.active ? "true" : "false"}
        tabindex=${this.disabled ? -1 : this.active ? 0 : -1}
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </button>
    `;
    }
    handleClick() {
        if (!this.disabled) {
            this.selectTab();
        }
    }
    handleKeydown(e) {
        if (this.disabled)
            return;
        const tablist = this.parentElement;
        if (!tablist)
            return;
        const tabs = Array.from(tablist.querySelectorAll("hpe-tab"));
        const currentIndex = tabs.indexOf(this);
        const isVertical = this.orientation === "vertical";
        let targetTab;
        switch (e.key) {
            case "ArrowLeft":
                if (isVertical)
                    return;
                e.preventDefault();
                targetTab = tabs[currentIndex - 1] || tabs[tabs.length - 1];
                break;
            case "ArrowRight":
                if (isVertical)
                    return;
                e.preventDefault();
                targetTab = tabs[currentIndex + 1] || tabs[0];
                break;
            case "ArrowUp":
                if (!isVertical)
                    return;
                e.preventDefault();
                targetTab = tabs[currentIndex - 1] || tabs[tabs.length - 1];
                break;
            case "ArrowDown":
                if (!isVertical)
                    return;
                e.preventDefault();
                targetTab = tabs[currentIndex + 1] || tabs[0];
                break;
            case "Home":
                e.preventDefault();
                targetTab = tabs[0];
                break;
            case "End":
                e.preventDefault();
                targetTab = tabs[tabs.length - 1];
                break;
        }
        if (targetTab && !targetTab.disabled) {
            targetTab.focus();
            if (this.activationMode === "automatic") {
                targetTab.selectTab();
            }
        }
    }
    selectTab() {
        this.dispatchEvent(new CustomEvent("tab-selected", {
            detail: { tab: this },
            bubbles: true,
            composed: true,
        }));
    }
};
HpeTab.styles = styles;
__decorate([
    property({ reflect: true, attribute: "activation-mode" })
], HpeTab.prototype, "activationMode", void 0);
__decorate([
    property({ reflect: true })
], HpeTab.prototype, "orientation", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], HpeTab.prototype, "active", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], HpeTab.prototype, "disabled", void 0);
HpeTab = __decorate([
    customElement("hpe-tab")
], HpeTab);
export { HpeTab };
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
let HpeTabPanel = class HpeTabPanel extends LitElement {
    constructor() {
        super(...arguments);
        this.active = false;
    }
    render() {
        return html `
      <div
        part="tab-panel"
        class="tab-panel"
        role="tabpanel"
        ?hidden=${!this.active}
      >
        <slot></slot>
      </div>
    `;
    }
};
HpeTabPanel.styles = styles;
__decorate([
    property({ reflect: true, type: Boolean })
], HpeTabPanel.prototype, "active", void 0);
HpeTabPanel = __decorate([
    customElement("hpe-tab-panel")
], HpeTabPanel);
export { HpeTabPanel };
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
let HpeTabGroup = class HpeTabGroup extends LitElement {
    constructor() {
        super(...arguments);
        this.activationMode = "automatic";
        this.orientation = "horizontal";
        this.activeTabIndex = 0;
        this.tabs = [];
        this.panels = [];
        this.handleTabSelected = (e) => {
            const customEvent = e;
            const selectedTab = customEvent.detail.tab;
            const index = this.tabs.indexOf(selectedTab);
            if (index !== -1) {
                this.setActiveTab(index);
            }
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("tab-selected", this.handleTabSelected);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("tab-selected", this.handleTabSelected);
    }
    updated() {
        this.updateTabsAndPanels();
    }
    render() {
        return html `
      <div part="tab-group" class="tab-group">
        <div
          role="tablist"
          aria-orientation=${this.orientation}
          part="tabs"
          class="tabs"
        >
          <slot name="tab" @slotchange=${this.updateTabsAndPanels}></slot>
        </div>
        <div class="tab-panels" part="tab-panels">
          <slot name="panel" @slotchange=${this.updateTabsAndPanels}></slot>
        </div>
      </div>
    `;
    }
    updateTabsAndPanels() {
        const tabSlot = this.shadowRoot?.querySelector('slot[name="tab"]');
        const panelSlot = this.shadowRoot?.querySelector('slot[name="panel"]');
        if (!tabSlot || !panelSlot)
            return;
        this.tabs = tabSlot.assignedElements().filter((el) => el instanceof HpeTab);
        this.panels = panelSlot.assignedElements().filter((el) => el instanceof HpeTabPanel);
        this.tabs.forEach((tab) => {
            tab.orientation = this.orientation;
            tab.activationMode = this.activationMode;
        });
        this.setActiveTab(this.activeTabIndex);
    }
    setActiveTab(index) {
        if (this.tabs.length === 0)
            return;
        const validIndex = Math.max(0, Math.min(index, this.tabs.length - 1));
        this.activeTabIndex = validIndex;
        this.tabs.forEach((tab, i) => {
            const isActive = i === validIndex;
            tab.active = isActive;
        });
        this.panels.forEach((panel, i) => {
            panel.active = i === validIndex;
        });
    }
};
HpeTabGroup.styles = styles;
__decorate([
    property({ reflect: true, attribute: "activation-mode" })
], HpeTabGroup.prototype, "activationMode", void 0);
__decorate([
    property({ reflect: true })
], HpeTabGroup.prototype, "orientation", void 0);
__decorate([
    property({ type: Number })
], HpeTabGroup.prototype, "activeTabIndex", void 0);
HpeTabGroup = __decorate([
    customElement("hpe-tab-group")
], HpeTabGroup);
export { HpeTabGroup };
//# sourceMappingURL=hpe-tab-group.js.map