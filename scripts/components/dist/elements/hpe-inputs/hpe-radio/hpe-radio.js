var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-radio.styles.js";
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
let HpeRadio = class HpeRadio extends LitElement {
    constructor() {
        super(...arguments);
        this.internals = this.attachInternals();
        this.checked = false;
        this.label = "Radio Label";
        this.required = false;
        this.disabled = false;
    }
    render() {
        const inputId = `${this.name || "radio"}-${this.value || this.label}`;
        return html `
      <label part="container" class="container" for=${inputId}>
        <div part="radio-group" class="radio-group">
          <input
            part="input"
            class="radio-input"
            id=${inputId}
            type="radio"
            name=${this.name || ""}
            value=${this.value || ""}
            .checked=${this.checked}
            ?disabled=${this.disabled}
            @change=${this._onRadioChange}
          />
          <span part="radio" class="radio"></span>
        </div>
        <span part="label" class="label">${this.label}</span>
      </label>
    `;
    }
    _onRadioChange(e) {
        const target = e.target;
        this.checked = target.checked;
        this.updateFormState();
    }
    updateFormState() {
        // For radio buttons, form value is the value when checked, nothing when unchecked
        const formValue = this.checked ? this.value || "on" : "";
        this.internals.setFormValue(formValue);
        if (!this.checkValidity()) {
            this.internals.setValidity({ customError: true }, this.getValidationMessage(), this.shadowRoot?.querySelector("input") || undefined);
        }
        else {
            this.internals.setValidity({});
        }
    }
    checkValidity() {
        // Radio buttons with required attribute must be checked
        if (this.required && !this.checked) {
            return false;
        }
        return true;
    }
    getValidationMessage() {
        if (this.required && !this.checked) {
            return `${this.label} must be selected`;
        }
        return "";
    }
};
HpeRadio.styles = styles;
HpeRadio.formAssociated = true;
__decorate([
    property({ reflect: true })
], HpeRadio.prototype, "name", void 0);
__decorate([
    property({ reflect: true })
], HpeRadio.prototype, "value", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], HpeRadio.prototype, "checked", void 0);
__decorate([
    property({ reflect: true })
], HpeRadio.prototype, "label", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], HpeRadio.prototype, "required", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], HpeRadio.prototype, "disabled", void 0);
HpeRadio = __decorate([
    customElement("hpe-radio")
], HpeRadio);
export { HpeRadio };
//# sourceMappingURL=hpe-radio.js.map