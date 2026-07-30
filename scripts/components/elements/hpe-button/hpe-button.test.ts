import { afterEach, describe, expect, it } from "vitest";
import type { HpeButton } from "./hpe-button.js";
import "./hpe-button.js";

const createIcon = (slotName: "start-icon" | "end-icon") => {
  const icon = document.createElement("span");
  icon.slot = slotName;
  icon.setAttribute("data-test-icon", slotName);
  icon.textContent = slotName;
  return icon;
};

const renderButton = async (
  setup?: (button: HpeButton) => void,
): Promise<HpeButton> => {
  await customElements.whenDefined("hpe-button");

  const button = document.createElement("hpe-button") as HpeButton;
  button.textContent = "Button";
  setup?.(button);

  document.body.appendChild(button);
  await button.updateComplete;

  return button;
};

const getIconContainer = (
  button: HpeButton,
  partName: "start-icon" | "end-icon",
) =>
  button.shadowRoot?.querySelector(
    `[part~="${partName}"]`,
  ) as HTMLElement | null;

const getAssignedIcons = (
  button: HpeButton,
  slotName: "start-icon" | "end-icon",
) =>
  button.shadowRoot
    ?.querySelector(`slot[name="${slotName}"]`)
    ?.assignedElements({ flatten: true }) ?? [];

const waitForSlotUpdate = async (button: HpeButton) => {
  await Promise.resolve();
  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => resolve());
  });
  await button.updateComplete;
};

afterEach(() => {
  document.body.innerHTML = "";
});

describe("hpe-button icon behavior", () => {
  it("renders the default trailing arrow by default", async () => {
    const button = await renderButton();

    const endIcon = getIconContainer(button, "end-icon");

    expect(endIcon).not.toBeNull();
    expect(endIcon?.hidden).toBe(false);
  });

  it("does not render a visible start icon by default", async () => {
    const button = await renderButton();

    const startIcon = getIconContainer(button, "start-icon");

    expect(startIcon).not.toBeNull();
    expect(startIcon?.hidden).toBe(true);
  });

  it("renders the fallback start arrow when showLeftIcon is true", async () => {
    const button = await renderButton((element) => {
      element.showLeftIcon = true;
      element.showRightIcon = false;
    });

    const startIcon = getIconContainer(button, "start-icon");
    const endIcon = getIconContainer(button, "end-icon");

    expect(startIcon?.hidden).toBe(false);
    expect(endIcon?.hidden).toBe(true);
  });

  it("renders a custom start icon without enabling fallback icons", async () => {
    const button = await renderButton((element) => {
      element.showLeftIcon = false;
      element.showRightIcon = false;
      element.appendChild(createIcon("start-icon"));
    });

    const startIcon = getIconContainer(button, "start-icon");

    expect(startIcon?.hidden).toBe(false);
    expect(getAssignedIcons(button, "start-icon")).toHaveLength(1);
  });

  it("renders a custom end icon without enabling fallback icons", async () => {
    const button = await renderButton((element) => {
      element.showLeftIcon = false;
      element.showRightIcon = false;
      element.appendChild(createIcon("end-icon"));
    });

    const endIcon = getIconContainer(button, "end-icon");

    expect(endIcon?.hidden).toBe(false);
    expect(getAssignedIcons(button, "end-icon")).toHaveLength(1);
  });

  it("does not render icon containers when both icon flags are false", async () => {
    const button = await renderButton((element) => {
      element.showLeftIcon = false;
      element.showRightIcon = false;
    });

    expect(getIconContainer(button, "start-icon")?.hidden).toBe(true);
    expect(getIconContainer(button, "end-icon")?.hidden).toBe(true);
  });

  it("updates when a custom icon is added after initial render", async () => {
    const button = await renderButton((element) => {
      element.showLeftIcon = false;
      element.showRightIcon = false;
    });

    button.appendChild(createIcon("start-icon"));
    await waitForSlotUpdate(button);

    const startIcon = getIconContainer(button, "start-icon");

    expect(startIcon?.hidden).toBe(false);
    expect(getAssignedIcons(button, "start-icon")).toHaveLength(1);
  });
});
