import { LitElement } from "lit";
/**
 * A text input field component with label, helper text, and state management.
 * Supports multiple states: Enabled, Error, Typing, Complete, and Disabled.
 * Implements ElementInternals for form-associated custom element support.
 *
 * @tag hpe-input
 * @summary A customizable text input field with label and description support.
 *
 * @attr {string} name - Input name attribute
 * @attr {string} value - Input value
 * @attr {string} placeholder - Placeholder text
 * @attr {string} label - Label text displayed above input
 * @attr {boolean} required - Whether input is required (shows asterisk)
 * @attr {boolean} show-label - Whether to show the label
 * @attr {string} description-text - Helper/description text below input
 * @attr {boolean} show-description - Whether to show the description
 * @attr {string} pattern - Regular expression pattern for validation
 * @attr {string} state - Input state: "enabled" | "error" | "typing" | "complete" | "disabled"
 * @attr {boolean} disabled - Whether input is disabled
 *
 * @slot - Input field wrapper slot
 *
 * @csspart container - The component container
 * @csspart input-group - The input label and field container
 * @csspart label - The label element
 * @csspart label-text - The label text
 * @csspart required-indicator - The required asterisk
 * @csspart field - The input field element
 * @csspart input - The actual input element
 * @csspart description - The description/helper text container
 */
export declare class HpeInput extends LitElement {
    static styles: import("lit").CSSResult;
    static formAssociated: boolean;
    private static idCounter;
    private readonly inputId;
    private readonly internals;
    name?: string;
    value: string;
    placeholder: string;
    label: string;
    required: boolean;
    showLabel: boolean;
    descriptionText: string;
    showDescription: boolean;
    pattern?: string;
    state: "enabled" | "error" | "typing" | "complete" | "disabled";
    disabled: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private _onInput;
    private _onBlur;
    private _onFocus;
    private updateFormState;
    private checkValidity;
    private getValidationMessage;
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-input": HpeInput;
    }
}
//# sourceMappingURL=hpe-input.d.ts.map