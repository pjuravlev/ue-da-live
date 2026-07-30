import { css } from "lit";
export const styles = css `
  :host {
    display: block;
    width: 100%;
    --hpe-accordion-font-family: var(
      --hpe-web-heading-font,
      "HPE Graphik",
      Arial,
      sans-serif
    );
    --hpe-accordion-font-size: var(--hpe-web-heading-h5-medium-font-size);
    --hpe-accordion-line-height: var(--hpe-web-heading-h5-medium-line-height);
    --hpe-accordion-font-weight: var(--hpe-web-heading-h5-medium-font-weight);
    --hpe-accordion-letter-spacing: var(
      --hpe-web-heading-h5-medium-letter-spacing
    );
    --hpe-accordion-label-color: var(--hpe-web-color-text-strong);
    --hpe-accordion-icon-color: var(--hpe-web-color-icon-default);
    --hpe-accordion-border-color: var(--hpe-web-color-border-weak);
    --hpe-accordion-horizontal-padding: var(--hpe-web-spacing-small);
    --hpe-accordion-vertical-padding: var(--hpe-web-spacing-small);
    --hpe-accordion-content-gap: var(--hpe-web-spacing-xxlarge);
    --hpe-accordion-icon-size: 24px;
  }

  .accordion {
    width: 100%;
  }

  .item {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    border-top: 1px solid var(--hpe-accordion-border-color);
  }

  .trigger {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--hpe-accordion-content-gap);
    width: 100%;
    padding: var(--hpe-accordion-vertical-padding)
      var(--hpe-accordion-horizontal-padding);
    background: transparent;
    border: 0;
    appearance: none;
    color: var(--hpe-accordion-label-color);
    cursor: pointer;
    text-align: left;
  }

  .trigger:disabled {
    cursor: not-allowed;
    opacity: 0.64;
  }

  .trigger:focus-visible {
    outline: 2px solid var(--hpe-web-color-border-primary);
    outline-offset: -2px;
  }

  .label {
    flex: 1 1 auto;
    min-width: 0;
    font-family: var(--hpe-accordion-font-family);
    font-size: var(--hpe-accordion-font-size);
    font-weight: var(--hpe-accordion-font-weight);
    line-height: var(--hpe-accordion-line-height);
    letter-spacing: var(--hpe-accordion-letter-spacing);
    color: var(--hpe-accordion-label-color);
  }

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    width: var(--hpe-accordion-icon-size);
    height: var(--hpe-accordion-icon-size);
    color: var(--hpe-accordion-icon-color);
    transition: transform 0.2s ease-in-out;
  }

  :host([expanded]) .icon {
    transform: rotate(180deg);
  }

  .icon svg {
    width: var(--hpe-accordion-icon-size);
    height: var(--hpe-accordion-icon-size);
    display: block;
  }

  .panel {
    padding: var(--hpe-accordion-vertical-padding)
      var(--hpe-accordion-horizontal-padding);
  }

  .panel[hidden] {
    display: none;
  }
`;
//# sourceMappingURL=hpe-accordion.styles.js.map