import { css } from "lit";
export const styles = css `
  :host {
    display: block;
    width: 100%;
    --hpe-list-item-gap: var(--hpe-web-spacing-small, 1.5rem);
    --hpe-list-gap: var(--hpe-web-spacing-xsmall, 1rem);
    --hpe-list-bullet-color: var(--hpe-web-color-background-primary, #01a982);
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: var(--hpe-list-gap);
    width: 100%;
    box-sizing: border-box;
  }

  ::slotted(hpe-list-item) {
    width: 100%;
  }

  .item {
    position: relative;
    display: block;
    padding-left: var(--hpe-list-item-gap);
    width: 100%;
    box-sizing: border-box;
  }

  .bullet {
    position: absolute;
    left: 0;
    top: 7px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .checkmark {
    width: 16px;
    height: 16px;
    color: var(--hpe-list-bullet-color);
  }

  .checkmark path {
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.75;
  }

  .point {
    width: 7px;
    height: 7px;
    background: var(--hpe-list-bullet-color);
    display: block;
  }

  .text {
    display: block;
    min-width: 0;
  }
`;
//# sourceMappingURL=hpe-list.styles.js.map