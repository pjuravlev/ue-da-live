import { afterEach, describe, expect, it, vi } from "vitest";
import type { HpeForm } from "./hpe-form.js";
import "./hpe-form.js";
import "../hpe-inputs/hpe-input/hpe-input.js";

const renderForm = async (
  setup?: (form: HpeForm) => void,
): Promise<HpeForm> => {
  await customElements.whenDefined("hpe-form");

  const form = document.createElement("hpe-form") as HpeForm;
  form.heading = "Test Form";
  form.description = "Test Description";
  setup?.(form);

  document.body.appendChild(form);
  await form.updateComplete;

  return form;
};

afterEach(() => {
  document.body.innerHTML = "";
});

describe("hpe-form", () => {
  describe("native form element", () => {
    it("renders as a native form element", async () => {
      const form = await renderForm();
      const nativeForm = form.shadowRoot?.querySelector("form");

      expect(nativeForm).not.toBeNull();
      expect(nativeForm?.tagName).toBe("FORM");
    });

    it("exposes form part for styling", async () => {
      const form = await renderForm();
      const formElement = form.shadowRoot?.querySelector("form");

      expect(formElement?.getAttribute("part")).toBe("container");
    });
  });

  describe("form submission", () => {
    it("dispatches submit event on button click", async () => {
      const form = await renderForm();
      const submitHandler = vi.fn((e: Event) => {
        e.preventDefault();
      });

      form.addEventListener("submit", submitHandler);

      const button = form.shadowRoot?.querySelector("hpe-button");
      const clickEvent = new MouseEvent("click", { bubbles: true });
      button?.dispatchEvent(clickEvent);

      await form.updateComplete;

      expect(submitHandler).toHaveBeenCalled();
    });

    it("dispatches submit event with correct event type", async () => {
      const form = await renderForm();
      let submittedEvent: SubmitEvent | null = null;

      form.addEventListener("submit", (e) => {
        submittedEvent = e as SubmitEvent;
      });

      const button = form.shadowRoot?.querySelector("hpe-button");
      const clickEvent = new MouseEvent("click", { bubbles: true });
      button?.dispatchEvent(clickEvent);

      await form.updateComplete;

      expect(submittedEvent).toBeInstanceOf(SubmitEvent);
      expect(submittedEvent?.bubbles).toBe(true);
      expect(submittedEvent?.composed).toBe(true);
    });
  });

  describe("form structure", () => {
    it("renders heading section", async () => {
      const form = await renderForm((element) => {
        element.heading = "Contact Form";
      });

      const heading = form.shadowRoot?.querySelector("hpe-heading");
      expect(heading?.textContent).toContain("Contact Form");
    });

    it("renders description section", async () => {
      const form = await renderForm((element) => {
        element.description = "Please fill out all fields";
      });

      const description = form.shadowRoot?.querySelector("hpe-paragraph");
      expect(description?.textContent).toContain("Please fill out all fields");
    });

    it("renders submit button with correct label", async () => {
      const form = await renderForm((element) => {
        element.submitLabel = "Send Now";
      });

      const button = form.shadowRoot?.querySelector("hpe-button");
      expect(button?.textContent).toContain("Send Now");
    });

    it("renders slot for form fields", async () => {
      await customElements.whenDefined("hpe-form");
      const form = document.createElement("hpe-form") as HpeForm;

      const input = document.createElement("hpe-input");
      input.name = "email";
      input.label = "Email";

      form.appendChild(input);
      document.body.appendChild(form);
      await form.updateComplete;

      const slot = form.shadowRoot?.querySelector(
        'div[part="fields"] slot',
      );
      expect(slot).not.toBeNull();
    });

    it("renders slot for additional actions", async () => {
      const form = await renderForm();

      const slot = form.shadowRoot?.querySelector('slot[name="actions"]');
      expect(slot).not.toBeNull();
    });
  });
});
