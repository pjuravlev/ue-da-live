import { css } from "lit";
export const styles = css `
  :host {
    --button-group-spacing: var(--spacing-medium, 16px);
    display: contents;
  }

  .button-group {
    display: flex;
    gap: var(--button-group-spacing);
  }

  /* Horizontal layout (default) */
  :host([orientation="horizontal"]) .button-group {
    flex-direction: row;
    align-items: center;
    width: max-content;
  }

  /* Vertical layout */
  :host([orientation="vertical"]) .button-group {
    flex-direction: column;
    align-items: flex-start;
    width: max-content;
  }
`;
//# sourceMappingURL=hpe-button-group.styles.js.map