var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let HpeCard = class HpeCard extends LitElement {
    constructor() {
        super(...arguments);
        this.variant = "default";
        this._hasMedia = false;
        this._hasHeader = false;
        this._hasFooter = false;
        this._hasActions = false;
    }
    _hasAssignedElements(slot) {
        return slot.assignedElements({ flatten: true }).length > 0;
    }
    _onMediaSlotChange(event) {
        const slot = event.target;
        this._hasMedia = this._hasAssignedElements(slot);
    }
    _onHeaderSlotChange(event) {
        const slot = event.target;
        this._hasHeader = this._hasAssignedElements(slot);
    }
    _onFooterSlotChange(event) {
        const slot = event.target;
        this._hasFooter = this._hasAssignedElements(slot);
    }
    _onActionsSlotChange(event) {
        const slot = event.target;
        const assignedElements = slot.assignedElements({ flatten: true });
        this._hasActions = assignedElements.length > 0;
        assignedElements.forEach((element) => {
            if (element.tagName.toLowerCase() === "hpe-button-group") {
                element.setAttribute("orientation", "vertical");
            }
        });
    }
    render() {
        return html `
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
            : html `
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
};
HpeCard.styles = styles;
__decorate([
    property({ reflect: true })
], HpeCard.prototype, "variant", void 0);
__decorate([
    state()
], HpeCard.prototype, "_hasMedia", void 0);
__decorate([
    state()
], HpeCard.prototype, "_hasHeader", void 0);
__decorate([
    state()
], HpeCard.prototype, "_hasFooter", void 0);
__decorate([
    state()
], HpeCard.prototype, "_hasActions", void 0);
HpeCard = __decorate([
    customElement("hpe-card")
], HpeCard);
export { HpeCard };
//# sourceMappingURL=hpe-card.js.map