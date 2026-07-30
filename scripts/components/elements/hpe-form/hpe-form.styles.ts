import { css } from "lit";

export const styles = css`
  :host {
    display: block;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: var(--hpe-web-spacing-xlarge);
    width: 100%;
    padding: var(--hpe-web-spacing-xlarge);
    box-sizing: border-box;
    border: 1px solid var(--hpe-web-color-border-weak);
    background: var(--hpe-web-color-background-card);
  }

  .header,
  .fields,
  .actions {
    display: flex;
    width: 100%;
  }

  .header,
  .fields {
    flex-direction: column;
  }

  .header {
    gap: var(--hpe-web-spacing-xsmall);
  }

  .fields {
    gap: var(--hpe-web-spacing-medium);
  }

  .actions {
    align-items: center;
  }

  hpe-heading,
  hpe-paragraph {
    margin: 0;
  }

  ::slotted(*) {
    box-sizing: border-box;
  }

  ::slotted(hpe-input),
  ::slotted(hpe-input-group),
  ::slotted(hpe-select),
  ::slotted(hpe-textarea) {
    display: block;
    width: 100%;
    max-width: none;
  }

  @media (max-width: 767px) {
    .container {
      gap: var(--hpe-web-spacing-large);
      padding: var(--hpe-web-spacing-medium);
    }
  }
`;
