import { LitElement } from "lit";
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
export declare class HpeCarousel extends LitElement {
    static styles: import("lit").CSSResult;
    visibleSlides: number;
    showControls: boolean;
    showSlideCount: boolean;
    private currentIndex;
    private totalSlides;
    private slidesElement;
    get currentSlideIndex(): number;
    get pageCount(): number;
    firstUpdated(): void;
    updated(changedProperties: Map<string, unknown>): void;
    private get totalPages();
    private syncSlides;
    private updateSlideWidth;
    goTo(index: number): void;
    goToPrevious(): void;
    goToNext(): void;
    private handleSlotChange;
    private notifyStateChange;
    private renderIcon;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-carousel": HpeCarousel;
    }
}
//# sourceMappingURL=hpe-carousel.d.ts.map