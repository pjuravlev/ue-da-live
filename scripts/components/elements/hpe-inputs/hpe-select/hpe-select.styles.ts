import { css } from "lit";

export const styles = css`
  :host {
    display: block;
    width: 100%;
    max-width: 352px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3xsmall, 8px);
    align-items: flex-start;
    width: 100%;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: var(--spacing-3xsmall, 8px);
    position: relative;
  }

  .label {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-hair, 1px);
    width: 100%;
  }

  .label-text {
    font-family: var(--heading-font, "HPE_Graphik", sans-serif);
    font-size: var(--paragraph-disclaimer-fontsize, 14px);
    font-weight: var(--paragraph-disclaimer-fontweight, 400);
    line-height: var(--paragraph-disclaimer-lineheight, 20px);
    letter-spacing: var(--paragraph-disclaimer-letterspacing, 0);
    color: var(--hpe-web-color-text-default, #3e4550);
    margin: 0;
  }

  .required-indicator {
    font-family: var(--heading-font, "HPE_Graphik", sans-serif);
    font-size: var(--paragraph-disclaimer-fontsize, 14px);
    font-weight: var(--paragraph-disclaimer-fontweight, 400);
    line-height: var(--paragraph-disclaimer-lineheight, 20px);
    letter-spacing: var(--paragraph-disclaimer-letterspacing, 0);
    color: var(--hpe-web-color-text-critical, #cc1f1a);
    margin: 0;
  }

  .select {
    border: 1px solid var(--hpe-web-color-border-default, #b1b9be);
    outline: none;
    background: transparent;
    font-family: var(--heading-font, "HPE_Graphik", sans-serif);
    font-size: var(--paragraph-small-body-copy-fontsize, 16px);
    font-weight: var(--paragraph-small-body-copy-fontweight, 400);
    line-height: var(--paragraph-small-body-copy-lineheight, 24px);
    letter-spacing: var(--paragraph-small-body-copy-letterspacing, 0);
    color: var(--hpe-web-color-text-default, #3e4550);
    padding: var(--spacing-xxsmall, 12px) var(--spacing-small, 24px);
    padding-right: calc(var(--spacing-small, 24px) + 28px);
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
    min-height: 56px;
    box-sizing: border-box;
    display: block;
  }

  .select:disabled {
    background-color: transparent;
    cursor: not-allowed;
  }

  .select:focus {
    outline: none;
  }

  .icon {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    color: var(--hpe-web-color-text-default, #3e4550);
    pointer-events: none;
    transition: transform 150ms ease;
    position: absolute;
    right: var(--spacing-small, 24px);
    bottom: 20px;
  }

  :host([state="typing"]) .select {
    border-color: var(--hpe-web-color-border-selected, #006750);
  }

  :host([state="complete"]) .select {
    border-color: var(--hpe-web-color-border-strong, #535c66);
  }

  :host([state="error"]) .select {
    border-color: var(--hpe-web-color-border-critical, #cc1f1a);
  }

  :host([state="error"]) .label-text,
  :host([state="error"]) .required-indicator,
  :host([state="error"]) .select,
  :host([state="error"]) .icon,
  :host([state="error"]) .description-text {
    color: var(--hpe-web-color-text-critical, #cc1f1a);
  }

  :host([state="typing"]) .select,
  :host([state="complete"]) .select,
  :host([state="typing"]) .icon,
  :host([state="complete"]) .icon {
    color: var(--hpe-web-color-text-strong, #292d3a);
  }

  :host([state="typing"]) .icon {
    transform: rotate(180deg);
  }

  :host([state="disabled"]) .select {
    border-color: var(--hpe-web-color-border-weak, #d4d8db);
  }

  .description {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .description-text {
    font-family: var(--heading-font, "HPE_Graphik", sans-serif);
    font-size: var(--paragraph-disclaimer-fontsize, 14px);
    font-weight: var(--paragraph-disclaimer-fontweight, 400);
    line-height: var(--paragraph-disclaimer-lineheight, 20px);
    letter-spacing: var(--paragraph-disclaimer-letterspacing, 0);
    color: var(--hpe-web-color-text-default, #3e4550);
    margin: 0;
    white-space: nowrap;
  }

  :host([state="disabled"]) .label-text,
  :host([state="disabled"]) .required-indicator,
  :host([state="disabled"]) .select,
  :host([state="disabled"]) .icon,
  :host([state="disabled"]) .description-text {
    color: var(--hpe-web-color-text-disabled, rgba(0, 0, 0, 0.24));
  }
`;
