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
@customElement("hpe-radio")
export class HpeRadio extends LitElement {
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
  label = "Radio Label";

  @property({ reflect: true, type: Boolean })
  required = false;

  @property({ reflect: true, type: Boolean })
  disabled = false;

  override render() {
    const inputId = `${this.name || "radio"}-${this.value || this.label}`;

    return html`
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

  private _onRadioChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.checked = target.checked;
    this.updateFormState();
  }

  private updateFormState() {
    // For radio buttons, form value is the value when checked, nothing when unchecked
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
    // Radio buttons with required attribute must be checked
    if (this.required && !this.checked) {
      return false;
    }
    return true;
  }

  private getValidationMessage(): string {
    if (this.required && !this.checked) {
      return `${this.label} must be selected`;
    }
    return "";
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-radio": HpeRadio;
  }
}
