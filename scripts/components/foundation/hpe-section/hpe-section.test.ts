import { afterEach, describe, expect, it } from "vitest";
import type { HpeSection } from "./hpe-section.js";
import "./hpe-section.js";

const renderSection = async (
  setup?: (section: HpeSection) => void,
): Promise<HpeSection> => {
  await customElements.whenDefined("hpe-section");

  const section = document.createElement("hpe-section") as HpeSection;
  setup?.(section);

  document.body.appendChild(section);
  await section.updateComplete;

  return section;
};

afterEach(() => {
  document.body.innerHTML = "";
});

describe("hpe-section", () => {
  describe("padding property", () => {
    it("uses default padding", async () => {
      const section = await renderSection();

      expect(section.padding).toBe("default");
    });

    it("reflects configured padding to the attribute", async () => {
      const section = await renderSection((element) => {
        element.padding = "top";
      });

      expect(section.getAttribute("padding")).toBe("top");
    });
  });

  describe("slot and part contract", () => {
    it("renders slotted content in the container", async () => {
      const section = await renderSection((element) => {
        const content = document.createElement("p");
        content.textContent = "Section body";
        element.appendChild(content);
      });

      const slot = section.shadowRoot?.querySelector("slot") as
        | HTMLSlotElement
        | undefined;
      const assignedElements = slot?.assignedElements({ flatten: true }) ?? [];

      expect(assignedElements).toHaveLength(1);
      expect((assignedElements[0] as HTMLElement).textContent).toBe(
        "Section body",
      );
    });

    it("exposes section and container parts", async () => {
      const section = await renderSection();

      const sectionElement = section.shadowRoot?.querySelector(
        "[part='section']",
      ) as HTMLElement | null;
      const containerElement = section.shadowRoot?.querySelector(
        "[part='container']",
      ) as HTMLElement | null;

      expect(sectionElement).not.toBeNull();
      expect(containerElement).not.toBeNull();
    });
  });
});
