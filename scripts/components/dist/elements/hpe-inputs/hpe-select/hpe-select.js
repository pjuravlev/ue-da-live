var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HpeSelect_1;
import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styles } from "./hpe-select.styles.js";
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
let HpeSelect = HpeSelect_1 = class HpeSelect extends LitElement {
    constructor() {
        super(...arguments);
        this.selectId = `hpe-select-${HpeSelect_1.idCounter++}`;
        this.internals = this.attachInternals();
        this.parsedOptions = [];
        this.parsedOptGroups = [];
        this.value = "";
        this.label = "Label";
        this.required = true;
        this.showLabel = true;
        this.descriptionText = "Description (Optional)";
        this.showDescription = true;
        this.state = "enabled";
        this.disabled = false;
    }
    firstUpdated() {
        this.updateOptionCollections();
        this.setupMutationObserver();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.optionsMutationObserver) {
            this.optionsMutationObserver.disconnect();
        }
    }
    render() {
        const isDisabled = this.disabled || this.state === "disabled";
        return html `
      <div part="container" class="container">
        <div part="input-group" class="input-group">
          ${this.showLabel
            ? html `
                <label part="label" class="label" for=${this.selectId}>
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
          <slot @slotchange=${this.onOptionsSlotChange} hidden></slot>
          <select
            id=${this.selectId}
            part="field select"
            class="select"
            name=${this.name || ""}
            .value=${this.value}
            ?disabled=${isDisabled}
            aria-invalid=${this.state === "error" ? "true" : "false"}
            aria-disabled=${isDisabled ? "true" : "false"}
            @input=${this._onInput}
            @blur=${this._onBlur}
            @focus=${this._onFocus}
          >
            ${this.parsedOptGroups.map((group) => html `
                <optgroup label=${group.label} ?disabled=${group.disabled}>
                  ${Array.from(group.children)
            .filter((child) => {
            return child instanceof HTMLOptionElement;
        })
            .map((option) => html `
                        <option
                          value=${option.value}
                          ?disabled=${option.disabled}
                          ?selected=${option.selected}
                        >
                          ${option.textContent || ""}
                        </option>
                      `)}
                </optgroup>
              `)}
            ${this.parsedOptions.map((option) => html `
                <option
                  value=${option.value}
                  ?disabled=${option.disabled}
                  ?selected=${option.selected}
                >
                  ${option.textContent || ""}
                </option>
              `)}
          </select>
          <svg
            part="icon"
            class="icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
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
    onOptionsSlotChange() {
        this.updateOptionCollections();
    }
    setupMutationObserver() {
        // Watch for changes to slotted option elements
        this.optionsMutationObserver = new MutationObserver(() => {
            this.updateOptionCollections();
        });
        this.optionsMutationObserver.observe(this, {
            childList: true,
            subtree: false,
        });
    }
    updateOptionCollections() {
        const children = Array.from(this.children);
        this.parsedOptions = children.filter((child) => {
            return child instanceof HTMLOptionElement;
        });
        this.parsedOptGroups = children.filter((child) => {
            return child instanceof HTMLOptGroupElement;
        });
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
        const hasValue = this.value && this.value.toString().trim();
        if (hasValue) {
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
        this.internals.setFormValue(this.value || "");
        if (!this.checkValidity()) {
            this.internals.setValidity({ customError: true }, this.getValidationMessage(), this.shadowRoot?.querySelector("select") || undefined);
        }
        else {
            this.internals.setValidity({});
        }
    }
    checkValidity() {
        if (this.required && (!this.value || !this.value.toString().trim())) {
            return false;
        }
        return true;
    }
    getValidationMessage() {
        if (this.required && (!this.value || !this.value.toString().trim())) {
            return `${this.label} is required`;
        }
        return "";
    }
};
HpeSelect.styles = styles;
HpeSelect.formAssociated = true;
HpeSelect.idCounter = 0;
__decorate([
    state()
], HpeSelect.prototype, "parsedOptions", void 0);
__decorate([
    state()
], HpeSelect.prototype, "parsedOptGroups", void 0);
__decorate([
    property({ reflect: true })
], HpeSelect.prototype, "name", void 0);
__decorate([
    property({ reflect: true })
], HpeSelect.prototype, "value", void 0);
__decorate([
    property({ reflect: true })
], HpeSelect.prototype, "label", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], HpeSelect.prototype, "required", void 0);
__decorate([
    property({ reflect: true, attribute: "show-label", type: Boolean })
], HpeSelect.prototype, "showLabel", void 0);
__decorate([
    property({ reflect: true, attribute: "description-text" })
], HpeSelect.prototype, "descriptionText", void 0);
__decorate([
    property({ reflect: true, attribute: "show-description", type: Boolean })
], HpeSelect.prototype, "showDescription", void 0);
__decorate([
    property({ reflect: true })
], HpeSelect.prototype, "state", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], HpeSelect.prototype, "disabled", void 0);
HpeSelect = HpeSelect_1 = __decorate([
    customElement("hpe-select")
], HpeSelect);
export { HpeSelect };
//# sourceMappingURL=hpe-select.js.map