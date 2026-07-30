var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HpeTextarea_1;
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-textarea.styles.js";
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
let HpeTextarea = HpeTextarea_1 = class HpeTextarea extends LitElement {
    constructor() {
        super(...arguments);
        this.textareaId = `hpe-textarea-${HpeTextarea_1.idCounter++}`;
        this.internals = this.attachInternals();
        this.value = "";
        this.placeholder = "";
        this.label = "Label";
        this.required = true;
        this.showLabel = true;
        this.descriptionText = "Description (Optional)";
        this.showDescription = true;
        this.maxLength = 3000;
        this.state = "enabled";
        this.disabled = false;
    }
    render() {
        const charCount = this.value.length;
        const isDisabled = this.disabled || this.state === "disabled";
        return html `
      <div part="container" class="container">
        <div part="input-group" class="input-group">
          ${this.showLabel
            ? html `
                <label part="label" class="label" for=${this.textareaId}>
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
          <textarea
            id=${this.textareaId}
            part="field textarea"
            class="textarea"
            name=${this.name || ""}
            .value=${this.value}
            placeholder=${this.placeholder}
            maxlength=${this.maxLength}
            ?disabled=${isDisabled}
            aria-invalid=${this.state === "error" ? "true" : "false"}
            aria-disabled=${isDisabled ? "true" : "false"}
            @input=${this._onInput}
            @blur=${this._onBlur}
            @focus=${this._onFocus}
          ></textarea>
        </div>
        ${this.showDescription
            ? html `
              <div part="description" class="description">
                <p class="description-text">${this.descriptionText}</p>
                <p class="char-counter">${charCount}/${this.maxLength}</p>
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
            return;
        }
        this.state = "enabled";
    }
    _onFocus() {
        if (this.state !== "error" && this.state !== "disabled") {
            this.state = "typing";
        }
    }
    updateFormState() {
        this.internals.setFormValue(this.value);
        if (!this.checkValidity()) {
            this.internals.setValidity({ customError: true }, this.getValidationMessage(), this.shadowRoot?.querySelector("textarea") || undefined);
        }
        else {
            this.internals.setValidity({});
        }
    }
    checkValidity() {
        if (this.required && !this.value.trim()) {
            return false;
        }
        if (this.value.length > this.maxLength) {
            return false;
        }
        return true;
    }
    getValidationMessage() {
        if (this.required && !this.value.trim()) {
            return `${this.label} is required`;
        }
        if (this.value.length > this.maxLength) {
            return `${this.label} exceeds maximum length of ${this.maxLength} characters`;
        }
        return "";
    }
};
HpeTextarea.styles = styles;
HpeTextarea.formAssociated = true;
HpeTextarea.idCounter = 0;
__decorate([
    property({ reflect: true })
], HpeTextarea.prototype, "name", void 0);
__decorate([
    property({ reflect: true })
], HpeTextarea.prototype, "value", void 0);
__decorate([
    property({ reflect: true })
], HpeTextarea.prototype, "placeholder", void 0);
__decorate([
    property({ reflect: true })
], HpeTextarea.prototype, "label", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], HpeTextarea.prototype, "required", void 0);
__decorate([
    property({ reflect: true, attribute: "show-label", type: Boolean })
], HpeTextarea.prototype, "showLabel", void 0);
__decorate([
    property({ reflect: true, attribute: "description-text" })
], HpeTextarea.prototype, "descriptionText", void 0);
__decorate([
    property({ reflect: true, attribute: "show-description", type: Boolean })
], HpeTextarea.prototype, "showDescription", void 0);
__decorate([
    property({ reflect: true, attribute: "max-length", type: Number })
], HpeTextarea.prototype, "maxLength", void 0);
__decorate([
    property({ reflect: true })
], HpeTextarea.prototype, "state", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], HpeTextarea.prototype, "disabled", void 0);
HpeTextarea = HpeTextarea_1 = __decorate([
    customElement("hpe-textarea")
], HpeTextarea);
export { HpeTextarea };
//# sourceMappingURL=hpe-textarea.js.map