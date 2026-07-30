import { afterEach, describe, expect, it } from "vitest";
import type { HpeCondensedHeading } from "./hpe-condensed-heading.js";
import "./hpe-condensed-heading.js";

const renderCondensedHeading = async (
  setup?: (heading: HpeCondensedHeading) => void,
): Promise<HpeCondensedHeading> => {
  await customElements.whenDefined("hpe-condensed-heading");

  const heading = document.createElement(
    "hpe-condensed-heading",
  ) as HpeCondensedHeading;
  heading.textContent = "Condensed Heading";
  setup?.(heading);

  document.body.appendChild(heading);
  await heading.updateComplete;

  return heading;
};

afterEach(() => {
  document.body.innerHTML = "";
});

describe("hpe-condensed-heading", () => {
  describe("level and semantic rendering", () => {
    it("renders h1 by default", async () => {
      const heading = await renderCondensedHeading();

      const h1 = heading.shadowRoot?.querySelector("h1");
      const slotElement = heading.shadowRoot?.querySelector("slot") as
        | HTMLSlotElement
        | undefined;
      const assignedNodes =
        slotElement
          ?.assignedNodes({ flatten: true })
          .filter((node) => node.nodeType === Node.TEXT_NODE) ?? [];
      const slottedText = assignedNodes
        .map((node) => node.textContent ?? "")
        .join("")
        .trim();

      expect(h1).not.toBeNull();
      expect(slottedText).toBe("Condensed Heading");
    });

    it("renders h2 when level is h2", async () => {
      const heading = await renderCondensedHeading((element) => {
        element.level = "h2";
      });

      const h2 = heading.shadowRoot?.querySelector("h2");
      expect(h2).not.toBeNull();
      expect(heading.getAttribute("level")).toBe("h2");
    });
  });

  describe("as property", () => {
    it("uses semantic heading HTML by default", async () => {
      const heading = await renderCondensedHeading((element) => {
        element.level = "h1";
      });

      expect(heading.shadowRoot?.querySelector("h1")).not.toBeNull();
      expect(heading.shadowRoot?.querySelector("span")).toBeNull();
    });

    it("renders a span when as is span", async () => {
      const heading = await renderCondensedHeading((element) => {
        element.level = "h2";
        element.as = "span";
      });

      const span = heading.shadowRoot?.querySelector("span");
      expect(span).not.toBeNull();
      expect(span?.className).toContain("lg-regular");
    });

    it("renders a div when as is div", async () => {
      const heading = await renderCondensedHeading((element) => {
        element.level = "h1";
        element.size = "display";
        element.weight = "bold";
        element.as = "div";
      });

      const div = heading.shadowRoot?.querySelector("div");
      expect(div).not.toBeNull();
      expect(div?.className).toContain("display-bold");
    });

    it("reflects as attribute to the DOM", async () => {
      const heading = await renderCondensedHeading((element) => {
        element.as = "span";
      });

      expect(heading.getAttribute("as")).toBe("span");
    });
  });

  describe("size and weight class mapping", () => {
    it("uses xl-regular class by default", async () => {
      const heading = await renderCondensedHeading();
      const h1 = heading.shadowRoot?.querySelector("h1");

      expect(h1?.className).toContain("xl-regular");
    });

    it("uses display-bold class for h1 display bold", async () => {
      const heading = await renderCondensedHeading((element) => {
        element.level = "h1";
        element.size = "display";
        element.weight = "bold";
      });

      const h1 = heading.shadowRoot?.querySelector("h1");
      expect(h1?.className).toContain("display-bold");
      expect(heading.getAttribute("size")).toBe("display");
      expect(heading.getAttribute("weight")).toBe("bold");
    });

    it("uses lg-light class for h2 regardless of display size", async () => {
      const heading = await renderCondensedHeading((element) => {
        element.level = "h2";
        element.size = "display";
        element.weight = "light";
      });

      const h2 = heading.shadowRoot?.querySelector("h2");
      expect(h2?.className).toContain("lg-light");
    });
  });

  describe("part and slot contract", () => {
    it("exposes heading part", async () => {
      const heading = await renderCondensedHeading();
      const headingElement = heading.shadowRoot?.querySelector("h1");

      expect(headingElement?.getAttribute("part")).toBe("heading");
    });

    it("supports HTML content through the default slot", async () => {
      await customElements.whenDefined("hpe-condensed-heading");

      const heading = document.createElement(
        "hpe-condensed-heading",
      ) as HpeCondensedHeading;
      const span = document.createElement("span");
      span.textContent = "Styled Condensed";
      heading.appendChild(span);

      document.body.appendChild(heading);
      await heading.updateComplete;

      const slotElement = heading.shadowRoot?.querySelector("slot");
      const assignedElements =
        slotElement?.assignedElements({ flatten: true }) ?? [];

      expect(assignedElements).toHaveLength(1);
      expect((assignedElements[0] as HTMLElement).textContent).toBe(
        "Styled Condensed",
      );
    });
  });
});
