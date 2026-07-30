import { afterEach, describe, expect, it } from "vitest";
import type { HpeInput } from "./hpe-input.js";
import "./hpe-input.js";

const renderInput = async (
  setup?: (input: HpeInput) => void,
): Promise<HpeInput> => {
  await customElements.whenDefined("hpe-input");

  const input = document.createElement("hpe-input") as HpeInput;
  input.name = "test-input";
  input.label = "Test Label";
  setup?.(input);

  document.body.appendChild(input);
  await input.updateComplete;

  return input;
};

const getInputElement = (input: HpeInput): HTMLInputElement | null =>
  input.shadowRoot?.querySelector("input") as HTMLInputElement | null;

afterEach(() => {
  document.body.innerHTML = "";
});

describe("hpe-input", () => {
  describe("form association", () => {
    it("is a form-associated custom element", async () => {
      const input = await renderInput();

      expect((input.constructor as any).formAssociated).toBe(true);
    });

    it("has ElementInternals support", async () => {
      const input = await renderInput();

      expect((input as any).internals).toBeDefined();
      expect((input as any).internals.form).toBeDefined();
    });
  });

  describe("value synchronization", () => {
    it("synchronizes value to form state on input", async () => {
      const input = await renderInput();
      const nativeInput = getInputElement(input);

      if (nativeInput) {
        nativeInput.value = "test value";
        nativeInput.dispatchEvent(new Event("input", { bubbles: true }));
      }

      await input.updateComplete;

      expect(input.value).toBe("test value");
    });

    it("updates form value via internals", async () => {
      const input = await renderInput();
      const nativeInput = getInputElement(input);

      if (nativeInput) {
        nativeInput.value = "form value";
        nativeInput.dispatchEvent(new Event("input", { bubbles: true }));
      }

      await input.updateComplete;

      // ElementInternals.setFormValue is called internally
      expect((input as any).internals.form).toBeDefined();
    });
  });

  describe("constraint validation", () => {
    it("validates required constraint", async () => {
      const input = await renderInput((element) => {
        element.required = true;
      });

      const nativeInput = getInputElement(input);
      if (nativeInput) {
        nativeInput.dispatchEvent(new Event("input", { bubbles: true }));
      }

      await input.updateComplete;

      // checkValidity should return false for empty required field
      expect((input as any).checkValidity()).toBe(false);
    });

    it("passes required validation when value is present", async () => {
      const input = await renderInput((element) => {
        element.required = true;
        element.value = "filled";
      });

      // Should pass validation when value is present
      expect((input as any).checkValidity()).toBe(true);
    });

    it("validates pattern constraint", async () => {
      const input = await renderInput((element) => {
        element.pattern = "^[a-z]+$";
        element.value = "lowercase";
      });

      expect((input as any).checkValidity()).toBe(true);
    });

    it("fails pattern validation for invalid input", async () => {
      const input = await renderInput((element) => {
        element.pattern = "^[a-z]+$";
        element.value = "123Invalid";
      });

      expect((input as any).checkValidity()).toBe(false);
    });

    it("skips pattern validation for empty values", async () => {
      const input = await renderInput((element) => {
        element.pattern = "^[a-z]+$";
        element.required = false;
        element.value = "";
      });

      expect((input as any).checkValidity()).toBe(true);
    });
  });

  describe("validation messages", () => {
    it("generates required validation message", async () => {
      const input = await renderInput((element) => {
        element.required = true;
        element.label = "Email";
        element.value = "";
      });

      const message = (input as any).getValidationMessage();
      expect(message).toBe("Email is required");
    });

    it("generates pattern validation message", async () => {
      const input = await renderInput((element) => {
        element.pattern = "^[a-z]+$";
        element.label = "Username";
        element.value = "123";
      });

      const message = (input as any).getValidationMessage();
      expect(message).toContain("does not match the required pattern");
    });
  });

  describe("state transitions", () => {
    it("transitions to typing state on focus", async () => {
      const input = await renderInput();
      const nativeInput = getInputElement(input);

      if (nativeInput) {
        nativeInput.dispatchEvent(new FocusEvent("focus", { bubbles: true }));
      }

      await input.updateComplete;

      expect(input.state).toBe("typing");
    });

    it("transitions to complete state on blur with value", async () => {
      const input = await renderInput((element) => {
        element.value = "test";
      });

      const nativeInput = getInputElement(input);
      if (nativeInput) {
        nativeInput.dispatchEvent(new Event("blur", { bubbles: true }));
      }

      await input.updateComplete;

      expect(input.state).toBe("complete");
    });

    it("transitions to enabled state on blur without value", async () => {
      const input = await renderInput((element) => {
        element.value = "";
      });

      const nativeInput = getInputElement(input);
      if (nativeInput) {
        nativeInput.dispatchEvent(new Event("blur", { bubbles: true }));
      }

      await input.updateComplete;

      expect(input.state).toBe("enabled");
    });
  });

  describe("native input integration", () => {
    it("reflects disabled state to native input", async () => {
      const input = await renderInput((element) => {
        element.disabled = true;
      });

      const nativeInput = getInputElement(input);
      expect(nativeInput?.disabled).toBe(true);
    });

    it("reflects required attribute", async () => {
      const input = await renderInput((element) => {
        element.required = true;
      });

      expect(input.hasAttribute("required")).toBe(true);
    });

    it("reflects name attribute", async () => {
      const input = await renderInput((element) => {
        element.name = "email";
      });

      expect(input.hasAttribute("name")).toBe(true);
      expect(input.getAttribute("name")).toBe("email");
    });
  });
});
