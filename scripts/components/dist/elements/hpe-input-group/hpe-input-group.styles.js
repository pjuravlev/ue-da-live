import { css } from "lit";
export const styles = css `
  :host {
    --input-group-horizontal-spacing: var(--hpe-web-spacing-large);
    --input-group-vertical-spacing: var(--hpe-web-spacing-xsmall);
    display: contents;
  }

  .input-group {
    display: flex;
  }

  :host([orientation="horizontal"]) .input-group {
    flex-direction: row;
    gap: var(--input-group-horizontal-spacing);
    flex-wrap: wrap;
    align-items: center;
    width: max-content;
  }

  :host([orientation="vertical"]) .input-group {
    flex-direction: column;
    gap: var(--input-group-vertical-spacing);
    align-items: flex-start;
    width: max-content;
  }
`;
//# sourceMappingURL=hpe-input-group.styles.js.map