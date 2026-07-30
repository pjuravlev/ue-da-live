import { afterEach, describe, expect, it } from "vitest";
import type { HpeYStack } from "./hpe-y-stack.js";
import "./hpe-y-stack.js";

const renderYStack = async (
  setup?: (stack: HpeYStack) => void,
): Promise<HpeYStack> => {
  await customElements.whenDefined("hpe-y-stack");

  const stack = document.createElement("hpe-y-stack") as HpeYStack;
  setup?.(stack);

  document.body.appendChild(stack);
  await stack.updateComplete;

  return stack;
};

afterEach(() => {
  document.body.innerHTML = "";
});

describe("hpe-y-stack", () => {
  describe("gap property", () => {
    it("uses xs gap by default", async () => {
      const stack = await renderYStack();

      expect(stack.gap).toBe("xs");
    });

    it("reflects configured gap to the attribute", async () => {
      const stack = await renderYStack((element) => {
        element.gap = "md";
      });

      expect(stack.getAttribute("gap")).toBe("md");
    });
  });

  describe("slot and part contract", () => {
    it("renders default slot content", async () => {
      const stack = await renderYStack((element) => {
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
      const stack = await renderYStack();

      const stackElement = stack.shadowRoot?.querySelector(
        "[part='stack']",
      ) as HTMLElement | null;

      expect(stackElement).not.toBeNull();
    });
  });
});
