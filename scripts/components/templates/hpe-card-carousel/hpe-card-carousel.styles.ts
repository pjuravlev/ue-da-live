import { css } from "lit";

export const styles = css`
  :host {
    display: block;
    width: 100%;
  }

  .section {
    width: 100%;
  }

  .intro {
    --hpe-text-recipe-max-width: 100%;
  }

  .carousel {
    --hpe-carousel-slide-gap: var(--hpe-web-spacing-large, 40px);
    --hpe-carousel-stack-gap: var(--hpe-web-spacing-large, 40px);
    --hpe-carousel-nav-size: 56px;
    --_hpe-carousel-slide-width: 370px;
  }

  ::slotted(*) {
    min-width: 0;
  }

  @media (max-width: 1599px) {
    .carousel {
      --_hpe-carousel-slide-width: calc(
        (100% - (var(--hpe-web-spacing-large, 40px) * 2)) / 3
      );
    }
  }

  @media (max-width: 1023px) {
    .carousel {
      --_hpe-carousel-slide-width: calc(
        (100% - var(--hpe-web-spacing-large, 40px)) / 2
      );
    }
  }

  @media (max-width: 767px) {
    .carousel {
      --_hpe-carousel-slide-width: 100%;
      --hpe-carousel-nav-size: 40px;
      --hpe-carousel-controls-gap: 12px;
      --hpe-carousel-stack-gap: var(--hpe-web-spacing-medium, 32px);
      --hpe-carousel-slide-gap: var(--hpe-web-spacing-medium, 32px);
    }
  }
`;
