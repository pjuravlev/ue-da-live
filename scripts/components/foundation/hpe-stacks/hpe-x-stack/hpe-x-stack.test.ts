import { afterEach, describe, expect, it } from "vitest";
import type { HpeXStack } from "./hpe-x-stack.js";
import "./hpe-x-stack.js";

const renderXStack = async (
  setup?: (stack: HpeXStack) => void,
): Promise<HpeXStack> => {
  await customElements.whenDefined("hpe-x-stack");

  const stack = document.createElement("hpe-x-stack") as HpeXStack;
  setup?.(stack);

  document.body.appendChild(stack);
  await stack.updateComplete;

  return stack;
};

afterEach(() => {
  document.body.innerHTML = "";
});

describe("hpe-x-stack", () => {
  describe("gap property", () => {
    it("uses xs gap by default", async () => {
      const stack = await renderXStack();

      expect(stack.gap).toBe("xs");
    });

    it("reflects configured gap to the attribute", async () => {
      const stack = await renderXStack((element) => {
        element.gap = "lg";
      });

      expect(stack.getAttribute("gap")).toBe("lg");
    });
  });

  describe("slot and part contract", () => {
    it("renders default slot content", async () => {
      const stack = await renderXStack((element) => {
        const content = document.createElement("span");
        content.textContent = "Item";
        element.appendChild(content);
      });

      const slot = stack.shadowRoot?.querySelector("slot") as
        | HTMLSlotElement
        | undefined;
      const assignedElements = slot?.assignedElements({ flatten: true }) ?? [];

      expect(assignedElements).toHaveLength(1);
      expect((assignedElements[0] as HTMLElement).textContent).toBe("Item");
    });

    it("exposes the stack part", async () => {
      const stack = await renderXStack();

      const stackElement = stack.shadowRoot?.querySelector(
        "[part='stack']",
      ) as HTMLElement | null;

      expect(stackElement).not.toBeNull();
    });
  });
});
