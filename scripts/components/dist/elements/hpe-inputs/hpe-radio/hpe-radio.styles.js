import { css } from "lit";
export const styles = css `
  :host {
    display: inline-flex;
    max-width: 100%;
  }

  .container {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-xxsmall, 12px);
    align-items: center;
    width: fit-content;
    cursor: pointer;
  }

  .radio-group {
    position: relative;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  .radio-input {
    position: absolute;
    inset: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    margin: 0;
    z-index: 1;
  }

  .radio {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    border: 1px solid var(--hpe-web-color-border-default, #b1b9be);
    border-radius: 50%;
    background-color: var(--hpe-web-color-background-default, #ffffff);
    pointer-events: none;
    box-sizing: border-box;
    transition:
      background-color 150ms ease,
      border-color 150ms ease;
  }

  .radio::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--hpe-web-color-background-primary, #01a982);
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  .radio-input:checked ~ .radio::after {
    opacity: 1;
  }

  .radio-input:checked ~ .radio {
    border-color: var(--hpe-web-color-border-selected, #006750);
  }

  .container:hover .radio-input:not(:disabled):checked ~ .radio::after {
    background-color: var(--hpe-web-color-background-primary-strong, #068667);
  }

  .container:hover .radio-input:not(:disabled):not(:checked) ~ .radio {
    background-color: var(
      --hpe-web-color-background-contrast,
      rgba(0, 0, 0, 0.04)
    );
  }

  .radio-input:disabled {
    cursor: not-allowed;
  }

  .radio-input:disabled ~ .radio {
    background-color: var(--hpe-web-color-background-neutral-weak, #d4d8db);
    border-color: var(--hpe-web-color-border-weak, #d4d8db);
  }

  .radio-input:disabled ~ .radio::after {
    opacity: 1;
    background-color: var(--hpe-web-color-text-disabled, rgba(0, 0, 0, 0.24));
  }

  .radio-input:focus-visible ~ .radio {
    outline: 2px solid var(--hpe-web-color-border-selected, #006750);
    outline-offset: 2px;
  }

  .label {
    font-family: var(--heading-font, "HPE_Graphik", sans-serif);
    font-size: var(--paragraph-small-body-copy-fontsize, 16px);
    font-weight: var(--paragraph-small-body-copy-fontweight, 400);
    line-height: var(--paragraph-small-body-copy-lineheight, 24px);
    letter-spacing: var(--paragraph-small-body-copy-letterspacing, 0);
    color: var(--hpe-web-color-text-default, #3e4550);
    cursor: pointer;
    margin: 0;
    user-select: none;
  }

  .radio-input:disabled ~ .label {
    cursor: not-allowed;
    color: var(--hpe-web-color-text-disabled, rgba(0, 0, 0, 0.24));
  }
`;
//# sourceMappingURL=hpe-radio.styles.js.map