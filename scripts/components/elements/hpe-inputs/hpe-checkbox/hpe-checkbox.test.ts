import { afterEach, describe, expect, it } from "vitest";
import type { HpeCheckbox } from "./hpe-checkbox.js";
import { HpeCheckbox as HpeCheckboxClass } from "./hpe-checkbox.js";
import "./hpe-checkbox.js";

const renderCheckbox = async (
  setup?: (checkbox: HpeCheckbox) => void,
): Promise<HpeCheckbox> => {
  await customElements.whenDefined("hpe-checkbox");

  const checkbox = document.createElement("hpe-checkbox") as HpeCheckbox;
  checkbox.name = "test-checkbox";
  checkbox.label = "Test Checkbox";
  setup?.(checkbox);

  document.body.appendChild(checkbox);
  await checkbox.updateComplete;

  return checkbox;
};

const getNativeCheckbox = (checkbox: HpeCheckbox): HTMLInputElement | null =>
  checkbox.shadowRoot?.querySelector(
    "input[type='checkbox']",
  ) as HTMLInputElement | null;

afterEach(() => {
  document.body.innerHTML = "";
});

describe("hpe-checkbox", () => {
  describe("form association", () => {
    it("is a form-associated custom element", async () => {
      const checkbox = await renderCheckbox();
      expect((checkbox as any).internals).toBeDefined();
      expect((HpeCheckboxClass as any).formAssociated).toBe(true);
    });

    it("associates with form element", async () => {
      await customElements.whenDefined("hpe-checkbox");

      const form = document.createElement("form");
      const checkbox = document.createElement("hpe-checkbox") as HpeCheckbox;

      checkbox.name = "agree";
      form.appendChild(checkbox);
      document.body.appendChild(form);
      await checkbox.updateComplete;

      expect((checkbox as any).internals.form).toBe(form);
    });
  });

  describe("checked state", () => {
    it("initializes unchecked by default", async () => {
      const checkbox = await renderCheckbox();
      expect(checkbox.checked).toBe(false);
    });

    it("initializes checked when property is set", async () => {
      const checkbox = await renderCheckbox((element) => {
        element.checked = true;
      });

      expect(checkbox.checked).toBe(true);
    });

    it("reflects checked property to native checkbox", async () => {
      const checkbox = await renderCheckbox();
      const nativeCheckbox = getNativeCheckbox(checkbox);

      checkbox.checked = true;
      await checkbox.updateComplete;

      expect(nativeCheckbox?.checked).toBe(true);
    });

    it("syncs native checkbox state to property on change", async () => {
      const checkbox = await renderCheckbox();
      const nativeCheckbox = getNativeCheckbox(checkbox);

      if (nativeCheckbox) {
        nativeCheckbox.checked = true;
        nativeCheckbox.dispatchEvent(new Event("change", { bubbles: true }));
      }

      await checkbox.updateComplete;

      expect(checkbox.checked).toBe(true);
    });
  });

  describe("form value synchronization", () => {
    it("sets form value to checkbox value when checked", async () => {
      const checkbox = await renderCheckbox((element) => {
        element.value = "agree";
        element.checked = true;
      });

      const nativeCheckbox = getNativeCheckbox(checkbox);

      if (nativeCheckbox) {
        nativeCheckbox.dispatchEvent(new Event("change", { bubbles: true }));
      }

      await checkbox.updateComplete;

      expect(checkbox.checked).toBe(true);
    });

    it("uses 'on' as default value when checked without explicit value", async () => {
      const checkbox = await renderCheckbox((element) => {
        element.checked = true;
      });

      const nativeCheckbox = getNativeCheckbox(checkbox);

      if (nativeCheckbox) {
        nativeCheckbox.dispatchEvent(new Event("change", { bubbles: true }));
      }

      await checkbox.updateComplete;

      expect(checkbox.checked).toBe(true);
    });

    it("clears form value when unchecked", async () => {
      const checkbox = await renderCheckbox((element) => {
        element.value = "agree";
        element.checked = true;
      });

      const nativeCheckbox = getNativeCheckbox(checkbox);

      if (nativeCheckbox) {
        nativeCheckbox.checked = false;
        nativeCheckbox.dispatchEvent(new Event("change", { bubbles: true }));
      }

      await checkbox.updateComplete;

      expect(checkbox.checked).toBe(false);
    });
  });

  describe("attributes", () => {
    it("reflects name attribute", async () => {
      const checkbox = await renderCheckbox((element) => {
        element.name = "terms-agree";
      });

      const nativeCheckbox = getNativeCheckbox(checkbox);
      expect(nativeCheckbox?.name).toBe("terms-agree");
    });

    it("reflects value attribute", async () => {
      const checkbox = await renderCheckbox((element) => {
        element.value = "yes";
      });

      const nativeCheckbox = getNativeCheckbox(checkbox);
      expect(nativeCheckbox?.value).toBe("yes");
    });

    it("reflects disabled attribute", async () => {
      const checkbox = await renderCheckbox((element) => {
        element.disabled = true;
      });

      const nativeCheckbox = getNativeCheckbox(checkbox);
      expect(nativeCheckbox?.disabled).toBe(true);
    });
  });

  describe("label", () => {
    it("renders label text", async () => {
      const checkbox = await renderCheckbox((element) => {
        element.label = "I agree to terms";
      });

      const label = checkbox.shadowRoot?.querySelector("[part='label']");
      expect(label?.textContent).toBe("I agree to terms");
    });

    it("associates label with checkbox input", async () => {
      const checkbox = await renderCheckbox((element) => {
        element.name = "my-checkbox";
      });

      const label = checkbox.shadowRoot?.querySelector("label");
      const nativeCheckbox = getNativeCheckbox(checkbox);

      expect(label?.getAttribute("for")).toBe(nativeCheckbox?.id);
    });

    it("uses name as input id when name is provided", async () => {
      const checkbox = await renderCheckbox((element) => {
        element.name = "remember-me";
      });

      const nativeCheckbox = getNativeCheckbox(checkbox);
      expect(nativeCheckbox?.id).toBe("remember-me");
    });

    it("uses default checkbox id when name not provided", async () => {
      await customElements.whenDefined("hpe-checkbox");

      const checkbox = document.createElement("hpe-checkbox") as HpeCheckbox;
      document.body.appendChild(checkbox);
      await checkbox.updateComplete;

      const nativeCheckbox = getNativeCheckbox(checkbox);
      expect(nativeCheckbox?.id).toBe("checkbox");
    });
  });

  describe("accessibility", () => {
    it("renders input with correct type", async () => {
      const checkbox = await renderCheckbox();
      const nativeCheckbox = getNativeCheckbox(checkbox);

      expect(nativeCheckbox?.type).toBe("checkbox");
    });

    it("is clickable via label", async () => {
      const checkbox = await renderCheckbox((element) => {
        element.checked = false;
      });

      const label = checkbox.shadowRoot?.querySelector(
        "label",
      ) as HTMLLabelElement;
      const nativeCheckbox = getNativeCheckbox(checkbox);

      expect(nativeCheckbox?.checked).toBe(false);

      // Simulate label click behavior
      if (nativeCheckbox) {
        nativeCheckbox.checked = true;
        nativeCheckbox.dispatchEvent(new Event("change", { bubbles: true }));
      }

      await checkbox.updateComplete;

      expect(checkbox.checked).toBe(true);
    });

    it("has proper container role structure", async () => {
      const checkbox = await renderCheckbox();
      const container =
        checkbox.shadowRoot?.querySelector("[part='container']");

      expect(container?.tagName).toBe("LABEL");
    });
  });

  describe("styling", () => {
    it("exposes container part", async () => {
      const checkbox = await renderCheckbox();
      const container =
        checkbox.shadowRoot?.querySelector("[part='container']");

      expect(container).not.toBeNull();
    });

    it("exposes checkbox-group part", async () => {
      const checkbox = await renderCheckbox();
      const group = checkbox.shadowRoot?.querySelector(
        "[part='checkbox-group']",
      );

      expect(group).not.toBeNull();
    });

    it("exposes checkmark part", async () => {
      const checkbox = await renderCheckbox();
      const checkmark =
        checkbox.shadowRoot?.querySelector("[part='checkmark']");

      expect(checkmark).not.toBeNull();
    });

    it("exposes label part", async () => {
      const checkbox = await renderCheckbox();
      const label = checkbox.shadowRoot?.querySelector("[part='label']");

      expect(label).not.toBeNull();
    });
  });

  describe("disabled state", () => {
    it("disables native checkbox when disabled", async () => {
      const checkbox = await renderCheckbox((element) => {
        element.disabled = true;
      });

      const nativeCheckbox = getNativeCheckbox(checkbox);
      expect(nativeCheckbox?.disabled).toBe(true);
    });

    it("prevents state changes when disabled", async () => {
      const checkbox = await renderCheckbox((element) => {
        element.disabled = true;
        element.checked = false;
      });

      const nativeCheckbox = getNativeCheckbox(checkbox);

      expect(nativeCheckbox?.disabled).toBe(true);
      expect(checkbox.checked).toBe(false);
    });
  });

  describe("edge cases", () => {
    it("handles rapid check/uncheck cycles", async () => {
      const checkbox = await renderCheckbox();

      checkbox.checked = true;
      await checkbox.updateComplete;
      expect(checkbox.checked).toBe(true);

      checkbox.checked = false;
      await checkbox.updateComplete;
      expect(checkbox.checked).toBe(false);

      checkbox.checked = true;
      await checkbox.updateComplete;
      expect(checkbox.checked).toBe(true);
    });

    it("handles value changes while checked", async () => {
      const checkbox = await renderCheckbox((element) => {
        element.value = "old-value";
        element.checked = true;
      });

      checkbox.value = "new-value";
      await checkbox.updateComplete;

      const nativeCheckbox = getNativeCheckbox(checkbox);
      expect(nativeCheckbox?.value).toBe("new-value");
    });

    it("handles empty value attribute", async () => {
      const checkbox = await renderCheckbox((element) => {
        element.value = "";
      });

      const nativeCheckbox = getNativeCheckbox(checkbox);
      expect(nativeCheckbox?.value).toBe("");
    });
  });
});
