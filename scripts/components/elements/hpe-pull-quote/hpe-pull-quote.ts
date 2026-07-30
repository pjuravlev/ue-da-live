import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styles } from "./hpe-pull-quote.styles.js";
import "../../foundation/hpe-typography/hpe-heading/hpe-heading.js";
import "../../foundation/hpe-typography/hpe-paragraph/hpe-paragraph.js";

/**
 * A pull quote component for highlighting notable quotes with optional attribution.
 *
 * @tag hpe-pull-quote
 * @summary Displays a highlighted pull quote with a decorative opening quote mark and optional attribution.
 *
 * @attr {boolean} hide-quote-sign - When present, hides the decorative opening quote mark.
 *
 * @slot - The quote body text.
 * @slot attribution-name - The name of the person being quoted.
 * @slot attribution-role - The role or title of the person being quoted.
 *
 * @csspart quote-sign - The decorative SVG quote mark.
 * @csspart quote-body - The wrapper containing the quote text and attribution.
 * @csspart attribution - The attribution section.
 * @csspart attribution-name - The attribution name element.
 * @csspart attribution-role - The attribution role element.
 */
@customElement("hpe-pull-quote")
export class HpePullQuote extends LitElement {
  static override styles = styles;

  @property({ type: Boolean, attribute: "hide-quote-sign", reflect: true })
  hideQuoteSign = false;

  @state()
  private _hasAttribution = false;

  private _onAttributionSlotChange() {
    const attributionNameSlot = this.shadowRoot?.querySelector<HTMLSlotElement>(
      'slot[name="attribution-name"]',
    );
    const attributionRoleSlot = this.shadowRoot?.querySelector<HTMLSlotElement>(
      'slot[name="attribution-role"]',
    );

    const hasAttributionName =
      (attributionNameSlot?.assignedNodes({ flatten: true }).length ?? 0) > 0;
    const hasAttributionRole =
      (attributionRoleSlot?.assignedNodes({ flatten: true }).length ?? 0) > 0;

    this._hasAttribution = hasAttributionName || hasAttributionRole;
  }

  override render() {
    return html`
      ${!this.hideQuoteSign
        ? html`<span part="quote-sign" class="quote-sign" aria-hidden="true">
            <svg
              width="29"
              height="22"
              viewBox="0 0 29 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              aria-hidden="true"
            >
              <path
                d="M2.55469 2.02832C2.97 0.815027 4.11115 0 5.39355 0H6.97461C9.05306 0 10.5019 2.06236 9.79688 4.01758L8.30622 8.15098C8.07118 8.80274 8.55408 9.49023 9.24692 9.49023H11.667C13.3238 9.49023 14.667 10.8334 14.667 12.4902L14.667 19C14.667 20.6569 13.3238 22 11.667 22L3 22C1.34316 22 0 20.6568 0 19L0 9.4908C0 9.49049 0.000254631 9.49023 0.000569344 9.49023C0.000812531 9.49023 0.00102997 9.49008 0.00110817 9.48985L2.55469 2.02832Z"
                fill="currentColor"
              />
              <path
                d="M18.667 22C17.0101 22 15.667 20.6568 15.667 19L15.667 9.48982C15.667 9.48951 15.6672 9.48926 15.6676 9.48926C15.6678 9.48926 15.668 9.4891 15.6681 9.48886L17.8896 2.13281C18.2721 0.8666 19.439 0.000104904 20.7617 0H21.4873C23.5173 0.000297546 24.9609 1.97462 24.3457 3.90918L22.9849 8.18607C22.7797 8.83101 23.2611 9.48926 23.9379 9.48926H25.6084C27.265 9.48931 28.6081 10.8327 28.6084 12.4893L28.6084 19C28.6084 20.6568 27.2652 21.9999 25.6084 22L18.667 22Z"
                fill="currentColor"
              />
            </svg>
          </span>`
        : ""}
      <div part="quote-body" class="quote-body">
        <hpe-paragraph class="quote-text" size="lg">
          <slot></slot>
        </hpe-paragraph>
        <footer
          part="attribution"
          class="attribution"
          ?hidden=${!this._hasAttribution}
        >
          <hpe-heading
            part="attribution-name"
            class="attribution-name"
            level="h5"
            as="span"
          >
            <slot
              name="attribution-name"
              @slotchange=${this._onAttributionSlotChange}
            ></slot>
          </hpe-heading>
          <hpe-paragraph
            part="attribution-role"
            class="attribution-role"
            size="md"
          >
            <slot
              name="attribution-role"
              @slotchange=${this._onAttributionSlotChange}
            ></slot>
          </hpe-paragraph>
        </footer>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-pull-quote": HpePullQuote;
  }
}
