import { afterEach, describe, expect, it } from "vitest";
import type { HpeColumns } from "./hpe-columns.js";
import "./hpe-columns.js";

const renderColumns = async (
  setup?: (columns: HpeColumns) => void,
): Promise<HpeColumns> => {
  await customElements.whenDefined("hpe-columns");

  const columns = document.createElement("hpe-columns") as HpeColumns;
  setup?.(columns);

  document.body.appendChild(columns);
  await columns.updateComplete;

  return columns;
};

afterEach(() => {
  document.body.innerHTML = "";
});

describe("hpe-columns", () => {
  describe("properties", () => {
    it("uses the default layout values", async () => {
      const columns = await renderColumns();

      expect(columns.columns).toBe("2");
      expect(columns.orientation).toBe("horizontal");
      expect(columns.order).toBe("default");
    });

    it("reflects configured properties to attributes", async () => {
      const columns = await renderColumns((element) => {
        element.columns = "3";
        element.orientation = "vertical";
        element.order = "reverse";
      });

      expect(columns.getAttribute("columns")).toBe("3");
      expect(columns.getAttribute("orientation")).toBe("vertical");
      expect(columns.getAttribute("order")).toBe("reverse");
    });
  });

  describe("column rendering", () => {
    it("renders two columns by default", async () => {
      const columns = await renderColumns();

      const columnElements = columns.shadowRoot?.querySelectorAll(".column");
      expect(columnElements).toHaveLength(2);
    });

    it("renders five columns when columns is set to 5", async () => {
      const columns = await renderColumns((element) => {
        element.columns = "5";
      });

      const columnElements = columns.shadowRoot?.querySelectorAll(".column");
      expect(columnElements).toHaveLength(5);
    });

    it("renders two columns for ratio layouts", async () => {
      const columns = await renderColumns((element) => {
        element.columns = "40:60";
      });

      const columnElements = columns.shadowRoot?.querySelectorAll(".column");
      expect(columnElements).toHaveLength(2);
    });
  });

  describe("slot and part contract", () => {
    it("keeps the expected named slots for each rendered column", async () => {
      const columns = await renderColumns((element) => {
        element.columns = "3";
      });

      const slotNames = Array.from(
        columns.shadowRoot?.querySelectorAll("slot") ?? [],
      ).map((slotElement) => slotElement.getAttribute("name"));

      expect(slotNames).toEqual(["column-1", "column-2", "column-3"]);
    });

    it("exposes columns and column parts", async () => {
      const columns = await renderColumns();

      const container = columns.shadowRoot?.querySelector(
        "[part='columns']",
      ) as HTMLElement | null;
      const firstColumn = columns.shadowRoot?.querySelector(
        "[part='column']",
      ) as HTMLElement | null;

      expect(container).not.toBeNull();
      expect(firstColumn).not.toBeNull();
    });
  });
});
