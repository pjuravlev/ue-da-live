import { css } from "lit";

export const styles = css`
  :host {
    display: block;
    width: 100%;
  }

  .section {
    width: 100%;
  }

  .grid {
    display: grid;
    gap: var(--hpe-web-spacing-large);
    grid-template-columns: repeat(3, 1fr);
  }

  /* ── Column variants ────────────────────────────────── */

  :host([columns="1"]) .grid {
    grid-template-columns: repeat(1, 1fr);
  }

  :host([columns="2"]) .grid {
    grid-template-columns: repeat(2, 1fr);
  }

  :host([columns="3"]) .grid {
    grid-template-columns: repeat(3, 1fr);
  }

  :host([columns="4"]) .grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .intro {
    --hpe-text-recipe-max-width: 100%;
  }

  /* ── Slotted children ───────────────────────────────── */

  ::slotted(*) {
    width: 100%;
    min-width: 0;
  }

  @media (max-width: 1024px) {
    :host([columns="3"]) .grid,
    :host([columns="4"]) .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 767px) {
    .grid,
    :host([columns="2"]) .grid,
    :host([columns="3"]) .grid,
    :host([columns="4"]) .grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
