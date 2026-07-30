import { afterEach, describe, expect, it } from "vitest";
import type { HpeImage } from "./hpe-image.js";
import "./hpe-image.js";

afterEach(() => {
  document.body.innerHTML = "";
});

describe("hpe-image", () => {
  it("uses default alt and aspect ratio values", async () => {
    await customElements.whenDefined("hpe-image");

    const image = document.createElement("hpe-image") as HpeImage;
    document.body.appendChild(image);
    await image.updateComplete;

    expect(image.alt).toBe("Image");
    expect(image.aspectRatio).toBe("4:3");
    expect(image.getAttribute("aspect-ratio")).toBe("4:3");
  });

  it("renders an img when src is provided", async () => {
    const image = document.createElement("hpe-image") as HpeImage;
    image.src = "https://example.com/image.jpg";
    image.alt = "Demo image";

    document.body.appendChild(image);
    await image.updateComplete;

    const img = image.shadowRoot?.querySelector("img") as HTMLImageElement;

    expect(img).not.toBeNull();
    expect(img.getAttribute("src")).toContain("https://example.com/image.jpg");
    expect(img.getAttribute("alt")).toBe("Demo image");
  });

  it("renders fallback slot content when src is not set", async () => {
    const image = document.createElement("hpe-image") as HpeImage;
    const fallback = document.createElement("span");
    fallback.textContent = "Placeholder";
    image.appendChild(fallback);

    document.body.appendChild(image);
    await image.updateComplete;

    const slot = image.shadowRoot?.querySelector("slot");
    const assigned = (slot as HTMLSlotElement).assignedElements({
      flatten: true,
    });

    expect(slot).not.toBeNull();
    expect(assigned).toHaveLength(1);
    expect(assigned[0].textContent).toBe("Placeholder");
  });
});
