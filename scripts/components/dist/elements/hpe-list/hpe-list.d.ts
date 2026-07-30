import { LitElement } from "lit";
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
export declare class HpeListItem extends LitElement {
    static styles: import("lit").CSSResult;
    bulletType: BulletType;
    render(): import("lit-html").TemplateResult<1>;
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
export declare class HpeList extends LitElement {
    static styles: import("lit").CSSResult;
    bulletType: ListBulletType;
    updated(changed: Map<string, unknown>): void;
    render(): import("lit-html").TemplateResult<1>;
    private syncItemBulletTypes;
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-list": HpeList;
        "hpe-list-item": HpeListItem;
    }
}
export {};
//# sourceMappingURL=hpe-list.d.ts.map