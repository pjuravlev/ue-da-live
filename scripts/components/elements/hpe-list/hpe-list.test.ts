import { afterEach, describe, expect, it } from "vitest";
import type { HpeList, HpeListItem } from "./hpe-list.js";
import "./hpe-list.js";

const waitForRender = async () => {
  await Promise.resolve();
  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => resolve());
  });
};

afterEach(() => {
  document.body.innerHTML = "";
});

describe("hpe-list-item", () => {
  it("renders checkmark marker by default", async () => {
    await customElements.whenDefined("hpe-list-item");

    const item = document.createElement("hpe-list-item") as HpeListItem;
    item.textContent = "First item";
    document.body.appendChild(item);
    await item.updateComplete;

    expect(item.shadowRoot?.querySelector('[part="checkmark"]')).not.toBeNull();
    expect(item.shadowRoot?.querySelector('[part="point"]')).toBeNull();
  });

  it("renders point marker when bulletType is bullet-point", async () => {
    const item = document.createElement("hpe-list-item") as HpeListItem;
    item.bulletType = "bullet-point";
    document.body.appendChild(item);
    await item.updateComplete;

    expect(item.shadowRoot?.querySelector('[part="checkmark"]')).toBeNull();
    expect(item.shadowRoot?.querySelector('[part="point"]')).not.toBeNull();
  });
});

describe("hpe-list", () => {
  const createItem = (
    text: string,
    bulletType?: "checkmark" | "bullet-point",
  ) => {
    const item = document.createElement("hpe-list-item") as HpeListItem;
    item.textContent = text;
    if (bulletType) {
      item.bulletType = bulletType;
    }
    return item;
  };

  it("syncs child bullet type when bulletType is checkmark or bullet-point", async () => {
    await customElements.whenDefined("hpe-list");

    const list = document.createElement("hpe-list") as HpeList;
    const first = createItem("First");
    const second = createItem("Second");
    list.append(first, second);

    document.body.appendChild(list);
    await list.updateComplete;
    await waitForRender();

    list.bulletType = "bullet-point";
    await list.updateComplete;
    await first.updateComplete;
    await second.updateComplete;

    expect(first.bulletType).toBe("bullet-point");
    expect(second.bulletType).toBe("bullet-point");
  });

  it("does not override child bullet types when list bulletType is mixed", async () => {
    const list = document.createElement("hpe-list") as HpeList;
    list.bulletType = "mixed";

    const first = createItem("First", "checkmark");
    const second = createItem("Second", "bullet-point");
    list.append(first, second);

    document.body.appendChild(list);
    await list.updateComplete;
    await waitForRender();

    expect(first.bulletType).toBe("checkmark");
    expect(second.bulletType).toBe("bullet-point");
  });

  it("applies list bullet type to items added after initial render", async () => {
    const list = document.createElement("hpe-list") as HpeList;
    list.bulletType = "bullet-point";

    document.body.appendChild(list);
    await list.updateComplete;

    const lateItem = createItem("Added later");
    list.appendChild(lateItem);

    await list.updateComplete;
    await lateItem.updateComplete;
    await waitForRender();

    expect(lateItem.bulletType).toBe("bullet-point");
  });
});
