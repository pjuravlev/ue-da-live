import { LitElement } from "lit";
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
export declare class HpePullQuote extends LitElement {
    static styles: import("lit").CSSResult;
    hideQuoteSign: boolean;
    private _hasAttribution;
    private _onAttributionSlotChange;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-pull-quote": HpePullQuote;
    }
}
//# sourceMappingURL=hpe-pull-quote.d.ts.map