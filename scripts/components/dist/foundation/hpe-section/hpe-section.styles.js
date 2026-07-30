import { css } from "lit";
export const styles = css `
  :host {
    display: block;
    width: 100%;
    background: var(--hpe-web-color-background-default);
    --hpe-section-inline-padding: var(--hpe-web-spacing-4xlarge);
    --hpe-section-block-padding: var(--hpe-web-spacing-xxlarge);
    --hpe-section-max-width: 1600px;
  }

  .section {
    display: flex;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    padding: var(--hpe-section-block-padding) var(--hpe-section-inline-padding);
    background: var(--hpe-web-color-background-default);
  }

  .container {
    width: 100%;
    max-width: var(--hpe-section-max-width);
    display: flex;
    flex-direction: column;
    gap: var(--hpe-web-spacing-large);
  }

  :host([padding="none"]) .section {
    padding: 0;
  }

  :host([padding="none"]) .container {
    max-width: none;
  }

  :host([padding="top"]) .section {
    padding-bottom: 0;
  }

  :host([padding="bottom"]) .section {
    padding-top: 0;
  }

  :host([padding="left-right-only"]) .section {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
//# sourceMappingURL=hpe-section.styles.js.map