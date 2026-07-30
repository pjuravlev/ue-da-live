import { afterEach, describe, expect, it } from "vitest";
import type { HpeAccordion, HpeAccordionItem } from "./hpe-accordion.js";
import "./hpe-accordion.js";

const waitForRender = async () => {
  await Promise.resolve();
  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => resolve());
  });
};

afterEach(() => {
  document.body.innerHTML = "";
});

describe("hpe-accordion-item", () => {
  it("toggles expanded state when clicked outside accordion group", async () => {
    await customElements.whenDefined("hpe-accordion-item");

    const item = document.createElement(
      "hpe-accordion-item",
    ) as HpeAccordionItem;
    document.body.appendChild(item);
    await item.updateComplete;

    const trigger = item.shadowRoot?.querySelector(
      "button",
    ) as HTMLButtonElement;
    trigger.click();
    await item.updateComplete;

    expect(item.expanded).toBe(true);
    expect(trigger.getAttribute("aria-expanded")).toBe("true");
  });

  it("does not toggle expanded state when disabled", async () => {
    const item = document.createElement(
      "hpe-accordion-item",
    ) as HpeAccordionItem;
    item.disabled = true;
    document.body.appendChild(item);
    await item.updateComplete;

    const trigger = item.shadowRoot?.querySelector(
      "button",
    ) as HTMLButtonElement;
    trigger.click();
    await item.updateComplete;

    expect(item.expanded).toBe(false);
  });
});

describe("hpe-accordion", () => {
  const createItem = (label: string, expanded = false) => {
    const item = document.createElement(
      "hpe-accordion-item",
    ) as HpeAccordionItem;
    item.label = label;
    item.expanded = expanded;
    item.textContent = `${label} content`;
    return item;
  };

  it("keeps only one item expanded at a time", async () => {
    await customElements.whenDefined("hpe-accordion");

    const accordion = document.createElement("hpe-accordion") as HpeAccordion;
    const firstItem = createItem("First", true);
    const secondItem = createItem("Second", true);

    accordion.append(firstItem, secondItem);
    document.body.appendChild(accordion);

    await accordion.updateComplete;
    await firstItem.updateComplete;
    await secondItem.updateComplete;
    await waitForRender();

    expect(firstItem.expanded).toBe(true);
    expect(secondItem.expanded).toBe(false);
  });

  it("activates selected item and collapses others", async () => {
    const accordion = document.createElement("hpe-accordion") as HpeAccordion;
    const firstItem = createItem("First", true);
    const secondItem = createItem("Second", false);

    accordion.append(firstItem, secondItem);
    document.body.appendChild(accordion);

    await accordion.updateComplete;
    await firstItem.updateComplete;
    await secondItem.updateComplete;

    const secondTrigger = secondItem.shadowRoot?.querySelector(
      "button",
    ) as HTMLButtonElement;
    secondTrigger.click();

    await accordion.updateComplete;
    await firstItem.updateComplete;
    await secondItem.updateComplete;

    expect(firstItem.expanded).toBe(false);
    expect(secondItem.expanded).toBe(true);
  });
});
