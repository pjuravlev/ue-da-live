import { LitElement } from "lit";
/**
 * A checkbox input component with label and state management.
 * Supports checked/unchecked states with enabled/disabled variants.
 * Implements ElementInternals for form-associated custom element support.
 *
 * @tag hpe-checkbox
 * @summary A customizable checkbox field with label support and form integration.
 *
 * @attr {string} name - Checkbox name attribute
 * @attr {string} value - Checkbox value attribute
 * @attr {boolean} checked - Whether checkbox is checked
 * @attr {string} label - Label text displayed next to checkbox
 * @attr {boolean} required - Whether checkbox is required for form submission
 * @attr {boolean} disabled - Whether checkbox is disabled
 *
 * @csspart container - The component container
 * @csspart checkbox-group - The checkbox and label container
 * @csspart input - The actual checkbox input element
 * @csspart checkmark - The custom checkmark icon
 * @csspart label - The label text
 */
export declare class HpeCheckbox extends LitElement {
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
    private _onCheckboxChange;
    private updateFormState;
    private checkValidity;
    private getValidationMessage;
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-checkbox": HpeCheckbox;
    }
}
//# sourceMappingURL=hpe-checkbox.d.ts.map