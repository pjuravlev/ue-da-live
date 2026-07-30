import { css } from "lit";

export const styles = css`
  :host {
    display: block;
    width: 100%;
    --hpe-carousel-stack-gap: 40px;
    --hpe-carousel-controls-gap: 16px;
    --hpe-carousel-slide-gap: 0px;
    --hpe-carousel-nav-size: 56px;
    --hpe-carousel-nav-rest-background: #535c66;
    --hpe-carousel-nav-disabled-background: #b4b6ba;
    --hpe-carousel-nav-icon-color: #ffffff;
    --hpe-carousel-slide-count-color: #606a70;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--hpe-carousel-stack-gap);
    width: 100%;
  }

  .slides {
    display: flex;
    align-items: center;
    gap: var(--hpe-carousel-slide-gap);
    width: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .slides::-webkit-scrollbar {
    display: none;
  }

  ::slotted(*) {
    flex: 0 0 var(--_hpe-carousel-slide-width, 100%);
    min-width: 0;
    box-sizing: border-box;
  }

  .controls {
    display: flex;
    align-items: center;
    gap: var(--hpe-carousel-controls-gap);
  }

  .slide-count {
    color: var(--hpe-carousel-slide-count-color);
    font-family: var(--heading-font, sans-serif);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    white-space: nowrap;
  }

  .nav-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--hpe-carousel-nav-size);
    height: var(--hpe-carousel-nav-size);
    padding: 0;
    border: none;
    border-radius: 9999px;
    background: var(--hpe-carousel-nav-rest-background);
    color: var(--hpe-carousel-nav-icon-color);
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  .nav-button:hover:not(:disabled) {
    opacity: 0.88;
  }

  .nav-button:disabled {
    background: var(--hpe-carousel-nav-disabled-background);
    cursor: not-allowed;
  }

  .nav-button svg {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  @media (max-width: 766px) {
    :host {
      --hpe-carousel-controls-gap: 12px;
      --hpe-carousel-nav-size: 40px;
    }

    .nav-button svg {
      width: 20px;
      height: 20px;
    }
  }
`;
