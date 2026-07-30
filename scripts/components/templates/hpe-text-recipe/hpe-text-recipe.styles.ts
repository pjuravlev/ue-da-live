import { css } from "lit";

export const styles = css`
  :host {
    display: block;
    width: 100%;
    max-width: var(--hpe-text-recipe-max-width, 23.25rem);
  }

  .recipe {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: var(--hpe-text-recipe-stack-gap, 2rem);
  }

  .body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: var(--hpe-text-recipe-copy-gap, 1rem);
  }

  .body,
  .disclaimer,
  .actions {
    width: 100%;
  }

  .actions {
    display: flex;
    align-items: center;
  }

  .actions hpe-button {
    width: auto;
  }

  :host([format="h2"]) {
    --hpe-text-recipe-stack-gap: 2rem;
    --hpe-text-recipe-copy-gap: 1rem;
  }

  :host([format="h3"]) {
    --hpe-text-recipe-stack-gap: 2rem;
    --hpe-text-recipe-copy-gap: 0.75rem;
  }

  :host([format="h4"]) {
    --hpe-text-recipe-stack-gap: 1.5rem;
    --hpe-text-recipe-copy-gap: 0.75rem;
  }

  :host([format="h5"]) {
    --hpe-text-recipe-stack-gap: 1.5rem;
    --hpe-text-recipe-copy-gap: 0.5rem;
  }
`;
