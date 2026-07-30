import { css } from "lit";

export const styles = css`
  :host {
    display: block;
    color: var(--hpe-paragraph-color, var(--hpe-web-color-text-default));
    font-family: var(--hpe-paragraph-font-family, "HPE Graphik", sans-serif);
  }

  .paragraph {
    margin: 0;
    color: inherit;
  }

  .size-lg {
    font-size: var(--hpe-web-paragraph-large-body-copy-font-size);
    font-weight: var(--hpe-web-paragraph-large-body-copy-font-weight);
    line-height: var(--hpe-web-paragraph-large-body-copy-line-height);
    letter-spacing: var(--hpe-web-paragraph-large-body-copy-letter-spacing);
  }

  .size-md {
    font-size: var(--hpe-web-paragraph-body-copy-font-size);
    font-weight: var(--hpe-web-paragraph-body-copy-font-weight);
    line-height: var(--hpe-web-paragraph-body-copy-line-height);
    letter-spacing: var(--hpe-web-paragraph-body-copy-letter-spacing);
  }

  .size-sm {
    font-size: var(--hpe-web-paragraph-small-body-copy-font-size);
    font-weight: var(--hpe-web-paragraph-small-body-copy-font-weight);
    line-height: var(--hpe-web-paragraph-small-body-copy-line-height);
    letter-spacing: var(--hpe-web-paragraph-small-body-copy-letter-spacing);
  }

  .size-disclaimer {
    font-size: var(--hpe-web-paragraph-disclaimer-font-size);
    font-weight: var(--hpe-web-paragraph-disclaimer-font-weight);
    line-height: var(--hpe-web-paragraph-disclaimer-line-height);
    letter-spacing: var(--hpe-web-paragraph-disclaimer-letter-spacing);
  }
`;
