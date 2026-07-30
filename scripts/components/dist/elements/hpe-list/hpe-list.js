var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-list.styles.js";
import "../../foundation/hpe-typography/hpe-paragraph/hpe-paragraph.js";
/**
 * A list item component with configurable bullet marker.
 *
 * @tag hpe-list-item
 * @summary Renders one list row with a checkmark or square bullet marker.
 *
 * @attr {string} bullet-type - Marker type: "checkmark" | "bullet-point"
 *
 * @slot - List item text/content
 *
 * @csspart item - The list item row container
 * @csspart bullet - The bullet marker container
 * @csspart checkmark - The checkmark icon
 * @csspart point - The square point marker
 * @csspart text - The text container
 */
let HpeListItem = class HpeListItem extends LitElement {
    constructor() {
        super(...arguments);
        this.bulletType = "checkmark";
    }
    render() {
        return html `
      <div part="item" class="item">
        <div part="bullet" class="bullet" aria-hidden="true">
          ${this.bulletType === "checkmark"
            ? html `
                <svg
                  part="checkmark"
                  class="checkmark"
                  viewBox="0 0 16 16"
                  focusable="false"
                >
                  <path d="M3.5 8.25 6.5 11.25 12.5 4.75" />
                </svg>
              `
            : html `<span part="point" class="point"></span>`}
        </div>
        <hpe-paragraph part="text" class="text" size="md">
          <slot></slot>
        </hpe-paragraph>
      </div>
    `;
    }
};
HpeListItem.styles = styles;
__decorate([
    property({ reflect: true, attribute: "bullet-type" })
], HpeListItem.prototype, "bulletType", void 0);
HpeListItem = __decorate([
    customElement("hpe-list-item")
], HpeListItem);
export { HpeListItem };
/**
 * A composite list component that coordinates bullet style across child list items.
 *
 * @tag hpe-list
 * @summary Groups list items and applies consistent bullet behavior.
 *
 * @attr {string} bullet-type - Marker mode: "checkmark" | "bullet-point" | "mixed"
 *
 * @slot - Slotted `<hpe-list-item>` children
 *
 * @csspart list - The list container element
 */
let HpeList = class HpeList extends LitElement {
    constructor() {
        super(...arguments);
        this.bulletType = "checkmark";
        this.syncItemBulletTypes = () => {
            if (this.bulletType === "mixed") {
                return;
            }
            const slot = this.shadowRoot?.querySelector("slot");
            if (!slot) {
                return;
            }
            const items = slot
                .assignedElements({ flatten: true })
                .filter((el) => el instanceof HpeListItem);
            items.forEach((item) => {
                item.bulletType = this.bulletType;
            });
        };
    }
    updated(changed) {
        if (changed.has("bulletType")) {
            this.syncItemBulletTypes();
        }
    }
    render() {
        return html `
      <div part="list" class="list">
        <slot @slotchange=${this.syncItemBulletTypes}></slot>
      </div>
    `;
    }
};
HpeList.styles = styles;
__decorate([
    property({ reflect: true, attribute: "bullet-type" })
], HpeList.prototype, "bulletType", void 0);
HpeList = __decorate([
    customElement("hpe-list")
], HpeList);
export { HpeList };
//# sourceMappingURL=hpe-list.js.map