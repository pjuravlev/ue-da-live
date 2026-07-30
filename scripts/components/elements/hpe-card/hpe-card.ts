import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styles } from "./hpe-card.styles.js";
import "../hpe-button/hpe-button.js";
import "../hpe-button-group/hpe-button-group.js";
import "../../foundation/hpe-typography/hpe-heading/hpe-heading.js";
import "../../foundation/hpe-typography/hpe-paragraph/hpe-paragraph.js";

/**
 * A card component for displaying content in a contained, visually
 * distinct surface. The card provides named regions that align with
 * the current design structure and encourage composition with
 * existing package primitives.
 *
 * @tag hpe-card
 * @summary Displays content in a card surface with media, header, copy, footer, and action regions.
 *
 * @attr {string} variant - Card presentation: "default" | "flush"
 *
 * @slot media - Primary visual media. Intended to host hpe-image.
 * @slot header - Optional supportive content such as an avatar or logo.
 * @slot tagline - Optional small label above the heading.
 * @slot heading - Headline content.
 * @slot body - Body copy content.
 * @slot footer - Optional supporting content displayed above actions.
 * @slot actions - Optional action group. Falls back to a single link-primary button.
 *
 * @csspart card - The outer card container element
 * @csspart card-media - The media area wrapper
 * @csspart card-header - The optional header region wrapper
 * @csspart card-body - The text content area wrapper
 * @csspart card-content - The main text content wrapper
 * @csspart tagline - The tagline region wrapper
 * @csspart heading - The heading region wrapper
 * @csspart body - The body region wrapper
 * @csspart card-footer - The optional footer region wrapper
 * @csspart card-actions - The action region wrapper
 */
@customElement("hpe-card")
export class HpeCard extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  variant: "default" | "flush" = "default";

  @state()
  private _hasMedia = false;

  @state()
  private _hasHeader = false;

  @state()
  private _hasFooter = false;

  @state()
  private _hasActions = false;

  private _hasAssignedElements(slot: HTMLSlotElement) {
    return slot.assignedElements({ flatten: true }).length > 0;
  }

  private _onMediaSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this._hasMedia = this._hasAssignedElements(slot);
  }

  private _onHeaderSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this._hasHeader = this._hasAssignedElements(slot);
  }

  private _onFooterSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this._hasFooter = this._hasAssignedElements(slot);
  }

  private _onActionsSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    const assignedElements = slot.assignedElements({ flatten: true });
    this._hasActions = assignedElements.length > 0;

    assignedElements.forEach((element) => {
      if (element.tagName.toLowerCase() === "hpe-button-group") {
        element.setAttribute("orientation", "vertical");
      }
    });
  }

  override render() {
    return html`
      <div part="card" class="card">
        <div part="card-media" class="card-media" ?hidden=${!this._hasMedia}>
          <slot name="media" @slotchange=${this._onMediaSlotChange}></slot>
        </div>
        <div part="card-body" class="card-body">
          <div
            part="card-header"
            class="card-header"
            ?hidden=${!this._hasHeader}
          >
            <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
          </div>

          <div part="card-content" class="card-content">
            <hpe-paragraph part="tagline" class="tagline" size="md">
              <slot name="tagline"></slot>
            </hpe-paragraph>
            <hpe-heading part="heading" class="heading" level="h4">
              <slot name="heading"></slot>
            </hpe-heading>
            <div part="body" class="body">
              <slot name="body"></slot>
            </div>
          </div>

          <div
            part="card-footer"
            class="card-footer"
            ?hidden=${!this._hasFooter}
          >
            <slot name="footer" @slotchange=${this._onFooterSlotChange}></slot>
          </div>

          <div part="card-actions" class="card-actions">
            <slot
              name="actions"
              @slotchange=${this._onActionsSlotChange}
            ></slot>
            ${this._hasActions
              ? ""
              : html`
                  <hpe-button-group
                    class="default-actions"
                    orientation="vertical"
                  >
                    <hpe-button type="link-primary" size="default"
                      >Learn more</hpe-button
                    >
                  </hpe-button-group>
                `}
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-card": HpeCard;
  }
}
