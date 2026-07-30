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
@customElement("hpe-button")
export class HpeButton extends LitElement {
  static override styles = styles;

  @state()
  private hasStartIcon = false;

  @state()
  private hasEndIcon = false;

  @property({ reflect: true })
  type: "primary" | "secondary" | "link-primary" | "link-neutral" = "primary";

  @property({ reflect: true })
  size: "small" | "default" | "large" = "default";

  @property({ reflect: true })
  label = "Label";

  @property({ reflect: true, type: Boolean })
  disabled = false;

  @property({ reflect: true, attribute: "show-left-icon", type: Boolean })
  showLeftIcon = false;

  @property({ reflect: true, attribute: "show-right-icon", type: Boolean })
  showRightIcon = true;

  private hasSlottedIcon(slotName: "start-icon" | "end-icon") {
    return this.querySelector(`[slot="${slotName}"]`) !== null;
  }

  override connectedCallback() {
    super.connectedCallback();
    this.syncSlottedIcons();
  }

  private syncSlottedIcons() {
    this.hasStartIcon = this.hasSlottedIcon("start-icon");
    this.hasEndIcon = this.hasSlottedIcon("end-icon");
  }

  private handleIconSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    const hasAssignedIcon = slot.assignedElements({ flatten: true }).length > 0;

    if (slot.name === "start-icon") {
      this.hasStartIcon = hasAssignedIcon;
      return;
    }

    this.hasEndIcon = hasAssignedIcon;
  }

  private get backwardArrowIcon() {
    return html`<svg
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

  private get forwardArrowIcon() {
    return html`<svg
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

  private renderIcon(
    slotName: "start-icon" | "end-icon",
    hidden: boolean,
    fallbackIcon?: ReturnType<typeof html>,
  ) {
    return html`
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

  override render() {
    const renderStartIcon = this.showLeftIcon || this.hasStartIcon;
    const renderEndIcon = this.showRightIcon || this.hasEndIcon;

    return html`
      <button
        part="button"
        class="button"
        type="button"
        ?disabled=${this.disabled}
      >
        ${this.renderIcon(
          "start-icon",
          !renderStartIcon,
          this.showLeftIcon ? this.backwardArrowIcon : undefined,
        )}
        <span part="label" class="label">
          <slot>${this.label}</slot>
        </span>
        ${this.renderIcon(
          "end-icon",
          !renderEndIcon,
          this.showRightIcon ? this.forwardArrowIcon : undefined,
        )}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-button": HpeButton;
  }
}
