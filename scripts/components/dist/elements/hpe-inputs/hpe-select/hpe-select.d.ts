import { LitElement } from "lit";
/**
 * A select dropdown component with label, description, and state management.
 * Supports multiple states: Enabled, Error, Typing, Complete, and Disabled.
 *
 * @tag hpe-select
 * @summary A customizable select field with dropdown affordance and description support.
 *
 * @attr {string} name - Select name attribute
 * @attr {string} value - Selected value
 * @attr {string} label - Label text displayed above select
 * @attr {boolean} required - Whether select is required (shows asterisk)
 * @attr {boolean} show-label - Whether to show the label
 * @attr {string} description-text - Helper/description text below select
 * @attr {boolean} show-description - Whether to show the description
 * @attr {string} state - Select state: "enabled" | "error" | "typing" | "complete" | "disabled"
 * @attr {boolean} disabled - Whether select is disabled
 *
 * @slot default - Option elements for the select
 *
 * @csspart container - The component container
 * @csspart input-group - The input label and field container
 * @csspart label - The label element
 * @csspart label-text - The label text
 * @csspart required-indicator - The required asterisk
 * @csspart field - The select field element
 * @csspart select - The actual select element
 * @csspart icon - The dropdown icon
 * @csspart description - The description/helper text container
 */
export declare class HpeSelect extends LitElement {
    static styles: import("lit").CSSResult;
    static formAssociated: boolean;
    private static idCounter;
    private readonly selectId;
    private readonly internals;
    private optionsMutationObserver?;
    private parsedOptions;
    private parsedOptGroups;
    name?: string;
    value: string;
    label: string;
    required: boolean;
    showLabel: boolean;
    descriptionText: string;
    showDescription: boolean;
    state: "enabled" | "error" | "typing" | "complete" | "disabled";
    disabled: boolean;
    firstUpdated(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private onOptionsSlotChange;
    private setupMutationObserver;
    private updateOptionCollections;
    private _onInput;
    private _onBlur;
    private _onFocus;
    private updateFormState;
    private checkValidity;
    private getValidationMessage;
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-select": HpeSelect;
    }
}
//# sourceMappingURL=hpe-select.d.ts.map