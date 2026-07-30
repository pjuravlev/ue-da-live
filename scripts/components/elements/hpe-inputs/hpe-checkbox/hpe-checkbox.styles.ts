import { css } from "lit";

export const styles = css`
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

  .checkbox-group {
    position: relative;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  .checkbox-input {
    position: absolute;
    inset: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    margin: 0;
    z-index: 1;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--hpe-web-color-background-default, #ffffff);
    border: 1px solid var(--hpe-web-color-border-default, #b1b9be);
    border-radius: var(--checkbox-default-medium-control-borderradius, 6px);
    pointer-events: none;
    box-sizing: border-box;
    transition:
      background-color 150ms ease,
      border-color 150ms ease;
  }

  .checkmark svg {
    width: 16px;
    height: 16px;
    opacity: 0;
  }

  .checkmark path {
    fill: none;
    stroke: var(--hpe-web-color-text-on-strong, #ffffff);
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.75;
  }

  .checkbox-input:checked ~ .checkmark {
    background-color: var(--hpe-web-color-background-primary, #01a982);
    border-color: var(--hpe-web-color-border-selected, #006750);
  }

  .checkbox-input:checked ~ .checkmark svg {
    opacity: 1;
  }

  .container:hover .checkbox-input:not(:disabled):checked ~ .checkmark {
    background-color: var(--hpe-web-color-background-primary-strong, #068667);
    border-color: var(--hpe-web-color-background-primary-strong, #068667);
  }

  .container:hover .checkbox-input:not(:disabled):not(:checked) ~ .checkmark {
    background-color: var(
      --hpe-web-color-background-contrast,
      rgba(0, 0, 0, 0.04)
    );
  }

  .checkbox-input:disabled {
    cursor: not-allowed;
  }

  .checkbox-input:disabled ~ .checkmark {
    background-color: var(--hpe-web-color-background-neutral-weak, #d4d8db);
    border-color: var(--hpe-web-color-border-weak, #d4d8db);
  }

  .checkbox-input:disabled ~ .checkmark path {
    stroke: var(--hpe-web-color-text-disabled, rgba(0, 0, 0, 0.24));
  }

  .checkbox-input:focus-visible ~ .checkmark {
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

  .checkbox-input:disabled ~ .label {
    cursor: not-allowed;
    color: var(--hpe-web-color-text-disabled, rgba(0, 0, 0, 0.24));
  }
`;
