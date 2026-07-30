import { afterEach, describe, expect, it } from "vitest";
import type { HpeHorizontalRule } from "./hpe-horizontal-rule.js";
import "./hpe-horizontal-rule.js";

afterEach(() => {
  document.body.innerHTML = "";
});

describe("hpe-horizontal-rule", () => {
  it("renders an hr element with the rule part", async () => {
    await customElements.whenDefined("hpe-horizontal-rule");

    const rule = document.createElement(
      "hpe-horizontal-rule",
    ) as HpeHorizontalRule;
    document.body.appendChild(rule);
    await rule.updateComplete;

    const hr = rule.shadowRoot?.querySelector("hr");

    expect(hr).not.toBeNull();
    expect(hr?.getAttribute("part")).toBe("rule");
    expect(hr?.className).toBe("rule");
  });
});
