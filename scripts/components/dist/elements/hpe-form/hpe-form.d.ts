import { LitElement } from "lit";
import "../hpe-button/hpe-button.js";
import "../hpe-button-group/hpe-button-group.js";
import "../../foundation/hpe-typography/hpe-heading/hpe-heading.js";
import "../../foundation/hpe-typography/hpe-paragraph/hpe-paragraph.js";
/**
 * A form container matching the Figma form layout with heading, body copy, field stack, and primary action.
 * Renders as a native HTML form element with form-associated custom element support.
 *
 * @tag hpe-form
 * @summary Displays a token-backed form shell with slotted input controls, a submit action, and optional additional actions.
 *
 * @attr {string} heading - Heading text displayed at the top of the form
 * @attr {string} description - Supporting body copy displayed below the heading
 * @attr {string} submit-label - Label used for the default submit button
 * @slot - Form fields and grouped controls
 * @slot actions - Optional additional action buttons rendered alongside the default submit button
 *
 * @csspart container - The outer form container
 * @csspart header - The heading and description area
 * @csspart fields - The slotted field stack
 * @csspart actions - The action row
 *
 * @fires submit - Dispatched when the form is submitted with valid data
 */
export declare class HpeForm extends LitElement {
    static styles: import("lit").CSSResult;
    heading: string;
    description: string;
    submitLabel: string;
    render(): import("lit-html").TemplateResult<1>;
    private onSubmit;
    private onSubmitClick;
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-form": HpeForm;
    }
}
//# sourceMappingURL=hpe-form.d.ts.map