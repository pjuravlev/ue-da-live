import { LitElement, html, nothing } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { styles } from "./hpe-carousel.styles.js";

/**
 * A reusable carousel element that displays slotted slides with optional
 * previous and next navigation controls.
 *
 * @tag hpe-carousel
 * @summary Displays slotted content as horizontally scrollable slides with circular navigation controls.
 *
 * @attr {number} visible-slides - Number of visible slides at once.
 * @attr {boolean} show-controls - Whether navigation controls are shown.
 * @attr {boolean} show-slide-count - Whether to render the slide count label alongside controls.
 *
 * @fires hpe-carousel-change - Dispatched when the current slide or page count changes.
 *
 * @slot - Carousel slide content.
 *
 * @csspart container - The outer carousel wrapper.
 * @csspart slides - The slide viewport and track wrapper.
 * @csspart controls - The navigation controls wrapper.
 * @csspart prev-button - The previous navigation button.
 * @csspart next-button - The next navigation button.
 */
@customElement("hpe-carousel")
export class HpeCarousel extends LitElement {
  static override styles = styles;

  @property({ type: Number, reflect: true, attribute: "visible-slides" })
  visibleSlides = 1;

  @property({ type: Boolean, reflect: true, attribute: "show-controls" })
  showControls = true;

  @property({ type: Boolean, reflect: true, attribute: "show-slide-count" })
  showSlideCount = false;

  @state()
  private currentIndex = 0;

  @state()
  private totalSlides = 0;

  @query(".slides")
  private slidesElement!: HTMLElement;

  get currentSlideIndex() {
    return this.currentIndex;
  }

  get pageCount() {
    return this.totalPages;
  }

  override firstUpdated() {
    this.syncSlides();
    this.updateSlideWidth();
  }

  override updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("visibleSlides")) {
      this.currentIndex = 0;
      this.updateSlideWidth();
      this.goTo(0);
    }
  }

  private get totalPages() {
    return Math.max(this.totalSlides - this.visibleSlides + 1, 1);
  }

  private syncSlides() {
    const slot = this.renderRoot.querySelector("slot");
    if (!slot) {
      return;
    }

    this.totalSlides = slot.assignedElements({ flatten: true }).length;
    this.currentIndex = Math.min(this.currentIndex, this.totalPages - 1);
    this.notifyStateChange();
  }

  private updateSlideWidth() {
    const safeVisibleSlides = Math.max(1, this.visibleSlides);
    const gapCount = safeVisibleSlides - 1;

    this.style.setProperty(
      "--_hpe-carousel-slide-width",
      `calc((100% - (var(--hpe-carousel-slide-gap, 0px) * ${gapCount})) / ${safeVisibleSlides})`,
    );
  }

  goTo(index: number) {
    const clampedIndex = Math.max(0, Math.min(index, this.totalPages - 1));
    this.currentIndex = clampedIndex;

    const slot = this.renderRoot.querySelector("slot");
    if (!slot || !this.slidesElement) {
      return;
    }

    const slides = slot.assignedElements({ flatten: true });
    const targetSlide = slides[clampedIndex] as HTMLElement | undefined;

    if (targetSlide) {
      this.slidesElement.scrollTo({
        left: targetSlide.offsetLeft,
        behavior: "smooth",
      });
    }

    this.notifyStateChange();
  }

  goToPrevious() {
    this.goTo(this.currentIndex - 1);
  }

  goToNext() {
    this.goTo(this.currentIndex + 1);
  }

  private handleSlotChange() {
    this.syncSlides();
    this.updateSlideWidth();
  }

  private notifyStateChange() {
    this.dispatchEvent(
      new CustomEvent("hpe-carousel-change", {
        detail: {
          currentIndex: this.currentIndex,
          totalSlides: this.totalSlides,
          totalPages: this.totalPages,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private renderIcon(direction: "left" | "right") {
    return direction === "left"
      ? html`
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14.5 6.5L9 12l5.5 5.5" />
          </svg>
        `
      : html`
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9.5 6.5L15 12l-5.5 5.5" />
          </svg>
        `;
  }

  override render() {
    const showNavigation =
      this.showControls && this.totalSlides > this.visibleSlides;
    const slideCountText = `Slide ${this.currentIndex + 1} of ${this.totalSlides}`;

    return html`
      <div part="container" class="container">
        <div part="slides" class="slides">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>

        ${showNavigation
          ? html`
              <div part="controls" class="controls">
                <button
                  part="prev-button"
                  class="nav-button"
                  type="button"
                  aria-label="Previous slide"
                  ?disabled=${this.currentIndex === 0}
                  @click=${this.goToPrevious}
                >
                  ${this.renderIcon("left")}
                </button>

                <button
                  part="next-button"
                  class="nav-button"
                  type="button"
                  aria-label="Next slide"
                  ?disabled=${this.currentIndex >= this.totalPages - 1}
                  @click=${this.goToNext}
                >
                  ${this.renderIcon("right")}
                </button>

                ${this.showSlideCount
                  ? html`
                      <span part="slide-count" class="slide-count"
                        >${slideCountText}</span
                      >
                    `
                  : nothing}
              </div>
            `
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-carousel": HpeCarousel;
  }
}
