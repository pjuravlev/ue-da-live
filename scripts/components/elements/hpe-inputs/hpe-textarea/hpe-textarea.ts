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
@customElement("hpe-textarea")
export class HpeTextarea extends LitElement {
  static override styles = styles;
  static formAssociated = true;
  private static idCounter = 0;
  private readonly textareaId = `hpe-textarea-${HpeTextarea.idCounter++}`;
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

  @property({ reflect: true, attribute: "max-length", type: Number })
  maxLength = 3000;

  @property({ reflect: true })
  state: "enabled" | "error" | "typing" | "complete" | "disabled" = "enabled";

  @property({ reflect: true, type: Boolean })
  disabled = false;

  override render() {
    const charCount = this.value.length;
    const isDisabled = this.disabled || this.state === "disabled";

    return html`
      <div part="container" class="container">
        <div part="input-group" class="input-group">
          ${this.showLabel
            ? html`
                <label part="label" class="label" for=${this.textareaId}>
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
          ? html`
              <div part="description" class="description">
                <p class="description-text">${this.descriptionText}</p>
                <p class="char-counter">${charCount}/${this.maxLength}</p>
              </div>
            `
          : ""}
      </div>
    `;
  }

  private _onInput(e: Event) {
    const target = e.target as HTMLTextAreaElement;
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
      return;
    }

    this.state = "enabled";
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
        this.shadowRoot?.querySelector("textarea") || undefined,
      );
    } else {
      this.internals.setValidity({});
    }
  }

  private checkValidity(): boolean {
    if (this.required && !this.value.trim()) {
      return false;
    }
    if (this.value.length > this.maxLength) {
      return false;
    }
    return true;
  }

  private getValidationMessage(): string {
    if (this.required && !this.value.trim()) {
      return `${this.label} is required`;
    }
    if (this.value.length > this.maxLength) {
      return `${this.label} exceeds maximum length of ${this.maxLength} characters`;
    }
    return "";
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-textarea": HpeTextarea;
  }
}
