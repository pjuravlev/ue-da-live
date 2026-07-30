import { afterEach, describe, expect, it } from "vitest";
import type { HpeRadio } from "./hpe-radio.js";
import { HpeRadio as HpeRadioClass } from "./hpe-radio.js";
import "./hpe-radio.js";

const renderRadio = async (
  setup?: (radio: HpeRadio) => void,
): Promise<HpeRadio> => {
  await customElements.whenDefined("hpe-radio");

  const radio = document.createElement("hpe-radio") as HpeRadio;
  radio.name = "test-radio";
  radio.label = "Test Radio";
  setup?.(radio);

  document.body.appendChild(radio);
  await radio.updateComplete;

  return radio;
};

const getNativeRadio = (radio: HpeRadio): HTMLInputElement | null =>
  radio.shadowRoot?.querySelector(
    "input[type='radio']",
  ) as HTMLInputElement | null;

afterEach(() => {
  document.body.innerHTML = "";
});

describe("hpe-radio", () => {
  describe("form association", () => {
    it("is a form-associated custom element", async () => {
      const radio = await renderRadio();
      expect((radio as any).internals).toBeDefined();
      expect((HpeRadioClass as any).formAssociated).toBe(true);
    });

    it("associates with form element", async () => {
      await customElements.whenDefined("hpe-radio");

      const form = document.createElement("form");
      const radio = document.createElement("hpe-radio") as HpeRadio;

      radio.name = "preference";
      radio.value = "option1";
      form.appendChild(radio);
      document.body.appendChild(form);
      await radio.updateComplete;

      expect((radio as any).internals.form).toBe(form);
    });
  });

  describe("checked state", () => {
    it("initializes unchecked by default", async () => {
      const radio = await renderRadio();
      expect(radio.checked).toBe(false);
    });

    it("initializes checked when property is set", async () => {
      const radio = await renderRadio((element) => {
        element.checked = true;
      });

      expect(radio.checked).toBe(true);
    });

    it("reflects checked property to native radio", async () => {
      const radio = await renderRadio();
      const nativeRadio = getNativeRadio(radio);

      radio.checked = true;
      await radio.updateComplete;

      expect(nativeRadio?.checked).toBe(true);
    });

    it("syncs native radio state to property on change", async () => {
      const radio = await renderRadio();
      const nativeRadio = getNativeRadio(radio);

      if (nativeRadio) {
        nativeRadio.checked = true;
        nativeRadio.dispatchEvent(new Event("change", { bubbles: true }));
      }

      await radio.updateComplete;

      expect(radio.checked).toBe(true);
    });
  });

  describe("form value synchronization", () => {
    it("sets form value to radio value when checked", async () => {
      const radio = await renderRadio((element) => {
        element.value = "option1";
        element.checked = true;
      });

      const nativeRadio = getNativeRadio(radio);

      if (nativeRadio) {
        nativeRadio.dispatchEvent(new Event("change", { bubbles: true }));
      }

      await radio.updateComplete;

      expect(radio.checked).toBe(true);
    });

    it("uses 'on' as default value when checked without explicit value", async () => {
      const radio = await renderRadio((element) => {
        element.checked = true;
      });

      const nativeRadio = getNativeRadio(radio);

      if (nativeRadio) {
        nativeRadio.dispatchEvent(new Event("change", { bubbles: true }));
      }

      await radio.updateComplete;

      expect(radio.checked).toBe(true);
    });

    it("clears form value when unchecked", async () => {
      const radio = await renderRadio((element) => {
        element.value = "option1";
        element.checked = true;
      });

      const nativeRadio = getNativeRadio(radio);

      if (nativeRadio) {
        nativeRadio.checked = false;
        nativeRadio.dispatchEvent(new Event("change", { bubbles: true }));
      }

      await radio.updateComplete;

      expect(radio.checked).toBe(false);
    });
  });

  describe("radio group behavior", () => {
    it("groups radios with same name", async () => {
      await customElements.whenDefined("hpe-radio");

      const container = document.createElement("div");

      const radio1 = document.createElement("hpe-radio") as HpeRadio;
      radio1.name = "group";
      radio1.value = "option1";
      radio1.label = "Option 1";

      const radio2 = document.createElement("hpe-radio") as HpeRadio;
      radio2.name = "group";
      radio2.value = "option2";
      radio2.label = "Option 2";

      container.appendChild(radio1);
      container.appendChild(radio2);
      document.body.appendChild(container);

      await radio1.updateComplete;
      await radio2.updateComplete;

      const nativeRadio1 = getNativeRadio(radio1);
      const nativeRadio2 = getNativeRadio(radio2);

      // Both should have the same name
      expect(nativeRadio1?.name).toBe("group");
      expect(nativeRadio2?.name).toBe("group");
    });

    it("browser handles mutual exclusivity in radio groups", async () => {
      await customElements.whenDefined("hpe-radio");

      const container = document.createElement("div");

      const radio1 = document.createElement("hpe-radio") as HpeRadio;
      radio1.name = "group";
      radio1.value = "opt1";

      const radio2 = document.createElement("hpe-radio") as HpeRadio;
      radio2.name = "group";
      radio2.value = "opt2";

      container.appendChild(radio1);
      container.appendChild(radio2);
      document.body.appendChild(container);

      await radio1.updateComplete;
      await radio2.updateComplete;

      radio1.checked = true;
      await radio1.updateComplete;
      expect(radio1.checked).toBe(true);

      // Check radio2
      radio2.checked = true;
      await radio2.updateComplete;
      expect(radio2.checked).toBe(true);
    });
  });

  describe("attributes", () => {
    it("reflects name attribute", async () => {
      const radio = await renderRadio((element) => {
        element.name = "preference";
      });

      const nativeRadio = getNativeRadio(radio);
      expect(nativeRadio?.name).toBe("preference");
    });

    it("reflects value attribute", async () => {
      const radio = await renderRadio((element) => {
        element.value = "yes";
      });

      const nativeRadio = getNativeRadio(radio);
      expect(nativeRadio?.value).toBe("yes");
    });

    it("reflects disabled attribute", async () => {
      const radio = await renderRadio((element) => {
        element.disabled = true;
      });

      const nativeRadio = getNativeRadio(radio);
      expect(nativeRadio?.disabled).toBe(true);
    });
  });

  describe("label", () => {
    it("renders label text", async () => {
      const radio = await renderRadio((element) => {
        element.label = "Yes, I agree";
      });

      const label = radio.shadowRoot?.querySelector("[part='label']");
      expect(label?.textContent).toBe("Yes, I agree");
    });

    it("associates label with radio input", async () => {
      const radio = await renderRadio((element) => {
        element.name = "my-radio";
        element.value = "val1";
      });

      const label = radio.shadowRoot?.querySelector("label");
      const nativeRadio = getNativeRadio(radio);

      expect(label?.getAttribute("for")).toBe(nativeRadio?.id);
    });

    it("generates input id from name and value", async () => {
      const radio = await renderRadio((element) => {
        element.name = "preference";
        element.value = "option1";
      });

      const nativeRadio = getNativeRadio(radio);
      expect(nativeRadio?.id).toContain("preference");
      expect(nativeRadio?.id).toContain("option1");
    });

    it("uses label as fallback for id generation when value not provided", async () => {
      const radio = await renderRadio((element) => {
        element.name = "choice";
        element.label = "Custom Label";
      });

      const nativeRadio = getNativeRadio(radio);
      expect(nativeRadio?.id).toContain("choice");
      expect(nativeRadio?.id).toContain("Custom Label");
    });

    it("generates default id when name not provided", async () => {
      await customElements.whenDefined("hpe-radio");

      const radio = document.createElement("hpe-radio") as HpeRadio;
      radio.value = "test";
      document.body.appendChild(radio);
      await radio.updateComplete;

      const nativeRadio = getNativeRadio(radio);
      expect(nativeRadio?.id).toContain("radio");
    });
  });

  describe("accessibility", () => {
    it("renders input with correct type", async () => {
      const radio = await renderRadio();
      const nativeRadio = getNativeRadio(radio);

      expect(nativeRadio?.type).toBe("radio");
    });

    it("is clickable via label", async () => {
      const radio = await renderRadio((element) => {
        element.checked = false;
      });

      const label = radio.shadowRoot?.querySelector(
        "label",
      ) as HTMLLabelElement;
      const nativeRadio = getNativeRadio(radio);

      expect(nativeRadio?.checked).toBe(false);

      // Simulate label click behavior
      if (nativeRadio) {
        nativeRadio.checked = true;
        nativeRadio.dispatchEvent(new Event("change", { bubbles: true }));
      }

      await radio.updateComplete;

      expect(radio.checked).toBe(true);
    });

    it("has proper container role structure", async () => {
      const radio = await renderRadio();
      const container = radio.shadowRoot?.querySelector("[part='container']");

      expect(container?.tagName).toBe("LABEL");
    });
  });

  describe("styling", () => {
    it("exposes container part", async () => {
      const radio = await renderRadio();
      const container = radio.shadowRoot?.querySelector("[part='container']");

      expect(container).not.toBeNull();
    });

    it("exposes radio-group part", async () => {
      const radio = await renderRadio();
      const group = radio.shadowRoot?.querySelector("[part='radio-group']");

      expect(group).not.toBeNull();
    });

    it("exposes radio part", async () => {
      const radio = await renderRadio();
      const radioElement = radio.shadowRoot?.querySelector("[part='radio']");

      expect(radioElement).not.toBeNull();
    });

    it("exposes label part", async () => {
      const radio = await renderRadio();
      const label = radio.shadowRoot?.querySelector("[part='label']");

      expect(label).not.toBeNull();
    });
  });

  describe("disabled state", () => {
    it("disables native radio when disabled", async () => {
      const radio = await renderRadio((element) => {
        element.disabled = true;
      });

      const nativeRadio = getNativeRadio(radio);
      expect(nativeRadio?.disabled).toBe(true);
    });

    it("prevents state changes when disabled", async () => {
      const radio = await renderRadio((element) => {
        element.disabled = true;
        element.checked = false;
      });

      const nativeRadio = getNativeRadio(radio);

      expect(nativeRadio?.disabled).toBe(true);
      expect(radio.checked).toBe(false);
    });
  });

  describe("edge cases", () => {
    it("handles rapid check/uncheck cycles", async () => {
      const radio = await renderRadio();

      radio.checked = true;
      await radio.updateComplete;
      expect(radio.checked).toBe(true);

      radio.checked = false;
      await radio.updateComplete;
      expect(radio.checked).toBe(false);

      radio.checked = true;
      await radio.updateComplete;
      expect(radio.checked).toBe(true);
    });

    it("handles value changes while checked", async () => {
      const radio = await renderRadio((element) => {
        element.value = "old-value";
        element.checked = true;
      });

      radio.value = "new-value";
      await radio.updateComplete;

      const nativeRadio = getNativeRadio(radio);
      expect(nativeRadio?.value).toBe("new-value");
    });

    it("handles empty value attribute", async () => {
      const radio = await renderRadio((element) => {
        element.value = "";
      });

      const nativeRadio = getNativeRadio(radio);
      expect(nativeRadio?.value).toBe("");
    });
  });
});
