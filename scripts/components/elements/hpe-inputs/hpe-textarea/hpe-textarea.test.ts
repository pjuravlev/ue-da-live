import { afterEach, describe, expect, it } from "vitest";
import type { HpeTextarea } from "./hpe-textarea.js";
import { HpeTextarea as HpeTextareaClass } from "./hpe-textarea.js";
import "./hpe-textarea.js";

const renderTextarea = async (
  setup?: (textarea: HpeTextarea) => void,
): Promise<HpeTextarea> => {
  await customElements.whenDefined("hpe-textarea");

  const textarea = document.createElement("hpe-textarea") as HpeTextarea;
  textarea.name = "test-textarea";
  textarea.label = "Test Textarea";
  setup?.(textarea);

  document.body.appendChild(textarea);
  await textarea.updateComplete;

  return textarea;
};

afterEach(() => {
  document.body.innerHTML = "";
});

describe("hpe-textarea", () => {
  describe("form association", () => {
    it("is a form-associated custom element", async () => {
      const textarea = await renderTextarea();
      expect((textarea as any).internals).toBeDefined();
      expect((HpeTextareaClass as any).formAssociated).toBe(true);
    });

    it("associates with form element", async () => {
      await customElements.whenDefined("hpe-textarea");

      const form = document.createElement("form");
      const textarea = document.createElement("hpe-textarea") as HpeTextarea;

      textarea.name = "message";
      form.appendChild(textarea);
      document.body.appendChild(form);
      await textarea.updateComplete;

      expect((textarea as any).internals.form).toBe(form);
    });
  });

  describe("value property", () => {
    it("initializes with empty value", async () => {
      const textarea = await renderTextarea();
      expect(textarea.value).toBe("");
    });

    it("accepts initial value", async () => {
      const textarea = await renderTextarea((element) => {
        element.value = "Initial content";
      });

      expect(textarea.value).toBe("Initial content");
    });

    it("updates value property", async () => {
      const textarea = await renderTextarea();
      textarea.value = "New content";
      await textarea.updateComplete;

      expect(textarea.value).toBe("New content");
    });
  });

  describe("state management", () => {
    it("initializes in enabled state", async () => {
      const textarea = await renderTextarea();
      expect(textarea.state).toBe("enabled");
    });

    it("supports typing state", async () => {
      const textarea = await renderTextarea();
      textarea.state = "typing";
      await textarea.updateComplete;

      expect(textarea.state).toBe("typing");
    });

    it("supports complete state", async () => {
      const textarea = await renderTextarea();
      textarea.state = "complete";
      await textarea.updateComplete;

      expect(textarea.state).toBe("complete");
    });

    it("supports error state", async () => {
      const textarea = await renderTextarea();
      textarea.state = "error";
      await textarea.updateComplete;

      expect(textarea.state).toBe("error");
    });

    it("supports disabled state", async () => {
      const textarea = await renderTextarea();
      textarea.state = "disabled";
      await textarea.updateComplete;

      expect(textarea.state).toBe("disabled");
    });
  });

  describe("label and description", () => {
    it("renders label when show-label is true", async () => {
      const textarea = await renderTextarea((element) => {
        element.label = "Comments";
        element.showLabel = true;
      });

      const label = textarea.shadowRoot?.querySelector("label");
      expect(label?.textContent).toContain("Comments");
    });

    it("hides label when show-label is false", async () => {
      const textarea = await renderTextarea((element) => {
        element.showLabel = false;
      });

      const label = textarea.shadowRoot?.querySelector("label");
      expect(label).toBeNull();
    });

    it("shows required indicator when required is true", async () => {
      const textarea = await renderTextarea((element) => {
        element.required = true;
      });

      const requiredIndicator = textarea.shadowRoot?.querySelector(
        "[part='required-indicator']",
      );
      expect(requiredIndicator?.textContent).toBe("*");
    });

    it("renders description when show-description is true", async () => {
      const textarea = await renderTextarea((element) => {
        element.descriptionText = "Please enter your feedback";
        element.showDescription = true;
      });

      const description = textarea.shadowRoot?.querySelector(
        "[part='description']",
      );
      expect(description?.textContent).toContain("Please enter your feedback");
    });

    it("displays character counter", async () => {
      const textarea = await renderTextarea((element) => {
        element.value = "hello";
        element.maxLength = 100;
        element.showDescription = true;
      });

      const counter = textarea.shadowRoot?.querySelector(".char-counter");
      expect(counter?.textContent).toContain("5/100");
    });
  });

  describe("properties", () => {
    it("reflects placeholder property", async () => {
      const textarea = await renderTextarea((element) => {
        element.placeholder = "Enter text here...";
      });

      expect(textarea.placeholder).toBe("Enter text here...");
    });

    it("reflects name property", async () => {
      const textarea = await renderTextarea((element) => {
        element.name = "feedback";
      });

      expect(textarea.name).toBe("feedback");
    });

    it("reflects required property", async () => {
      const textarea = await renderTextarea((element) => {
        element.required = true;
      });

      expect(textarea.required).toBe(true);
    });

    it("reflects maxLength property", async () => {
      const textarea = await renderTextarea((element) => {
        element.maxLength = 500;
      });

      expect(textarea.maxLength).toBe(500);
    });

    it("reflects disabled property", async () => {
      const textarea = await renderTextarea((element) => {
        element.disabled = true;
      });

      expect(textarea.disabled).toBe(true);
    });
  });

  describe("accessibility", () => {
    it("associates label with textarea", async () => {
      const textarea = await renderTextarea((element) => {
        element.showLabel = true;
      });

      const label = textarea.shadowRoot?.querySelector(
        "label",
      ) as HTMLLabelElement;
      const nativeTextarea = textarea.shadowRoot?.querySelector(
        "textarea",
      ) as HTMLTextAreaElement;

      expect(label?.getAttribute("for")).toBe(nativeTextarea?.id);
    });
  });

  describe("edge cases", () => {
    it("handles very long content", async () => {
      const longText = "a".repeat(5000);
      const textarea = await renderTextarea((element) => {
        element.value = longText;
        element.maxLength = 10000;
      });

      expect(textarea.value).toBe(longText);
    });

    it("handles special characters", async () => {
      const specialText = "Hello\nWorld!@#$%^&*()";
      const textarea = await renderTextarea((element) => {
        element.value = specialText;
      });

      expect(textarea.value).toBe(specialText);
    });

    it("handles whitespace in value", async () => {
      const whitespaceText = "  \n  Content  \n  ";
      const textarea = await renderTextarea((element) => {
        element.value = whitespaceText;
      });

      expect(textarea.value).toBe(whitespaceText);
    });
  });
});
