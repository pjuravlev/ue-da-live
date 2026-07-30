var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-form.styles.js";
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
let HpeForm = class HpeForm extends LitElement {
    constructor() {
        super(...arguments);
        this.heading = "Heading";
        this.description = "Desription text providing context for the form and its fields. This can be a few sentences long.";
        this.submitLabel = "Submit";
    }
    render() {
        return html `
      <form part="container" class="container" @submit=${this.onSubmit}>
        <div part="header" class="header">
          <hpe-heading level="h2">${this.heading}</hpe-heading>
          <hpe-paragraph size="md">${this.description}</hpe-paragraph>
        </div>
        <div part="fields" class="fields">
          <slot></slot>
        </div>
        <div part="actions" class="actions">
          <hpe-button-group>
            <hpe-button
              type="primary"
              size="small"
              .showRightIcon=${false}
              @click=${this.onSubmitClick}
            >
              ${this.submitLabel}
            </hpe-button>
            <slot name="actions"></slot>
          </hpe-button-group>
        </div>
      </form>
    `;
    }
    onSubmit(e) {
        e.preventDefault();
        this.dispatchEvent(new SubmitEvent("submit", {
            bubbles: true,
            cancelable: true,
            composed: true,
        }));
    }
    onSubmitClick() {
        const formElement = this.shadowRoot?.querySelector("form");
        if (formElement) {
            formElement.requestSubmit();
        }
    }
};
HpeForm.styles = styles;
__decorate([
    property({ reflect: true })
], HpeForm.prototype, "heading", void 0);
__decorate([
    property({ reflect: true })
], HpeForm.prototype, "description", void 0);
__decorate([
    property({ reflect: true, attribute: "submit-label" })
], HpeForm.prototype, "submitLabel", void 0);
HpeForm = __decorate([
    customElement("hpe-form")
], HpeForm);
export { HpeForm };
//# sourceMappingURL=hpe-form.js.map