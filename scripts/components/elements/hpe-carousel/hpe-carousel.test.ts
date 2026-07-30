import { afterEach, describe, expect, it, vi } from "vitest";
import type { HpeCarousel } from "./hpe-carousel.js";
import "./hpe-carousel.js";

const waitForRender = async () => {
  await Promise.resolve();
  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => resolve());
  });
};

const createSlide = (text: string) => {
  const slide = document.createElement("div");
  slide.textContent = text;
  return slide;
};

const renderCarousel = async (
  slideCount = 0,
  setup?: (carousel: HpeCarousel) => void,
): Promise<HpeCarousel> => {
  await customElements.whenDefined("hpe-carousel");

  const carousel = document.createElement("hpe-carousel") as HpeCarousel;
  setup?.(carousel);

  for (let i = 0; i < slideCount; i += 1) {
    carousel.appendChild(createSlide(`Slide ${i + 1}`));
  }

  document.body.appendChild(carousel);
  await carousel.updateComplete;
  await waitForRender();

  return carousel;
};

afterEach(() => {
  document.body.innerHTML = "";
});

describe("hpe-carousel", () => {
  it("derives page count from slides and visibleSlides", async () => {
    const carousel = await renderCarousel(4, (element) => {
      element.visibleSlides = 2;
    });

    expect(carousel.pageCount).toBe(3);
    expect(carousel.currentSlideIndex).toBe(0);
  });

  it("renders navigation controls when more slides than visible slides", async () => {
    const carousel = await renderCarousel(3, (element) => {
      element.visibleSlides = 1;
      element.showControls = true;
    });

    const controls = carousel.shadowRoot?.querySelector('[part="controls"]');
    expect(controls).not.toBeNull();
  });

  it("hides navigation controls when showControls is false", async () => {
    const carousel = await renderCarousel(3, (element) => {
      element.showControls = false;
    });

    const controls = carousel.shadowRoot?.querySelector('[part="controls"]');
    expect(controls).toBeNull();
  });

  it("clamps goTo index and emits change event", async () => {
    const carousel = await renderCarousel(3);
    const onChange = vi.fn();

    carousel.addEventListener("hpe-carousel-change", onChange);

    const slidesContainer = carousel.shadowRoot?.querySelector(
      ".slides",
    ) as HTMLElement;
    const scrollToSpy = vi.fn();
    slidesContainer.scrollTo = scrollToSpy;

    carousel.goTo(99);
    await carousel.updateComplete;

    expect(carousel.currentSlideIndex).toBe(2);
    expect(scrollToSpy).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalled();
  });

  it("renders slide count label when enabled", async () => {
    const carousel = await renderCarousel(3, (element) => {
      element.showSlideCount = true;
    });

    const label = carousel.shadowRoot?.querySelector('[part="slide-count"]');
    expect(label?.textContent?.trim()).toBe("Slide 1 of 3");
  });
});
