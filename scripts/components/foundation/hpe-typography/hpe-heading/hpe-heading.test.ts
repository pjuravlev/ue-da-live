import { afterEach, describe, expect, it } from "vitest";
import type { HpeHeading } from "./hpe-heading.js";
import "./hpe-heading.js";

const renderHeading = async (
  setup?: (heading: HpeHeading) => void,
): Promise<HpeHeading> => {
  await customElements.whenDefined("hpe-heading");

  const heading = document.createElement("hpe-heading") as HpeHeading;
  heading.textContent = "Test Heading";
  setup?.(heading);

  document.body.appendChild(heading);
  await heading.updateComplete;

  return heading;
};

const getHeadingElement = (
  heading: HpeHeading,
  selector: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span",
) => heading.shadowRoot?.querySelector(selector) as HTMLElement | null;

afterEach(() => {
  document.body.innerHTML = "";
});

describe("hpe-heading", () => {
  describe("level property", () => {
    it("renders h2 by default", async () => {
      const heading = await renderHeading();

      const h2 = getHeadingElement(heading, "h2");
      expect(h2).not.toBeNull();
      expect(heading.textContent?.trim()).toBe("Test Heading");
    });

    it("renders h1 when level is set to h1", async () => {
      const heading = await renderHeading((element) => {
        element.level = "h1";
      });

      const h1 = getHeadingElement(heading, "h1");
      expect(h1).not.toBeNull();
    });

    it("renders h3 when level is set to h3", async () => {
      const heading = await renderHeading((element) => {
        element.level = "h3";
      });

      const h3 = getHeadingElement(heading, "h3");
      expect(h3).not.toBeNull();
    });

    it("renders h4 when level is set to h4", async () => {
      const heading = await renderHeading((element) => {
        element.level = "h4";
      });

      const h4 = getHeadingElement(heading, "h4");
      expect(h4).not.toBeNull();
    });

    it("renders h5 when level is set to h5", async () => {
      const heading = await renderHeading((element) => {
        element.level = "h5";
      });

      const h5 = getHeadingElement(heading, "h5");
      expect(h5).not.toBeNull();
    });

    it("renders h6 when level is set to h6", async () => {
      const heading = await renderHeading((element) => {
        element.level = "h6";
      });

      const h6 = getHeadingElement(heading, "h6");
      expect(h6).not.toBeNull();
    });

    it("reflects level attribute to the DOM", async () => {
      const heading = await renderHeading((element) => {
        element.level = "h3";
      });

      expect(heading.getAttribute("level")).toBe("h3");
    });
  });

  describe("size property", () => {
    it("uses auto size by default", async () => {
      const heading = await renderHeading();

      expect(heading.size).toBe("auto");
    });

    it("applies display size class when size is display", async () => {
      const heading = await renderHeading((element) => {
        element.size = "display";
      });

      const h2 = getHeadingElement(heading, "h2");
      expect(h2?.className).toContain("default-h1-large");
    });

    it("applies xl size class when size is xl", async () => {
      const heading = await renderHeading((element) => {
        element.size = "xl";
      });

      const h2 = getHeadingElement(heading, "h2");
      expect(h2?.className).toContain("default-h1");
    });

    it("applies lg size class when size is lg", async () => {
      const heading = await renderHeading((element) => {
        element.size = "lg";
      });

      const h2 = getHeadingElement(heading, "h2");
      expect(h2?.className).toContain("default-h2");
    });

    it("applies md size class when size is md", async () => {
      const heading = await renderHeading((element) => {
        element.size = "md";
      });

      const h2 = getHeadingElement(heading, "h2");
      expect(h2?.className).toContain("default-h3");
    });

    it("applies sm size class when size is sm", async () => {
      const heading = await renderHeading((element) => {
        element.size = "sm";
      });

      const h2 = getHeadingElement(heading, "h2");
      expect(h2?.className).toContain("default-h4");
    });

    it("applies xs size class when size is xs", async () => {
      const heading = await renderHeading((element) => {
        element.size = "xs";
      });

      const h2 = getHeadingElement(heading, "h2");
      expect(h2?.className).toContain("default-h5");
    });

    it("reflects size attribute to the DOM", async () => {
      const heading = await renderHeading((element) => {
        element.size = "lg";
      });

      expect(heading.getAttribute("size")).toBe("lg");
    });
  });

  describe("slot content", () => {
    it("renders slot content", async () => {
      const heading = await renderHeading();
      const h2 = getHeadingElement(heading, "h2");

      expect(h2).not.toBeNull();
      expect(heading.textContent?.trim()).toBe("Test Heading");
    });

    it("renders HTML content from slot", async () => {
      await customElements.whenDefined("hpe-heading");

      const heading = document.createElement("hpe-heading") as HpeHeading;
      const span = document.createElement("span");
      span.textContent = "Styled Text";
      heading.appendChild(span);

      document.body.appendChild(heading);
      await heading.updateComplete;

      const slotContent = heading.shadowRoot?.querySelector("slot");
      const assignedElements =
        slotContent?.assignedElements({ flatten: true }) ?? [];

      expect(assignedElements.length).toBeGreaterThan(0);
      expect((assignedElements[0] as HTMLElement).textContent).toBe(
        "Styled Text",
      );
    });
  });

  describe("part attribute", () => {
    it("exposes heading part for styling", async () => {
      const heading = await renderHeading();
      const h2 = getHeadingElement(heading, "h2");

      expect(h2?.getAttribute("part")).toBe("heading");
    });
  });

  describe("size and level interaction", () => {
    it("respects level when size is auto", async () => {
      const heading = await renderHeading((element) => {
        element.level = "h4";
        element.size = "auto";
      });

      const h4 = getHeadingElement(heading, "h4");
      expect(h4).not.toBeNull();
      expect(h4?.className).toContain("default-h4");
    });

    it("uses size-based scale when size is specified", async () => {
      const heading = await renderHeading((element) => {
        element.level = "h4";
        element.size = "lg";
      });

      const h4 = getHeadingElement(heading, "h4");
      expect(h4?.className).toContain("default-h2");
    });

    it("uses level for semantic HTML even when size overrides scale", async () => {
      const heading = await renderHeading((element) => {
        element.level = "h1";
        element.size = "xs";
      });

      const h1 = getHeadingElement(heading, "h1");
      expect(h1).not.toBeNull();
      expect(h1?.className).toContain("default-h5");
    });
  });

  describe("as property", () => {
    it("uses semantic heading HTML by default", async () => {
      const heading = await renderHeading((element) => {
        element.level = "h4";
      });

      expect(getHeadingElement(heading, "h4")).not.toBeNull();
      expect(getHeadingElement(heading, "span")).toBeNull();
    });

    it("renders a span when as is span", async () => {
      const heading = await renderHeading((element) => {
        element.level = "h5";
        element.as = "span";
      });

      const span = getHeadingElement(heading, "span");
      expect(span).not.toBeNull();
      expect(span?.className).toContain("default-h5");
    });

    it("renders a div when as is div", async () => {
      const heading = await renderHeading((element) => {
        element.level = "h3";
        element.as = "div";
      });

      const div = getHeadingElement(heading, "div");
      expect(div).not.toBeNull();
      expect(div?.className).toContain("default-h3");
    });

    it("reflects as attribute to the DOM", async () => {
      const heading = await renderHeading((element) => {
        element.as = "span";
      });

      expect(heading.getAttribute("as")).toBe("span");
    });
  });
});
