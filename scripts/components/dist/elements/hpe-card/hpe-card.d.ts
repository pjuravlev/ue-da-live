import { LitElement } from "lit";
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
export declare class HpeCard extends LitElement {
    static styles: import("lit").CSSResult;
    variant: "default" | "flush";
    private _hasMedia;
    private _hasHeader;
    private _hasFooter;
    private _hasActions;
    private _hasAssignedElements;
    private _onMediaSlotChange;
    private _onHeaderSlotChange;
    private _onFooterSlotChange;
    private _onActionsSlotChange;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-card": HpeCard;
    }
}
//# sourceMappingURL=hpe-card.d.ts.map