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
@customElement("hpe-input")
export class HpeInput extends LitElement {
  static override styles = styles;
  static formAssociated = true;

  private static idCounter = 0;
  private readonly inputId = `hpe-input-${HpeInput.idCounter++}`;
  private readonly internals = this.attachInternals();

  @property({ reflect: true })
  name?: string;

  @property({ reflect: true })
  value = "";

  @property({ reflect: true })
  placeholder = "";

  @property({ reflect: true })
  label = "Label";

  @property({ reflect: true, type: Boolean })
  required = true;

  @property({ reflect: true, attribute: "show-label", type: Boolean })
  showLabel = true;

  @property({ reflect: true, attribute: "description-text" })
  descriptionText = "Description (Optional)";

  @property({ reflect: true, attribute: "show-description", type: Boolean })
  showDescription = true;

  @property({ reflect: true })
  pattern?: string;

  @property({ reflect: true })
  state: "enabled" | "error" | "typing" | "complete" | "disabled" = "enabled";

  @property({ reflect: true, type: Boolean })
  disabled = false;

  override render() {
    const isDisabled = this.disabled || this.state === "disabled";

    return html`
      <div part="container" class="container">
        <div part="input-group" class="input-group">
          ${this.showLabel
            ? html`
                <label part="label" class="label" for=${this.inputId}>
                  <span part="label-text" class="label-text"
                    >${this.label}</span
                  >
                  ${this.required
                    ? html`<span
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
          ? html`
              <div part="description" class="description">
                <p class="description-text">${this.descriptionText}</p>
              </div>
            `
          : ""}
      </div>
    `;
  }

  private _onInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;

    if (this.state !== "error" && this.state !== "disabled") {
      this.state = "typing";
    }

    this.updateFormState();
  }

  private _onBlur() {
    if (this.state === "error" || this.state === "disabled") {
      return;
    }

    if (this.value.trim()) {
      this.state = "complete";
    } else {
      this.state = "enabled";
    }

    this.updateFormState();
  }

  private _onFocus() {
    if (this.state !== "error" && this.state !== "disabled") {
      this.state = "typing";
    }
  }

  private updateFormState() {
    this.internals.setFormValue(this.value);

    if (!this.checkValidity()) {
      this.internals.setValidity(
        { customError: true },
        this.getValidationMessage(),
        this.shadowRoot?.querySelector("input") as HTMLElement,
      );
    } else {
      this.internals.setValidity({});
    }
  }

  private checkValidity(): boolean {
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

  private getValidationMessage(): string {
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
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-input": HpeInput;
  }
}
