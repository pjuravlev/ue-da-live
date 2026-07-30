import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-accordion.styles.js";

let accordionId = 0;

type AccordionItemToggleDetail = {
  item: HpeAccordionItem;
  expanded: boolean;
};

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
@customElement("hpe-accordion-item")
export class HpeAccordionItem extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  label = "Accordion Item Label";

  @property({ reflect: true, type: Boolean })
  expanded = false;

  @property({ reflect: true, type: Boolean })
  disabled = false;

  private readonly panelId = `hpe-accordion-panel-${accordionId++}`;

  private readonly triggerId = `hpe-accordion-trigger-${accordionId++}`;

  override render() {
    return html`
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
    this.shadowRoot?.querySelector<HTMLButtonElement>("button")?.focus();
  }

  private handleToggle() {
    if (this.disabled) {
      return;
    }

    const requestedExpanded = !this.expanded;
    const parentAccordion = this.parentElement;

    if (parentAccordion?.tagName.toLowerCase() === "hpe-accordion") {
      this.dispatchEvent(
        new CustomEvent<AccordionItemToggleDetail>("accordion-item-toggle", {
          detail: { item: this, expanded: requestedExpanded },
          bubbles: true,
          composed: true,
        }),
      );
      return;
    }

    this.expanded = requestedExpanded;
  }

  private handleKeydown(event: KeyboardEvent) {
    const parentAccordion = this.parentElement;
    if (
      this.disabled ||
      !parentAccordion ||
      parentAccordion.tagName.toLowerCase() !== "hpe-accordion"
    ) {
      return;
    }

    const items = Array.from(
      parentAccordion.querySelectorAll("hpe-accordion-item"),
    ).filter(
      (item): item is HpeAccordionItem => item instanceof HpeAccordionItem,
    );
    const enabledItems = items.filter((item) => !item.disabled);
    const currentIndex = enabledItems.indexOf(this);

    if (currentIndex === -1 || enabledItems.length === 0) {
      return;
    }

    let targetItem: HpeAccordionItem | undefined;

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
}

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
@customElement("hpe-accordion")
export class HpeAccordion extends LitElement {
  static override styles = styles;

  private items: HpeAccordionItem[] = [];

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener(
      "accordion-item-toggle",
      this.handleItemToggle as EventListener,
    );
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener(
      "accordion-item-toggle",
      this.handleItemToggle as EventListener,
    );
  }

  override render() {
    return html`
      <div part="accordion" class="accordion">
        <slot @slotchange=${this.updateItems}></slot>
      </div>
    `;
  }

  private updateItems = () => {
    this.items = Array.from(this.querySelectorAll("hpe-accordion-item")).filter(
      (item): item is HpeAccordionItem =>
        item instanceof HpeAccordionItem && item.parentElement === this,
    );

    const expandedItems = this.items.filter((item) => item.expanded);
    expandedItems.slice(1).forEach((item) => {
      item.expanded = false;
    });
  };

  private handleItemToggle = (
    event: CustomEvent<AccordionItemToggleDetail>,
  ) => {
    const { item: targetItem, expanded } = event.detail;

    this.items.forEach((item) => {
      item.expanded = item === targetItem ? expanded : false;
    });
  };
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-accordion": HpeAccordion;
    "hpe-accordion-item": HpeAccordionItem;
  }
}
