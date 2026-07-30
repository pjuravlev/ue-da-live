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
@customElement("hpe-form")
export class HpeForm extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  heading = "Heading";

  @property({ reflect: true })
  description =
    "Desription text providing context for the form and its fields. This can be a few sentences long.";

  @property({ reflect: true, attribute: "submit-label" })
  submitLabel = "Submit";

  override render() {
    return html`
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

  private onSubmit(e: SubmitEvent) {
    e.preventDefault();
    this.dispatchEvent(
      new SubmitEvent("submit", {
        bubbles: true,
        cancelable: true,
        composed: true,
      }),
    );
  }

  private onSubmitClick() {
    const formElement = this.shadowRoot?.querySelector("form") as HTMLFormElement;
    if (formElement) {
      formElement.requestSubmit();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-form": HpeForm;
  }
}
