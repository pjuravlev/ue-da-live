import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
  }

  .section {
    background-color: var(--hpe-web-color-background-default);
    padding-block: var(--hpe-web-spacing-xxlarge);
    padding-inline: var(--hpe-web-spacing-4xlarge);
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .row {
    display: grid;
    grid-template-columns: var(--hpe-agenda-row-time-column, 20%) 1fr;
    gap: var(--hpe-web-spacing-xxlarge);
    align-items: center;
    padding: var(--hpe-web-spacing-medium);
    background-color: var(--hpe-web-color-background-default);
  }

  @media (max-width: 767px) {
    .row {
      grid-template-columns: 1fr;
    }
  }

  :host([tone='sunken']) .row {
    background-color: var(--hpe-web-color-background-back);
  }

  :host([bordered]) .row {
    border-top: 1px solid var(--hpe-web-color-border-weak);
  }

  .time,
  .content {
    display: flex;
    flex-direction: column;
    color: var(--hpe-agenda-row-text-color, var(--hpe-web-color-text-default));
    font-size: var(--hpe-web-paragraph-body-copy-font-size);
    font-weight: var(--hpe-web-paragraph-body-copy-font-weight);
    letter-spacing: var(--hpe-web-paragraph-body-copy-letter-spacing);
    line-height: var(--hpe-web-paragraph-body-copy-line-height);
  }

  .time {
    gap: var(--hpe-web-spacing-none);
  }

  .content {
    gap: var(--hpe-web-spacing-xxsmall);
  }

  ::slotted([slot='title']) {
    margin: 0;
    color: var(--hpe-agenda-row-text-color, var(--hpe-web-color-text-default));
    font-size: var(--hpe-web-paragraph-body-copy-font-size);
    font-weight: 700;
    letter-spacing: var(--hpe-web-paragraph-body-copy-letter-spacing);
    line-height: var(--hpe-web-paragraph-body-copy-line-height);
  }

  ::slotted([slot='description']) {
    margin: 0;
    color: var(--hpe-agenda-row-text-color, var(--hpe-web-color-text-default));
    font-size: var(--hpe-web-paragraph-body-copy-font-size);
    font-weight: var(--hpe-web-paragraph-body-copy-font-weight);
    letter-spacing: var(--hpe-web-paragraph-body-copy-letter-spacing);
    line-height: var(--hpe-web-paragraph-body-copy-line-height);
  }

  ::slotted(hpe-agenda-row) {
    width: 100%;
  }
`;