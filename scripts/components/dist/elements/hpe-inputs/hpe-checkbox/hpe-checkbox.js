var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-checkbox.styles.js";
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
let HpeCheckbox = class HpeCheckbox extends LitElement {
    constructor() {
        super(...arguments);
        this.internals = this.attachInternals();
        this.checked = false;
        this.label = "Checkbox Label";
        this.required = false;
        this.disabled = false;
    }
    render() {
        const inputId = this.name || "checkbox";
        return html `
      <label part="container" class="container" for=${inputId}>
        <div part="checkbox-group" class="checkbox-group">
          <input
            part="input"
            class="checkbox-input"
            id=${inputId}
            type="checkbox"
            name=${this.name || ""}
            value=${this.value || ""}
            .checked=${this.checked}
            ?disabled=${this.disabled}
            @change=${this._onCheckboxChange}
          />
          <span part="checkmark" class="checkmark" aria-hidden="true">
            <svg viewBox="0 0 16 16" focusable="false">
              <path d="M3.5 8.25 6.5 11.25 12.5 4.75" />
            </svg>
          </span>
        </div>
        <span part="label" class="label">${this.label}</span>
      </label>
    `;
    }
    _onCheckboxChange(e) {
        const target = e.target;
        this.checked = target.checked;
        this.updateFormState();
    }
    updateFormState() {
        // For checkboxes, form value is the value when checked, nothing when unchecked
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
        // Checkboxes with required attribute must be checked
        if (this.required && !this.checked) {
            return false;
        }
        return true;
    }
    getValidationMessage() {
        if (this.required && !this.checked) {
            return `${this.label} must be checked`;
        }
        return "";
    }
};
HpeCheckbox.styles = styles;
HpeCheckbox.formAssociated = true;
__decorate([
    property({ reflect: true })
], HpeCheckbox.prototype, "name", void 0);
__decorate([
    property({ reflect: true })
], HpeCheckbox.prototype, "value", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], HpeCheckbox.prototype, "checked", void 0);
__decorate([
    property({ reflect: true })
], HpeCheckbox.prototype, "label", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], HpeCheckbox.prototype, "required", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], HpeCheckbox.prototype, "disabled", void 0);
HpeCheckbox = __decorate([
    customElement("hpe-checkbox")
], HpeCheckbox);
export { HpeCheckbox };
//# sourceMappingURL=hpe-checkbox.js.map