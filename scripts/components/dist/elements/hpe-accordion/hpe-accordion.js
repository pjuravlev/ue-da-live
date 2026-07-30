var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HpeAccordionItem_1;
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-accordion.styles.js";
let accordionId = 0;
/**
 * A single accordion item with a trigger and expandable content region.
 *
 * @tag hpe-accordion-item
 * @summary Displays a single accordion item with an H5 label and chevron icon.
 *
 * @attr {string} label - Accordion trigger label text
 * @attr {boolean} expanded - Whether the accordion content is expanded
 * @attr {boolean} disabled - Whether the accordion trigger is disabled
 *
 * @slot - Accordion panel content shown when expanded
 *
 * @fires accordion-item-toggle - Emitted when the item requests a new expansion state
 *
 * @csspart item - The accordion item wrapper
 * @csspart trigger - The accordion trigger button
 * @csspart label - The accordion label text
 * @csspart icon - The chevron icon container
 * @csspart panel - The expandable content region
 */
let HpeAccordionItem = HpeAccordionItem_1 = class HpeAccordionItem extends LitElement {
    constructor() {
        super(...arguments);
        this.label = "Accordion Item Label";
        this.expanded = false;
        this.disabled = false;
        this.panelId = `hpe-accordion-panel-${accordionId++}`;
        this.triggerId = `hpe-accordion-trigger-${accordionId++}`;
    }
    render() {
        return html `
      <div part="item" class="item">
        <button
          id=${this.triggerId}
          part="trigger"
          class="trigger"
          type="button"
          aria-expanded=${this.expanded ? "true" : "false"}
          aria-controls=${this.panelId}
          ?disabled=${this.disabled}
          @click=${this.handleToggle}
          @keydown=${this.handleKeydown}
        >
          <span part="label" class="label">${this.label}</span>
          <span part="icon" class="icon" aria-hidden="true">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
        <div
          id=${this.panelId}
          part="panel"
          class="panel"
          role="region"
          aria-labelledby=${this.triggerId}
          ?hidden=${!this.expanded}
        >
          <slot></slot>
        </div>
      </div>
    `;
    }
    focusTrigger() {
        this.shadowRoot?.querySelector("button")?.focus();
    }
    handleToggle() {
        if (this.disabled) {
            return;
        }
        const requestedExpanded = !this.expanded;
        const parentAccordion = this.parentElement;
        if (parentAccordion?.tagName.toLowerCase() === "hpe-accordion") {
            this.dispatchEvent(new CustomEvent("accordion-item-toggle", {
                detail: { item: this, expanded: requestedExpanded },
                bubbles: true,
                composed: true,
            }));
            return;
        }
        this.expanded = requestedExpanded;
    }
    handleKeydown(event) {
        const parentAccordion = this.parentElement;
        if (this.disabled ||
            !parentAccordion ||
            parentAccordion.tagName.toLowerCase() !== "hpe-accordion") {
            return;
        }
        const items = Array.from(parentAccordion.querySelectorAll("hpe-accordion-item")).filter((item) => item instanceof HpeAccordionItem_1);
        const enabledItems = items.filter((item) => !item.disabled);
        const currentIndex = enabledItems.indexOf(this);
        if (currentIndex === -1 || enabledItems.length === 0) {
            return;
        }
        let targetItem;
        switch (event.key) {
            case "ArrowDown":
            case "ArrowRight":
                event.preventDefault();
                targetItem = enabledItems[currentIndex + 1] || enabledItems[0];
                break;
            case "ArrowUp":
            case "ArrowLeft":
                event.preventDefault();
                targetItem =
                    enabledItems[currentIndex - 1] ||
                        enabledItems[enabledItems.length - 1];
                break;
            case "Home":
                event.preventDefault();
                targetItem = enabledItems[0];
                break;
            case "End":
                event.preventDefault();
                targetItem = enabledItems[enabledItems.length - 1];
                break;
        }
        targetItem?.focusTrigger();
    }
};
HpeAccordionItem.styles = styles;
__decorate([
    property({ reflect: true })
], HpeAccordionItem.prototype, "label", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], HpeAccordionItem.prototype, "expanded", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], HpeAccordionItem.prototype, "disabled", void 0);
HpeAccordionItem = HpeAccordionItem_1 = __decorate([
    customElement("hpe-accordion-item")
], HpeAccordionItem);
export { HpeAccordionItem };
/**
 * A parent accordion that coordinates related accordion items.
 *
 * @tag hpe-accordion
 * @summary Organizes multiple accordion items and keeps a single item expanded at a time.
 *
 * @slot - Accordion item elements (use `<hpe-accordion-item>`)
 *
 * @csspart accordion - The accordion container element
 */
let HpeAccordion = class HpeAccordion extends LitElement {
    constructor() {
        super(...arguments);
        this.items = [];
        this.updateItems = () => {
            this.items = Array.from(this.querySelectorAll("hpe-accordion-item")).filter((item) => item instanceof HpeAccordionItem && item.parentElement === this);
            const expandedItems = this.items.filter((item) => item.expanded);
            expandedItems.slice(1).forEach((item) => {
                item.expanded = false;
            });
        };
        this.handleItemToggle = (event) => {
            const { item: targetItem, expanded } = event.detail;
            this.items.forEach((item) => {
                item.expanded = item === targetItem ? expanded : false;
            });
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("accordion-item-toggle", this.handleItemToggle);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("accordion-item-toggle", this.handleItemToggle);
    }
    render() {
        return html `
      <div part="accordion" class="accordion">
        <slot @slotchange=${this.updateItems}></slot>
      </div>
    `;
    }
};
HpeAccordion.styles = styles;
HpeAccordion = __decorate([
    customElement("hpe-accordion")
], HpeAccordion);
export { HpeAccordion };
//# sourceMappingURL=hpe-accordion.js.map