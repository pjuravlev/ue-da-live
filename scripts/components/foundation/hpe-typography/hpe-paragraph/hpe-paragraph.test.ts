import { afterEach, describe, expect, it } from "vitest";
import type { HpeParagraph } from "./hpe-paragraph.js";
import "./hpe-paragraph.js";

const renderParagraph = async (
  setup?: (paragraph: HpeParagraph) => void,
): Promise<HpeParagraph> => {
  await customElements.whenDefined("hpe-paragraph");

  const paragraph = document.createElement("hpe-paragraph") as HpeParagraph;
  paragraph.textContent = "Paragraph text";
  setup?.(paragraph);

  document.body.appendChild(paragraph);
  await paragraph.updateComplete;

  return paragraph;
};

afterEach(() => {
  document.body.innerHTML = "";
});

describe("hpe-paragraph", () => {
  describe("size property", () => {
    it("uses md size by default", async () => {
      const paragraph = await renderParagraph();

      expect(paragraph.size).toBe("md");
    });

    it("reflects configured size to the attribute", async () => {
      const paragraph = await renderParagraph((element) => {
        element.size = "sm";
      });

      expect(paragraph.getAttribute("size")).toBe("sm");
    });

    it("applies the size class to the rendered paragraph", async () => {
      const paragraph = await renderParagraph((element) => {
        element.size = "disclaimer";
      });

      const paragraphElement = paragraph.shadowRoot?.querySelector("p");
      expect(paragraphElement?.className).toContain("size-disclaimer");
    });
  });

  describe("as property", () => {
    it("renders a p by default", async () => {
      const paragraph = await renderParagraph();

      expect(paragraph.shadowRoot?.querySelector("p")).not.toBeNull();
    });

    it("renders a span when as is span", async () => {
      const paragraph = await renderParagraph((element) => {
        element.as = "span";
      });

      const paragraphElement = paragraph.shadowRoot?.querySelector("span");
      expect(paragraphElement?.className).toContain("size-md");
    });

    it("renders a div when as is div", async () => {
      const paragraph = await renderParagraph((element) => {
        element.as = "div";
        element.size = "lg";
      });

      const paragraphElement = paragraph.shadowRoot?.querySelector("div");
      expect(paragraphElement?.className).toContain("size-lg");
    });

    it("reflects as to the attribute", async () => {
      const paragraph = await renderParagraph((element) => {
        element.as = "span";
      });

      expect(paragraph.getAttribute("as")).toBe("span");
    });
  });

  describe("slot and part contract", () => {
    it("renders slot content", async () => {
      const paragraph = await renderParagraph();
      const slot = paragraph.shadowRoot?.querySelector("slot") as
        | HTMLSlotElement
        | undefined;
      const assignedElements = slot?.assignedElements({ flatten: true }) ?? [];

      expect(assignedElements).toHaveLength(0);
      expect(paragraph.textContent).toBe("Paragraph text");
    });

    it("exposes the paragraph part", async () => {
      const paragraph = await renderParagraph();
      const paragraphElement = paragraph.shadowRoot?.querySelector("p");

      expect(paragraphElement?.getAttribute("part")).toBe("paragraph");
    });
  });
});
