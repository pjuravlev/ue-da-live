var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styles } from "./hpe-button.styles";
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
let HpeButton = class HpeButton extends LitElement {
    constructor() {
        super(...arguments);
        this.hasStartIcon = false;
        this.hasEndIcon = false;
        this.type = "primary";
        this.size = "default";
        this.label = "Label";
        this.disabled = false;
        this.showLeftIcon = false;
        this.showRightIcon = true;
    }
    hasSlottedIcon(slotName) {
        return this.querySelector(`[slot="${slotName}"]`) !== null;
    }
    connectedCallback() {
        super.connectedCallback();
        this.syncSlottedIcons();
    }
    syncSlottedIcons() {
        this.hasStartIcon = this.hasSlottedIcon("start-icon");
        this.hasEndIcon = this.hasSlottedIcon("end-icon");
    }
    handleIconSlotChange(event) {
        const slot = event.target;
        const hasAssignedIcon = slot.assignedElements({ flatten: true }).length > 0;
        if (slot.name === "start-icon") {
            this.hasStartIcon = hasAssignedIcon;
            return;
        }
        this.hasEndIcon = hasAssignedIcon;
    }
    get backwardArrowIcon() {
        return html `<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>`;
    }
    get forwardArrowIcon() {
        return html `<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>`;
    }
    renderIcon(slotName, hidden, fallbackIcon) {
        return html `
      <span
        ?hidden=${hidden}
        part="icon ${slotName}"
        class="icon icon-${slotName}"
      >
        <slot name=${slotName} @slotchange=${this.handleIconSlotChange}
          >${fallbackIcon ?? ""}</slot
        >
      </span>
    `;
    }
    render() {
        const renderStartIcon = this.showLeftIcon || this.hasStartIcon;
        const renderEndIcon = this.showRightIcon || this.hasEndIcon;
        return html `
      <button
        part="button"
        class="button"
        type="button"
        ?disabled=${this.disabled}
      >
        ${this.renderIcon("start-icon", !renderStartIcon, this.showLeftIcon ? this.backwardArrowIcon : undefined)}
        <span part="label" class="label">
          <slot>${this.label}</slot>
        </span>
        ${this.renderIcon("end-icon", !renderEndIcon, this.showRightIcon ? this.forwardArrowIcon : undefined)}
      </button>
    `;
    }
};
HpeButton.styles = styles;
__decorate([
    state()
], HpeButton.prototype, "hasStartIcon", void 0);
__decorate([
    state()
], HpeButton.prototype, "hasEndIcon", void 0);
__decorate([
    property({ reflect: true })
], HpeButton.prototype, "type", void 0);
__decorate([
    property({ reflect: true })
], HpeButton.prototype, "size", void 0);
__decorate([
    property({ reflect: true })
], HpeButton.prototype, "label", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], HpeButton.prototype, "disabled", void 0);
__decorate([
    property({ reflect: true, attribute: "show-left-icon", type: Boolean })
], HpeButton.prototype, "showLeftIcon", void 0);
__decorate([
    property({ reflect: true, attribute: "show-right-icon", type: Boolean })
], HpeButton.prototype, "showRightIcon", void 0);
HpeButton = __decorate([
    customElement("hpe-button")
], HpeButton);
export { HpeButton };
//# sourceMappingURL=hpe-button.js.map