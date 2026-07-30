var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HpeInput_1;
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-input.styles.js";
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
let HpeInput = HpeInput_1 = class HpeInput extends LitElement {
    constructor() {
        super(...arguments);
        this.inputId = `hpe-input-${HpeInput_1.idCounter++}`;
        this.internals = this.attachInternals();
        this.value = "";
        this.placeholder = "";
        this.label = "Label";
        this.required = true;
        this.showLabel = true;
        this.descriptionText = "Description (Optional)";
        this.showDescription = true;
        this.state = "enabled";
        this.disabled = false;
    }
    render() {
        const isDisabled = this.disabled || this.state === "disabled";
        return html `
      <div part="container" class="container">
        <div part="input-group" class="input-group">
          ${this.showLabel
            ? html `
                <label part="label" class="label" for=${this.inputId}>
                  <span part="label-text" class="label-text"
                    >${this.label}</span
                  >
                  ${this.required
                ? html `<span
                        part="required-indicator"
                        class="required-indicator"
                      >
                        *
                      </span>`
                : ""}
                </label>
              `
            : ""}
          <input
            id=${this.inputId}
            part="field input"
            class="input"
            type="text"
            name=${this.name || ""}
            .value=${this.value}
            placeholder=${this.placeholder}
            ?disabled=${isDisabled}
            aria-invalid=${this.state === "error" ? "true" : "false"}
            aria-disabled=${isDisabled ? "true" : "false"}
            @input=${this._onInput}
            @blur=${this._onBlur}
            @focus=${this._onFocus}
          />
        </div>
        ${this.showDescription
            ? html `
              <div part="description" class="description">
                <p class="description-text">${this.descriptionText}</p>
              </div>
            `
            : ""}
      </div>
    `;
    }
    _onInput(e) {
        const target = e.target;
        this.value = target.value;
        if (this.state !== "error" && this.state !== "disabled") {
            this.state = "typing";
        }
        this.updateFormState();
    }
    _onBlur() {
        if (this.state === "error" || this.state === "disabled") {
            return;
        }
        if (this.value.trim()) {
            this.state = "complete";
        }
        else {
            this.state = "enabled";
        }
        this.updateFormState();
    }
    _onFocus() {
        if (this.state !== "error" && this.state !== "disabled") {
            this.state = "typing";
        }
    }
    updateFormState() {
        this.internals.setFormValue(this.value);
        if (!this.checkValidity()) {
            this.internals.setValidity({ customError: true }, this.getValidationMessage(), this.shadowRoot?.querySelector("input"));
        }
        else {
            this.internals.setValidity({});
        }
    }
    checkValidity() {
        if (this.required && !this.value.trim()) {
            return false;
        }
        if (this.pattern && this.value.trim()) {
            const regex = new RegExp(this.pattern);
            if (!regex.test(this.value)) {
                return false;
            }
        }
        return true;
    }
    getValidationMessage() {
        if (this.required && !this.value.trim()) {
            return `${this.label} is required`;
        }
        if (this.pattern && this.value.trim()) {
            const regex = new RegExp(this.pattern);
            if (!regex.test(this.value)) {
                return `${this.label} does not match the required pattern`;
            }
        }
        return "";
    }
};
HpeInput.styles = styles;
HpeInput.formAssociated = true;
HpeInput.idCounter = 0;
__decorate([
    property({ reflect: true })
], HpeInput.prototype, "name", void 0);
__decorate([
    property({ reflect: true })
], HpeInput.prototype, "value", void 0);
__decorate([
    property({ reflect: true })
], HpeInput.prototype, "placeholder", void 0);
__decorate([
    property({ reflect: true })
], HpeInput.prototype, "label", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], HpeInput.prototype, "required", void 0);
__decorate([
    property({ reflect: true, attribute: "show-label", type: Boolean })
], HpeInput.prototype, "showLabel", void 0);
__decorate([
    property({ reflect: true, attribute: "description-text" })
], HpeInput.prototype, "descriptionText", void 0);
__decorate([
    property({ reflect: true, attribute: "show-description", type: Boolean })
], HpeInput.prototype, "showDescription", void 0);
__decorate([
    property({ reflect: true })
], HpeInput.prototype, "pattern", void 0);
__decorate([
    property({ reflect: true })
], HpeInput.prototype, "state", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], HpeInput.prototype, "disabled", void 0);
HpeInput = HpeInput_1 = __decorate([
    customElement("hpe-input")
], HpeInput);
export { HpeInput };
//# sourceMappingURL=hpe-input.js.map