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

  .textarea {
    border: 1px solid var(--hpe-web-color-border-default, #b1b9be);
    outline: none;
    background: transparent;
    font-family: var(--heading-font, "HPE_Graphik", sans-serif);
    font-size: var(--paragraph-small-body-copy-fontsize, 16px);
    font-weight: var(--paragraph-small-body-copy-fontweight, 400);
    line-height: var(--paragraph-small-body-copy-lineheight, 24px);
    letter-spacing: var(--paragraph-small-body-copy-letterspacing, 0);
    color: var(--hpe-web-color-text-default, #3e4550);
    width: 100%;
    min-height: 128px;
    padding: var(--spacing-small, 24px);
    box-sizing: border-box;
    resize: vertical;
    display: block;
  }

  .textarea::placeholder {
    color: var(--hpe-web-color-text-default, #3e4550);
    opacity: 1;
  }

  .textarea:disabled {
    cursor: not-allowed;
  }

  .textarea:focus {
    outline: none;
  }

  :host([state="typing"]) .textarea {
    border-color: var(--hpe-web-color-border-selected, #006750);
  }

  :host([state="complete"]) .textarea {
    border-color: var(--hpe-web-color-border-strong, #535c66);
  }

  :host([state="error"]) .textarea {
    border-color: var(--hpe-web-color-border-critical, #cc1f1a);
  }

  :host([state="error"]) .label-text,
  :host([state="error"]) .required-indicator,
  :host([state="error"]) .textarea,
  :host([state="error"]) .textarea::placeholder,
  :host([state="error"]) .description {
    color: var(--hpe-web-color-text-critical, #cc1f1a);
  }

  .description {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: flex-start;
    width: 100%;
    font-family: var(--heading-font, "HPE_Graphik", sans-serif);
    font-size: var(--paragraph-disclaimer-fontsize, 14px);
    font-weight: var(--paragraph-disclaimer-fontweight, 400);
    line-height: var(--paragraph-disclaimer-lineheight, 20px);
    letter-spacing: var(--paragraph-disclaimer-letterspacing, 0);
    color: var(--hpe-web-color-text-default, #3e4550);
  }

  .description-text {
    flex: 1;
    margin: 0;
    min-height: 20px;
  }

  .char-counter {
    margin: 0;
    white-space: nowrap;
    text-align: right;
  }

  :host([state="typing"]) .textarea,
  :host([state="complete"]) .textarea,
  :host([state="typing"]) .textarea::placeholder,
  :host([state="complete"]) .textarea::placeholder {
    color: var(--hpe-web-color-text-strong, #292d3a);
  }

  :host([state="disabled"]) .textarea {
    border-color: var(--hpe-web-color-border-weak, #d4d8db);
  }

  :host([state="disabled"]) .label-text,
  :host([state="disabled"]) .required-indicator,
  :host([state="disabled"]) .textarea,
  :host([state="disabled"]) .textarea::placeholder,
  :host([state="disabled"]) .description {
    color: var(--hpe-web-color-text-disabled, rgba(0, 0, 0, 0.24));
  }
`;
