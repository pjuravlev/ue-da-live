import { LitElement } from "lit";
/**
 * A radio button input component with label and state management.
 * Supports checked/unchecked states with enabled/disabled variants.
 * Implements ElementInternals for form-associated custom element support.
 *
 * @tag hpe-radio
 * @summary A customizable radio button field with label support and form integration.
 *
 * @attr {string} name - Radio button name attribute
 * @attr {string} value - Radio button value attribute
 * @attr {boolean} checked - Whether radio button is checked
 * @attr {string} label - Label text displayed next to radio button
 * @attr {boolean} required - Whether radio button is required for form submission
 * @attr {boolean} disabled - Whether radio button is disabled
 *
 * @csspart container - The component container
 * @csspart radio-group - The radio button and label container
 * @csspart input - The actual radio input element
 * @csspart radio - The custom radio button circle
 * @csspart label - The label text
 */
export declare class HpeRadio extends LitElement {
    static styles: import("lit").CSSResult;
    static formAssociated: boolean;
    private readonly internals;
    name?: string;
    value?: string;
    checked: boolean;
    label: string;
    required: boolean;
    disabled: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private _onRadioChange;
    private updateFormState;
    private checkValidity;
    private getValidationMessage;
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-radio": HpeRadio;
    }
}
//# sourceMappingURL=hpe-radio.d.ts.map