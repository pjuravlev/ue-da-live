import { css } from "lit";
export const styles = css `
  :host {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: var(--hpe-web-spacing-small);
    font-family: var(--hpe-web-base-font-family-primary);
  }

  .quote-sign {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    inline-size: 28.608px;
    block-size: 22px;
    color: var(--hpe-web-color-text-primary);
  }

  .quote-sign svg {
    display: block;
    inline-size: 28.608px;
    block-size: 22px;
  }

  .quote-body {
    display: flex;
    flex-direction: column;
    gap: var(--hpe-web-spacing-small);
    flex: 1;
    min-width: 0;
  }

  /* ── Quote text ──────────────────────────────────── */

  hpe-paragraph.quote-text {
    margin: 0;
    --hpe-paragraph-color: var(--hpe-web-color-text-default);
  }

  /* ── Attribution ─────────────────────────────────── */

  .attribution {
    display: flex;
    flex-direction: column;
  }

  hpe-heading.attribution-name {
    margin: 0;
    --hpe-heading-color: var(--hpe-web-color-text-strong);
  }

  hpe-paragraph.attribution-role {
    margin: 0;
    --hpe-paragraph-color: var(--hpe-web-color-text-default);
  }
`;
//# sourceMappingURL=hpe-pull-quote.styles.js.map