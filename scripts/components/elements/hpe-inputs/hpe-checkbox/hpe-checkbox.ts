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
@customElement("hpe-checkbox")
export class HpeCheckbox extends LitElement {
  static override styles = styles;
  static formAssociated = true;
  private readonly internals = this.attachInternals();

  @property({ reflect: true })
  name?: string;

  @property({ reflect: true })
  value?: string;

  @property({ reflect: true, type: Boolean })
  checked = false;

  @property({ reflect: true })
  label = "Checkbox Label";

  @property({ reflect: true, type: Boolean })
  required = false;

  @property({ reflect: true, type: Boolean })
  disabled = false;

  override render() {
    const inputId = this.name || "checkbox";

    return html`
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

  private _onCheckboxChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.checked = target.checked;
    this.updateFormState();
  }

  private updateFormState() {
    // For checkboxes, form value is the value when checked, nothing when unchecked
    const formValue = this.checked ? this.value || "on" : "";
    this.internals.setFormValue(formValue);
    if (!this.checkValidity()) {
      this.internals.setValidity(
        { customError: true },
        this.getValidationMessage(),
        this.shadowRoot?.querySelector("input") || undefined,
      );
    } else {
      this.internals.setValidity({});
    }
  }

  private checkValidity(): boolean {
    // Checkboxes with required attribute must be checked
    if (this.required && !this.checked) {
      return false;
    }
    return true;
  }

  private getValidationMessage(): string {
    if (this.required && !this.checked) {
      return `${this.label} must be checked`;
    }
    return "";
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-checkbox": HpeCheckbox;
  }
}
