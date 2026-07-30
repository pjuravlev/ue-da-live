import { LitElement } from "lit";
/**
 * A multi-line text textarea component with label, character counter, and state management.
 * Supports multiple states: Enabled, Error, Typing, Complete, and Disabled.
 *
 * @tag hpe-textarea
 * @summary A customizable textarea field with character counter and description support.
 *
 * @attr {string} name - Textarea name attribute
 * @attr {string} value - Textarea value
 * @attr {string} placeholder - Placeholder text
 * @attr {string} label - Label text displayed above textarea
 * @attr {boolean} required - Whether textarea is required (shows asterisk)
 * @attr {boolean} show-label - Whether to show the label
 * @attr {string} description-text - Helper/description text below textarea
 * @attr {boolean} show-description - Whether to show the description
 * @attr {number} max-length - Maximum character length (default: 3000)
 * @attr {string} state - Textarea state: "enabled" | "error" | "typing" | "complete" | "disabled"
 * @attr {boolean} disabled - Whether textarea is disabled
 *
 * @csspart container - The component container
 * @csspart input-group - The input label and field container
 * @csspart label - The label element
 * @csspart label-text - The label text
 * @csspart required-indicator - The required asterisk
 * @csspart field - The textarea field element
 * @csspart textarea - The actual textarea element
 * @csspart description - The description/helper text and counter container
 */
export declare class HpeTextarea extends LitElement {
    static styles: import("lit").CSSResult;
    static formAssociated: boolean;
    private static idCounter;
    private readonly textareaId;
    private readonly internals;
    name?: string;
    value: string;
    placeholder: string;
    label: string;
    required: boolean;
    showLabel: boolean;
    descriptionText: string;
    showDescription: boolean;
    maxLength: number;
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
        "hpe-textarea": HpeTextarea;
    }
}
//# sourceMappingURL=hpe-textarea.d.ts.map