import { afterEach, describe, expect, it } from "vitest";
import type { HpeTab, HpeTabGroup, HpeTabPanel } from "./hpe-tab-group.js";
import "./hpe-tab-group.js";

const waitForRender = async () => {
  await Promise.resolve();
  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => resolve());
  });
};

const createTab = (label: string, disabled = false) => {
  const tab = document.createElement("hpe-tab") as HpeTab;
  tab.slot = "tab";
  tab.textContent = label;
  tab.disabled = disabled;
  return tab;
};

const createPanel = (content: string) => {
  const panel = document.createElement("hpe-tab-panel") as HpeTabPanel;
  panel.slot = "panel";
  panel.textContent = content;
  return panel;
};

const renderTabGroup = async (
  setup?: (group: HpeTabGroup) => void,
): Promise<{ group: HpeTabGroup; tabs: HpeTab[]; panels: HpeTabPanel[] }> => {
  await customElements.whenDefined("hpe-tab-group");

  const group = document.createElement("hpe-tab-group") as HpeTabGroup;
  setup?.(group);

  const tabs = [createTab("Tab 1"), createTab("Tab 2"), createTab("Tab 3")];
  const panels = [
    createPanel("Panel 1"),
    createPanel("Panel 2"),
    createPanel("Panel 3"),
  ];

  group.append(...tabs, ...panels);
  document.body.appendChild(group);

  await group.updateComplete;
  await Promise.all(tabs.map((tab) => tab.updateComplete));
  await Promise.all(panels.map((panel) => panel.updateComplete));
  await waitForRender();

  return { group, tabs, panels };
};

afterEach(() => {
  document.body.innerHTML = "";
});

describe("hpe-tab-group", () => {
  it("activates the first tab and panel by default", async () => {
    const { group, tabs, panels } = await renderTabGroup();

    expect(group.activeTabIndex).toBe(0);
    expect(tabs[0].active).toBe(true);
    expect(tabs[1].active).toBe(false);
    expect(panels[0].active).toBe(true);
    expect(panels[1].active).toBe(false);
  });

  it("updates active tab and panel when a tab is clicked", async () => {
    const { group, tabs, panels } = await renderTabGroup();

    const secondButton = tabs[1].shadowRoot?.querySelector(
      "button",
    ) as HTMLButtonElement;
    secondButton.click();

    await group.updateComplete;
    await tabs[0].updateComplete;
    await tabs[1].updateComplete;
    await panels[0].updateComplete;
    await panels[1].updateComplete;

    expect(group.activeTabIndex).toBe(1);
    expect(tabs[0].active).toBe(false);
    expect(tabs[1].active).toBe(true);
    expect(panels[0].active).toBe(false);
    expect(panels[1].active).toBe(true);
  });

  it("propagates activation mode and orientation to child tabs", async () => {
    const { tabs } = await renderTabGroup((group) => {
      group.activationMode = "manual";
      group.orientation = "vertical";
    });

    tabs.forEach((tab) => {
      expect(tab.activationMode).toBe("manual");
      expect(tab.orientation).toBe("vertical");
    });
  });

  it("automatically activates the next tab on ArrowRight in automatic mode", async () => {
    const { group, tabs } = await renderTabGroup((element) => {
      element.activationMode = "automatic";
      element.orientation = "horizontal";
    });

    const firstButton = tabs[0].shadowRoot?.querySelector(
      "button",
    ) as HTMLButtonElement;
    firstButton.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }),
    );

    await group.updateComplete;
    await tabs[0].updateComplete;
    await tabs[1].updateComplete;

    expect(group.activeTabIndex).toBe(1);
    expect(tabs[1].active).toBe(true);
  });

  it("does not auto-activate on ArrowRight in manual mode", async () => {
    const { group, tabs } = await renderTabGroup((element) => {
      element.activationMode = "manual";
      element.orientation = "horizontal";
    });

    const firstButton = tabs[0].shadowRoot?.querySelector(
      "button",
    ) as HTMLButtonElement;
    firstButton.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }),
    );

    await group.updateComplete;
    await tabs[0].updateComplete;
    await tabs[1].updateComplete;

    expect(group.activeTabIndex).toBe(0);
    expect(tabs[0].active).toBe(true);
    expect(tabs[1].active).toBe(false);
  });
});
