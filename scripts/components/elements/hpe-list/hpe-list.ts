import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-list.styles.js";
import "../../foundation/hpe-typography/hpe-paragraph/hpe-paragraph.js";

type BulletType = "checkmark" | "bullet-point";
type ListBulletType = BulletType | "mixed";

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
@customElement("hpe-list-item")
export class HpeListItem extends LitElement {
  static override styles = styles;

  @property({ reflect: true, attribute: "bullet-type" })
  bulletType: BulletType = "checkmark";

  override render() {
    return html`
      <div part="item" class="item">
        <div part="bullet" class="bullet" aria-hidden="true">
          ${this.bulletType === "checkmark"
            ? html`
                <svg
                  part="checkmark"
                  class="checkmark"
                  viewBox="0 0 16 16"
                  focusable="false"
                >
                  <path d="M3.5 8.25 6.5 11.25 12.5 4.75" />
                </svg>
              `
            : html`<span part="point" class="point"></span>`}
        </div>
        <hpe-paragraph part="text" class="text" size="md">
          <slot></slot>
        </hpe-paragraph>
      </div>
    `;
  }
}

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
@customElement("hpe-list")
export class HpeList extends LitElement {
  static override styles = styles;

  @property({ reflect: true, attribute: "bullet-type" })
  bulletType: ListBulletType = "checkmark";

  override updated(changed: Map<string, unknown>) {
    if (changed.has("bulletType")) {
      this.syncItemBulletTypes();
    }
  }

  override render() {
    return html`
      <div part="list" class="list">
        <slot @slotchange=${this.syncItemBulletTypes}></slot>
      </div>
    `;
  }

  private syncItemBulletTypes = () => {
    if (this.bulletType === "mixed") {
      return;
    }

    const slot = this.shadowRoot?.querySelector(
      "slot",
    ) as HTMLSlotElement | null;
    if (!slot) {
      return;
    }

    const items = slot
      .assignedElements({ flatten: true })
      .filter((el): el is HpeListItem => el instanceof HpeListItem);

    items.forEach((item) => {
      item.bulletType = this.bulletType as BulletType;
    });
  };
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-list": HpeList;
    "hpe-list-item": HpeListItem;
  }
}
