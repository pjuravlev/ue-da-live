import { css } from "lit";
export const styles = css `
  :host {
    display: block;
    width: 100%;
    --hpe-stack-gap-xs: var(--hpe-web-spacing-xsmall, 1rem);
    --hpe-stack-gap-sm: var(--hpe-web-spacing-small, 1.5rem);
    --hpe-stack-gap-md: var(--hpe-web-spacing-medium, 2rem);
    --hpe-stack-gap-lg: var(--hpe-web-spacing-large, 2.5rem);
  }

  .stack {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    box-sizing: border-box;
    gap: var(--hpe-stack-gap-xs);
  }

  :host([gap="sm"]) .stack {
    gap: var(--hpe-stack-gap-sm);
  }

  :host([gap="md"]) .stack {
    gap: var(--hpe-stack-gap-md);
  }

  :host([gap="lg"]) .stack {
    gap: var(--hpe-stack-gap-lg);
  }
`;
//# sourceMappingURL=hpe-x-stack.styles.js.map