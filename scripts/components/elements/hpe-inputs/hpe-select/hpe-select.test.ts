import { afterEach, describe, expect, it } from "vitest";
import type { HpeSelect } from "./hpe-select.js";
import { HpeSelect as HpeSelectClass } from "./hpe-select.js";
import "./hpe-select.js";

const renderSelect = async (
  setup?: (select: HpeSelect) => void,
): Promise<HpeSelect> => {
  await customElements.whenDefined("hpe-select");

  const select = document.createElement("hpe-select") as HpeSelect;
  select.name = "test-select";
  select.label = "Test Select";
  setup?.(select);

  document.body.appendChild(select);
  await select.updateComplete;

  return select;
};

afterEach(() => {
  document.body.innerHTML = "";
});

describe("hpe-select", () => {
  describe("basic rendering", () => {
    it("renders hpe-select element", async () => {
      const select = await renderSelect();
      expect(select.tagName).toBe("HPE-SELECT");
    });

    it("renders with default properties", async () => {
      const select = await renderSelect();
      expect(select.label).toBe("Test Select");
      expect(select.value).toBe("");
      expect(select.disabled).toBe(false);
    });

    it("reflects name attribute", async () => {
      const select = await renderSelect((element) => {
        element.name = "my-select";
      });

      expect(select.getAttribute("name")).toBe("my-select");
    });
  });

  describe("properties", () => {
    it("accepts and reflects value property", async () => {
      const select = await renderSelect();
      select.value = "test-value";
      await select.updateComplete;

      expect(select.value).toBe("test-value");
    });

    it("reflects disabled property", async () => {
      const select = await renderSelect((element) => {
        element.disabled = true;
      });

      expect(select.disabled).toBe(true);
    });

    it("updates required state", async () => {
      const select = await renderSelect((element) => {
        element.required = true;
      });

      expect(select.required).toBe(true);
    });

    it("shows label text", async () => {
      const select = await renderSelect((element) => {
        element.label = "Choose an option";
        element.showLabel = true;
      });

      const label = select.shadowRoot?.querySelector("label");
      expect(label?.textContent).toContain("Choose an option");
    });

    it("hides label when show-label is false", async () => {
      const select = await renderSelect((element) => {
        element.showLabel = false;
      });

      const label = select.shadowRoot?.querySelector("label");
      expect(label).toBeNull();
    });
  });

  describe("state management", () => {
    it("initializes in enabled state", async () => {
      const select = await renderSelect();
      expect(select.state).toBe("enabled");
    });

    it("changes state based on interaction", async () => {
      const select = await renderSelect();
      expect(select.state).toBe("enabled");

      select.state = "typing";
      await select.updateComplete;

      expect(select.state).toBe("typing");
    });

    it("reflects state to attribute", async () => {
      const select = await renderSelect((element) => {
        element.state = "complete";
      });

      expect(select.getAttribute("state")).toBe("complete");
    });
  });

  describe("accessibility", () => {
    it("renders label element", async () => {
      const select = await renderSelect((element) => {
        element.label = "Test Label";
        element.showLabel = true;
      });

      const label = select.shadowRoot?.querySelector("label");
      expect(label).not.toBeNull();
    });

    it("shows required indicator when required", async () => {
      const select = await renderSelect((element) => {
        element.required = true;
        element.showLabel = true;
      });

      const indicator = select.shadowRoot?.querySelector(
        "[part='required-indicator']",
      );
      expect(indicator?.textContent).toBe("*");
    });

    it("renders description when shown", async () => {
      const select = await renderSelect((element) => {
        element.descriptionText = "Help text";
        element.showDescription = true;
      });

      const description = select.shadowRoot?.querySelector(
        "[part='description']",
      );
      expect(description?.textContent).toContain("Help text");
    });
  });

  describe("edge cases", () => {
    it("handles empty select", async () => {
      const select = await renderSelect();
      expect(select.value).toBe("");
      expect(select.tagName).toBe("HPE-SELECT");
    });

    it("handles value changes", async () => {
      const select = await renderSelect((element) => {
        element.value = "initial";
      });

      expect(select.value).toBe("initial");

      select.value = "changed";
      await select.updateComplete;

      expect(select.value).toBe("changed");
    });

    it("handles state transitions", async () => {
      const select = await renderSelect();

      const states = [
        "enabled",
        "typing",
        "complete",
        "error",
        "disabled",
      ] as const;
      for (const state of states) {
        select.state = state;
        await select.updateComplete;
        expect(select.state).toBe(state);
      }
    });
  });

  describe("form association", () => {
    it("has formAssociated static property", () => {
      expect(HpeSelectClass.formAssociated).toBe(true);
    });

    it("associates with parent form", async () => {
      const form = document.createElement("form");
      const select = document.createElement("hpe-select") as HpeSelect;
      select.name = "test-select";
      select.value = "opt1";

      form.appendChild(select);
      document.body.appendChild(form);
      await select.updateComplete;

      expect((select as any).internals.form).toBe(form);

      document.body.innerHTML = "";
    });

    it("synchronizes value to form", async () => {
      const form = document.createElement("form");
      const select = document.createElement("hpe-select") as HpeSelect;
      select.name = "test-select";

      form.appendChild(select);
      document.body.appendChild(form);
      await select.updateComplete;

      select.value = "test-value";
      await select.updateComplete;

      expect((select as any).internals.form).toBe(form);
      expect((select as any).internals.setFormValue).toBeDefined();

      document.body.innerHTML = "";
    });

    it("validates required constraint when empty", async () => {
      const select = await renderSelect((element) => {
        element.required = true;
        element.value = "";
      });

      const isValid = (select as any).checkValidity?.();
      expect(isValid).toBe(false);
    });

    it("validates required constraint as true when has value", async () => {
      const select = await renderSelect((element) => {
        element.required = true;
        element.value = "test-value";
      });

      const isValid = (select as any).checkValidity?.();
      expect(isValid).toBe(true);
    });

    it("returns validation message for required field", async () => {
      const select = await renderSelect((element) => {
        element.required = true;
        element.label = "My Select";
        element.value = "";
      });

      const message = (select as any).getValidationMessage?.();
      expect(message).toContain("My Select");
      expect(message).toContain("required");
    });

    it("returns empty validation message when valid", async () => {
      const select = await renderSelect((element) => {
        element.required = true;
        element.value = "test-value";
      });

      const message = (select as any).getValidationMessage?.();
      expect(message).toBe("");
    });

    it("updates form state on input", async () => {
      const select = await renderSelect((element) => {
        element.value = "initial";
      });

      select.value = "new-value";
      await select.updateComplete;

      expect(select.value).toBe("new-value");
    });

    it("updates form state on blur", async () => {
      const select = await renderSelect((element) => {
        element.required = true;
        element.value = "";
      });

      const nativeSelect = select.shadowRoot?.querySelector("select");
      expect(nativeSelect).not.toBeNull();

      if (nativeSelect) {
        nativeSelect.dispatchEvent(new Event("blur"));
        await select.updateComplete;
      }

      expect(select.state).toBe("enabled");
    });

    it("updates form state on focus", async () => {
      const select = await renderSelect();

      const nativeSelect = select.shadowRoot?.querySelector("select");
      expect(nativeSelect).not.toBeNull();

      if (nativeSelect) {
        nativeSelect.dispatchEvent(new Event("focus"));
        await select.updateComplete;
      }

      expect(select.state).toBe("typing");
    });
  });
});
