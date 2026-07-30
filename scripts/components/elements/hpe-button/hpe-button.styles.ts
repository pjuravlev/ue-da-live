import { css } from "lit";

export const styles = css`
  :host {
    --hpe-button-font-family: var(--hpe-web-base-font-family-primary);
    --hpe-button-transition: all 0.2s ease-in-out;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--hpe-button-font-family);
    border: none;
    cursor: pointer;
    transition: var(--hpe-button-transition);
    white-space: nowrap;
    padding: 0;
  }

  .button:disabled {
    cursor: not-allowed;
  }

  :host([type="primary"]) .button {
    font-weight: var(--hpe-web-button-primary-rest-font-weight);
  }

  :host([type="primary"]) .button:not(:disabled):hover {
    font-weight: var(--hpe-web-button-primary-hover-font-weight);
  }

  :host([type="primary"]) .button:disabled {
    font-weight: var(--hpe-web-button-primary-disabled-rest-font-weight);
  }

  :host([type="secondary"]) .button {
    font-weight: var(--hpe-web-button-secondary-rest-font-weight);
  }

  :host([type="secondary"]) .button:not(:disabled):hover {
    font-weight: var(--hpe-web-button-secondary-hover-font-weight);
  }

  :host([type="secondary"]) .button:disabled {
    font-weight: var(--hpe-web-button-secondary-disabled-rest-font-weight);
  }

  :host([type="link-primary"]) .button {
    font-weight: var(--hpe-web-button-link-primary-rest-font-weight);
  }

  :host([type="link-primary"]) .button:not(:disabled):hover {
    font-weight: var(--hpe-web-button-link-primary-hover-font-weight);
  }

  :host([type="link-primary"]) .button:disabled {
    font-weight: var(--hpe-web-button-link-primary-disabled-rest-font-weight);
  }

  :host([type="link-neutral"]) .button {
    font-weight: var(--hpe-web-button-link-neutral-rest-font-weight);
  }

  :host([type="link-neutral"]) .button:not(:disabled):hover {
    font-weight: var(--hpe-web-button-link-neutral-hover-font-weight);
  }

  :host([type="link-neutral"]) .button:disabled {
    font-weight: var(--hpe-web-button-link-neutral-disabled-rest-font-weight);
  }

  .label {
    display: inline-block;
  }

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .icon[hidden] {
    display: none;
  }

  .icon svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  /* PRIMARY BUTTONS */
  :host([type="primary"][size="small"]) .button {
    min-height: var(--hpe-web-button-primary-small-min-height);
    padding: var(--hpe-web-button-primary-small-padding-y)
      var(--hpe-web-button-primary-small-padding-x);
    gap: var(--hpe-web-button-primary-small-gap-x);
    font-size: var(--hpe-web-button-primary-small-font-size);
    line-height: var(--hpe-web-button-primary-small-line-height);
    border-radius: var(--hpe-web-button-primary-small-border-radius);
    background-color: var(--hpe-web-button-primary-rest-background);
    color: var(--hpe-web-button-primary-rest-text-color);
  }

  :host([type="primary"][size="small"]) .button:not(:disabled):hover {
    background-color: var(--hpe-web-button-primary-hover-background);
    color: var(--hpe-web-button-primary-hover-text-color);
  }

  :host([type="primary"][size="small"]) .button:disabled {
    background-color: var(--hpe-web-button-primary-disabled-rest-background);
    color: var(--hpe-web-button-primary-disabled-rest-text-color);
  }

  :host([type="primary"][size="default"]) .button {
    min-height: var(--hpe-web-button-primary-medium-min-height);
    padding: var(--hpe-web-button-primary-medium-padding-y)
      var(--hpe-web-button-primary-medium-padding-x);
    gap: var(--hpe-web-button-primary-medium-gap-x);
    font-size: var(--hpe-web-button-primary-medium-font-size);
    line-height: var(--hpe-web-button-primary-medium-line-height);
    border-radius: var(--hpe-web-button-primary-medium-border-radius);
    background-color: var(--hpe-web-button-primary-rest-background);
    color: var(--hpe-web-button-primary-rest-text-color);
  }

  :host([type="primary"][size="default"]) .button:not(:disabled):hover {
    background-color: var(--hpe-web-button-primary-hover-background);
    color: var(--hpe-web-button-primary-hover-text-color);
  }

  :host([type="primary"][size="default"]) .button:disabled {
    background-color: var(--hpe-web-button-primary-disabled-rest-background);
    color: var(--hpe-web-button-primary-disabled-rest-text-color);
  }

  :host([type="primary"][size="large"]) .button {
    min-height: var(--hpe-web-button-primary-large-min-height);
    padding: var(--hpe-web-button-primary-large-padding-y)
      var(--hpe-web-button-primary-large-padding-x);
    gap: var(--hpe-web-button-primary-large-gap-x);
    font-size: var(--hpe-web-button-primary-large-font-size);
    line-height: var(--hpe-web-button-primary-large-line-height);
    border-radius: var(--hpe-web-button-primary-large-border-radius);
    background-color: var(--hpe-web-button-primary-rest-background);
    color: var(--hpe-web-button-primary-rest-text-color);
  }

  :host([type="primary"][size="large"]) .button:not(:disabled):hover {
    background-color: var(--hpe-web-button-primary-hover-background);
    color: var(--hpe-web-button-primary-hover-text-color);
  }

  :host([type="primary"][size="large"]) .button:disabled {
    background-color: var(--hpe-web-button-primary-disabled-rest-background);
    color: var(--hpe-web-button-primary-disabled-rest-text-color);
  }

  /* SECONDARY BUTTONS */
  :host([type="secondary"][size="small"]) .button {
    min-height: var(--hpe-web-button-secondary-small-min-height);
    padding: var(--hpe-web-button-secondary-small-padding-y)
      var(--hpe-web-button-secondary-small-padding-x);
    gap: var(--hpe-web-button-secondary-small-gap-x);
    font-size: var(--hpe-web-button-secondary-small-font-size);
    line-height: var(--hpe-web-button-secondary-small-line-height);
    border-radius: var(--hpe-web-button-secondary-small-border-radius);
    background-color: var(--hpe-web-button-secondary-rest-background);
    color: var(--hpe-web-button-secondary-rest-text-color);
    border: var(--hpe-web-button-secondary-small-border-width) solid
      var(--hpe-web-button-secondary-rest-border-color);
  }

  :host([type="secondary"][size="small"]) .button:not(:disabled):hover {
    background-color: var(--hpe-web-button-secondary-hover-background);
    border-color: var(--hpe-web-button-secondary-hover-border-color);
    color: var(--hpe-web-button-secondary-hover-text-color);
  }

  :host([type="secondary"][size="small"]) .button:disabled {
    background-color: var(--hpe-web-button-secondary-disabled-rest-background);
    border-color: var(--hpe-web-button-secondary-disabled-rest-border-color);
    color: var(--hpe-web-button-secondary-disabled-rest-text-color);
  }

  :host([type="secondary"][size="default"]) .button {
    min-height: var(--hpe-web-button-secondary-medium-min-height);
    padding: var(--hpe-web-button-secondary-medium-padding-y)
      var(--hpe-web-button-secondary-medium-padding-x);
    gap: var(--hpe-web-button-secondary-medium-gap-x);
    font-size: var(--hpe-web-button-secondary-medium-font-size);
    line-height: var(--hpe-web-button-secondary-medium-line-height);
    border-radius: var(--hpe-web-button-secondary-medium-border-radius);
    background-color: var(--hpe-web-button-secondary-rest-background);
    color: var(--hpe-web-button-secondary-rest-text-color);
    border: var(--hpe-web-button-secondary-medium-border-width) solid
      var(--hpe-web-button-secondary-rest-border-color);
  }

  :host([type="secondary"][size="default"]) .button:not(:disabled):hover {
    background-color: var(--hpe-web-button-secondary-hover-background);
    border-color: var(--hpe-web-button-secondary-hover-border-color);
    color: var(--hpe-web-button-secondary-hover-text-color);
  }

  :host([type="secondary"][size="default"]) .button:disabled {
    background-color: var(--hpe-web-button-secondary-disabled-rest-background);
    border-color: var(--hpe-web-button-secondary-disabled-rest-border-color);
    color: var(--hpe-web-button-secondary-disabled-rest-text-color);
  }

  :host([type="secondary"][size="large"]) .button {
    min-height: var(--hpe-web-button-secondary-large-min-height);
    padding: var(--hpe-web-button-secondary-large-padding-y)
      var(--hpe-web-button-secondary-large-padding-x);
    gap: var(--hpe-web-button-secondary-large-gap-x);
    font-size: var(--hpe-web-button-secondary-large-font-size);
    line-height: var(--hpe-web-button-secondary-large-line-height);
    border-radius: var(--hpe-web-button-secondary-large-border-radius);
    background-color: var(--hpe-web-button-secondary-rest-background);
    color: var(--hpe-web-button-secondary-rest-text-color);
    border: var(--hpe-web-button-secondary-large-border-width) solid
      var(--hpe-web-button-secondary-rest-border-color);
  }

  :host([type="secondary"][size="large"]) .button:not(:disabled):hover {
    background-color: var(--hpe-web-button-secondary-hover-background);
    border-color: var(--hpe-web-button-secondary-hover-border-color);
    color: var(--hpe-web-button-secondary-hover-text-color);
  }

  :host([type="secondary"][size="large"]) .button:disabled {
    background-color: var(--hpe-web-button-secondary-disabled-rest-background);
    border-color: var(--hpe-web-button-secondary-disabled-rest-border-color);
    color: var(--hpe-web-button-secondary-disabled-rest-text-color);
  }

  /* LINK PRIMARY BUTTONS */
  :host([type="link-primary"][size="small"]) .button {
    background: var(--hpe-web-button-link-primary-rest-background);
    border: none;
    min-height: var(--hpe-web-button-link-small-min-height);
    padding: var(--hpe-web-button-link-small-padding-y)
      var(--hpe-web-button-link-small-padding-x);
    gap: var(--hpe-web-button-link-small-gap-x);
    font-size: var(--hpe-web-button-link-small-font-size);
    line-height: var(--hpe-web-button-link-small-line-height);
    border-radius: var(--hpe-web-button-link-small-border-radius);
    color: var(--hpe-web-button-link-primary-rest-text-color);
  }

  :host([type="link-primary"][size="small"]) .button:not(:disabled):hover {
    background: var(--hpe-web-button-link-primary-hover-background);
    color: var(--hpe-web-button-link-primary-hover-text-color);
  }

  :host([type="link-primary"][size="small"]) .button:disabled {
    background: var(--hpe-web-button-link-primary-disabled-rest-background);
    color: var(--hpe-web-button-link-primary-disabled-rest-text-color);
  }

  :host([type="link-primary"][size="default"]) .button {
    background: var(--hpe-web-button-link-primary-rest-background);
    border: none;
    min-height: var(--hpe-web-button-link-medium-min-height);
    padding: var(--hpe-web-button-link-medium-padding-y)
      var(--hpe-web-button-link-medium-padding-x);
    gap: var(--hpe-web-button-link-medium-gap-x);
    font-size: var(--hpe-web-button-link-medium-font-size);
    line-height: var(--hpe-web-button-link-medium-line-height);
    border-radius: var(--hpe-web-button-link-medium-border-radius);
    color: var(--hpe-web-button-link-primary-rest-text-color);
  }

  :host([type="link-primary"][size="default"]) .button:not(:disabled):hover {
    background: var(--hpe-web-button-link-primary-hover-background);
    color: var(--hpe-web-button-link-primary-hover-text-color);
  }

  :host([type="link-primary"][size="default"]) .button:disabled {
    background: var(--hpe-web-button-link-primary-disabled-rest-background);
    color: var(--hpe-web-button-link-primary-disabled-rest-text-color);
  }

  :host([type="link-primary"][size="large"]) .button {
    background: var(--hpe-web-button-link-primary-rest-background);
    border: none;
    min-height: var(--hpe-web-button-link-large-min-height);
    padding: var(--hpe-web-button-link-large-padding-y)
      var(--hpe-web-button-link-large-padding-x);
    gap: var(--hpe-web-button-link-large-gap-x);
    font-size: var(--hpe-web-button-link-large-font-size);
    line-height: var(--hpe-web-button-link-large-line-height);
    border-radius: var(--hpe-web-button-link-large-border-radius);
    color: var(--hpe-web-button-link-primary-rest-text-color);
  }

  :host([type="link-primary"][size="large"]) .button:not(:disabled):hover {
    background: var(--hpe-web-button-link-primary-hover-background);
    color: var(--hpe-web-button-link-primary-hover-text-color);
  }

  :host([type="link-primary"][size="large"]) .button:disabled {
    background: var(--hpe-web-button-link-primary-disabled-rest-background);
    color: var(--hpe-web-button-link-primary-disabled-rest-text-color);
  }

  /* LINK NEUTRAL BUTTONS */
  :host([type="link-neutral"][size="small"]) .button {
    background: var(--hpe-web-button-link-neutral-rest-background);
    border: none;
    min-height: var(--hpe-web-button-link-small-min-height);
    padding: var(--hpe-web-button-link-small-padding-y)
      var(--hpe-web-button-link-small-padding-x);
    gap: var(--hpe-web-button-link-small-gap-x);
    font-size: var(--hpe-web-button-link-small-font-size);
    line-height: var(--hpe-web-button-link-small-line-height);
    border-radius: var(--hpe-web-button-link-small-border-radius);
    color: var(--hpe-web-button-link-neutral-rest-text-color);
  }

  :host([type="link-neutral"][size="small"]) .button:not(:disabled):hover {
    background: var(--hpe-web-button-link-neutral-hover-background);
    color: var(--hpe-web-button-link-neutral-hover-text-color);
  }

  :host([type="link-neutral"][size="small"]) .button:disabled {
    background: var(--hpe-web-button-link-neutral-disabled-rest-background);
    color: var(--hpe-web-button-link-neutral-disabled-rest-text-color);
  }

  :host([type="link-neutral"][size="default"]) .button {
    background: var(--hpe-web-button-link-neutral-rest-background);
    border: none;
    min-height: var(--hpe-web-button-link-medium-min-height);
    padding: var(--hpe-web-button-link-medium-padding-y)
      var(--hpe-web-button-link-medium-padding-x);
    gap: var(--hpe-web-button-link-medium-gap-x);
    font-size: var(--hpe-web-button-link-medium-font-size);
    line-height: var(--hpe-web-button-link-medium-line-height);
    border-radius: var(--hpe-web-button-link-medium-border-radius);
    color: var(--hpe-web-button-link-neutral-rest-text-color);
  }

  :host([type="link-neutral"][size="default"]) .button:not(:disabled):hover {
    background: var(--hpe-web-button-link-neutral-hover-background);
    color: var(--hpe-web-button-link-neutral-hover-text-color);
  }

  :host([type="link-neutral"][size="default"]) .button:disabled {
    background: var(--hpe-web-button-link-neutral-disabled-rest-background);
    color: var(--hpe-web-button-link-neutral-disabled-rest-text-color);
  }

  :host([type="link-neutral"][size="large"]) .button {
    background: var(--hpe-web-button-link-neutral-rest-background);
    border: none;
    min-height: var(--hpe-web-button-link-large-min-height);
    padding: var(--hpe-web-button-link-large-padding-y)
      var(--hpe-web-button-link-large-padding-x);
    gap: var(--hpe-web-button-link-large-gap-x);
    font-size: var(--hpe-web-button-link-large-font-size);
    line-height: var(--hpe-web-button-link-large-line-height);
    border-radius: var(--hpe-web-button-link-large-border-radius);
    color: var(--hpe-web-button-link-neutral-rest-text-color);
  }

  :host([type="link-neutral"][size="large"]) .button:not(:disabled):hover {
    background: var(--hpe-web-button-link-neutral-hover-background);
    color: var(--hpe-web-button-link-neutral-hover-text-color);
  }

  :host([type="link-neutral"][size="large"]) .button:disabled {
    background: var(--hpe-web-button-link-neutral-disabled-rest-background);
    color: var(--hpe-web-button-link-neutral-disabled-rest-text-color);
  }

  /* ICON SIZING */
  :host([type="primary"][size="small"]) .icon {
    width: var(--hpe-web-button-primary-small-icon-width);
    height: var(--hpe-web-multi-mode-button-primary-small-icon-height);
  }

  :host([type="primary"][size="default"]) .icon {
    width: var(--hpe-web-button-primary-medium-icon-width);
    height: var(--hpe-web-multi-mode-button-primary-medium-icon-height);
  }

  :host([type="primary"][size="large"]) .icon {
    width: var(--hpe-web-button-primary-large-icon-width);
    height: var(--hpe-web-multi-mode-button-primary-large-icon-height);
  }

  :host([type="secondary"][size="small"]) .icon {
    width: var(--hpe-web-multi-mode-button-secondary-small-icon-width);
    height: var(--hpe-web-button-secondary-small-icon-height);
  }

  :host([type="secondary"][size="default"]) .icon {
    width: var(--hpe-web-multi-mode-button-secondary-medium-icon-width);
    height: var(--hpe-web-button-secondary-medium-icon-height);
  }

  :host([type="secondary"][size="large"]) .icon {
    width: var(--hpe-web-multi-mode-button-secondary-large-icon-width);
    height: var(--hpe-web-button-secondary-large-icon-height);
  }

  :host([type="link-primary"][size="small"]) .icon,
  :host([type="link-neutral"][size="small"]) .icon {
    width: var(--hpe-web-multi-mode-button-link-small-icon-width);
    height: var(--hpe-web-multi-mode-button-link-small-icon-height);
  }

  :host([type="link-primary"][size="default"]) .icon,
  :host([type="link-neutral"][size="default"]) .icon {
    width: var(--hpe-web-multi-mode-button-link-medium-icon-width);
    height: var(--hpe-web-multi-mode-button-link-medium-icon-height);
  }

  :host([type="link-primary"][size="large"]) .icon,
  :host([type="link-neutral"][size="large"]) .icon {
    width: var(--hpe-web-multi-mode-button-link-large-icon-width);
    height: var(--hpe-web-multi-mode-button-link-large-icon-height);
  }
`;
