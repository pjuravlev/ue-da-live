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
@customElement("hpe-tab")
export class HpeTab extends LitElement {
  static override styles = styles;

  @property({ reflect: true, attribute: "activation-mode" })
  activationMode: "automatic" | "manual" = "automatic";

  @property({ reflect: true })
  orientation: "horizontal" | "vertical" = "horizontal";

  @property({ reflect: true, type: Boolean })
  active = false;

  @property({ reflect: true, type: Boolean })
  disabled = false;

  override focus(options?: FocusOptions) {
    this.shadowRoot?.querySelector<HTMLButtonElement>("button")?.focus(options);
  }

  override render() {
    return html`
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

  private handleClick() {
    if (!this.disabled) {
      this.selectTab();
    }
  }

  private handleKeydown(e: KeyboardEvent) {
    if (this.disabled) return;

    const tablist = this.parentElement;
    if (!tablist) return;

    const tabs = Array.from(tablist.querySelectorAll("hpe-tab")) as HpeTab[];
    const currentIndex = tabs.indexOf(this);
    const isVertical = this.orientation === "vertical";

    let targetTab: HpeTab | undefined;

    switch (e.key) {
      case "ArrowLeft":
        if (isVertical) return;
        e.preventDefault();
        targetTab = tabs[currentIndex - 1] || tabs[tabs.length - 1];
        break;
      case "ArrowRight":
        if (isVertical) return;
        e.preventDefault();
        targetTab = tabs[currentIndex + 1] || tabs[0];
        break;
      case "ArrowUp":
        if (!isVertical) return;
        e.preventDefault();
        targetTab = tabs[currentIndex - 1] || tabs[tabs.length - 1];
        break;
      case "ArrowDown":
        if (!isVertical) return;
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
    this.dispatchEvent(
      new CustomEvent("tab-selected", {
        detail: { tab: this },
        bubbles: true,
        composed: true,
      }),
    );
  }
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
@customElement("hpe-tab-panel")
export class HpeTabPanel extends LitElement {
  static override styles = styles;

  @property({ reflect: true, type: Boolean })
  active = false;

  override render() {
    return html`
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
@customElement("hpe-tab-group")
export class HpeTabGroup extends LitElement {
  static override styles = styles;

  @property({ reflect: true, attribute: "activation-mode" })
  activationMode: "automatic" | "manual" = "automatic";

  @property({ reflect: true })
  orientation: "horizontal" | "vertical" = "horizontal";

  @property({ type: Number })
  activeTabIndex = 0;

  private tabs: HpeTab[] = [];
  private panels: HpeTabPanel[] = [];

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener(
      "tab-selected",
      this.handleTabSelected as EventListener,
    );
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener(
      "tab-selected",
      this.handleTabSelected as EventListener,
    );
  }

  override updated() {
    this.updateTabsAndPanels();
  }

  override render() {
    return html`
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

  private updateTabsAndPanels() {
    const tabSlot = this.shadowRoot?.querySelector(
      'slot[name="tab"]',
    ) as HTMLSlotElement;
    const panelSlot = this.shadowRoot?.querySelector(
      'slot[name="panel"]',
    ) as HTMLSlotElement;

    if (!tabSlot || !panelSlot) return;

    this.tabs = (tabSlot.assignedElements() as HpeTab[]).filter(
      (el) => el instanceof HpeTab,
    );
    this.panels = (panelSlot.assignedElements() as HpeTabPanel[]).filter(
      (el) => el instanceof HpeTabPanel,
    );

    this.tabs.forEach((tab) => {
      tab.orientation = this.orientation;
      tab.activationMode = this.activationMode;
    });

    this.setActiveTab(this.activeTabIndex);
  }

  private handleTabSelected = (e: Event) => {
    const customEvent = e as CustomEvent<{ tab: HpeTab }>;
    const selectedTab = customEvent.detail.tab;
    const index = this.tabs.indexOf(selectedTab);
    if (index !== -1) {
      this.setActiveTab(index);
    }
  };

  private setActiveTab(index: number) {
    if (this.tabs.length === 0) return;

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
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-tab-group": HpeTabGroup;
    "hpe-tab": HpeTab;
    "hpe-tab-panel": HpeTabPanel;
  }
}
