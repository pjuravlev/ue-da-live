var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let HpeCarousel = class HpeCarousel extends LitElement {
    constructor() {
        super(...arguments);
        this.visibleSlides = 1;
        this.showControls = true;
        this.showSlideCount = false;
        this.currentIndex = 0;
        this.totalSlides = 0;
    }
    get currentSlideIndex() {
        return this.currentIndex;
    }
    get pageCount() {
        return this.totalPages;
    }
    firstUpdated() {
        this.syncSlides();
        this.updateSlideWidth();
    }
    updated(changedProperties) {
        if (changedProperties.has("visibleSlides")) {
            this.currentIndex = 0;
            this.updateSlideWidth();
            this.goTo(0);
        }
    }
    get totalPages() {
        return Math.max(this.totalSlides - this.visibleSlides + 1, 1);
    }
    syncSlides() {
        const slot = this.renderRoot.querySelector("slot");
        if (!slot) {
            return;
        }
        this.totalSlides = slot.assignedElements({ flatten: true }).length;
        this.currentIndex = Math.min(this.currentIndex, this.totalPages - 1);
        this.notifyStateChange();
    }
    updateSlideWidth() {
        const safeVisibleSlides = Math.max(1, this.visibleSlides);
        const gapCount = safeVisibleSlides - 1;
        this.style.setProperty("--_hpe-carousel-slide-width", `calc((100% - (var(--hpe-carousel-slide-gap, 0px) * ${gapCount})) / ${safeVisibleSlides})`);
    }
    goTo(index) {
        const clampedIndex = Math.max(0, Math.min(index, this.totalPages - 1));
        this.currentIndex = clampedIndex;
        const slot = this.renderRoot.querySelector("slot");
        if (!slot || !this.slidesElement) {
            return;
        }
        const slides = slot.assignedElements({ flatten: true });
        const targetSlide = slides[clampedIndex];
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
    handleSlotChange() {
        this.syncSlides();
        this.updateSlideWidth();
    }
    notifyStateChange() {
        this.dispatchEvent(new CustomEvent("hpe-carousel-change", {
            detail: {
                currentIndex: this.currentIndex,
                totalSlides: this.totalSlides,
                totalPages: this.totalPages,
            },
            bubbles: true,
            composed: true,
        }));
    }
    renderIcon(direction) {
        return direction === "left"
            ? html `
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14.5 6.5L9 12l5.5 5.5" />
          </svg>
        `
            : html `
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9.5 6.5L15 12l-5.5 5.5" />
          </svg>
        `;
    }
    render() {
        const showNavigation = this.showControls && this.totalSlides > this.visibleSlides;
        const slideCountText = `Slide ${this.currentIndex + 1} of ${this.totalSlides}`;
        return html `
      <div part="container" class="container">
        <div part="slides" class="slides">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>

        ${showNavigation
            ? html `
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
                ? html `
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
};
HpeCarousel.styles = styles;
__decorate([
    property({ type: Number, reflect: true, attribute: "visible-slides" })
], HpeCarousel.prototype, "visibleSlides", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: "show-controls" })
], HpeCarousel.prototype, "showControls", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: "show-slide-count" })
], HpeCarousel.prototype, "showSlideCount", void 0);
__decorate([
    state()
], HpeCarousel.prototype, "currentIndex", void 0);
__decorate([
    state()
], HpeCarousel.prototype, "totalSlides", void 0);
__decorate([
    query(".slides")
], HpeCarousel.prototype, "slidesElement", void 0);
HpeCarousel = __decorate([
    customElement("hpe-carousel")
], HpeCarousel);
export { HpeCarousel };
//# sourceMappingURL=hpe-carousel.js.map