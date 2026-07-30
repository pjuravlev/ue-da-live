import { css } from "lit";
export const styles = css `
  :host {
    display: block;
    color: var(--hpe-condensed-heading-color, var(--hpe-web-color-text-strong));
    font-family: var(
      --hpe-condensed-heading-font-family,
      var(--hpe-web-base-font-family-condensed),
      "HPE Graphik",
      sans-serif
    );
  }

  .heading {
    margin: 0;
    color: inherit;
    text-transform: uppercase;
  }

  .display-bold {
    font-size: var(--hpe-web-heading-h1-large-condensed-bold-font-size);
    font-weight: var(--hpe-web-heading-h1-large-condensed-bold-font-weight);
    line-height: var(--hpe-web-heading-h1-large-condensed-bold-line-height);
    letter-spacing: var(
      --hpe-web-heading-h1-large-condensed-bold-letter-spacing
    );
  }

  .display-regular {
    font-size: var(--hpe-web-heading-h1-large-condensed-medium-font-size);
    font-weight: var(--hpe-web-heading-h1-large-condensed-medium-font-weight);
    line-height: var(--hpe-web-heading-h1-large-condensed-medium-line-height);
    letter-spacing: var(
      --hpe-web-heading-h1-large-condensed-medium-letter-spacing
    );
  }

  .display-light {
    font-size: var(--hpe-web-heading-h1-large-condensed-medium-font-size);
    font-weight: var(--hpe-web-heading-h1-large-condensed-light-font-weight);
    line-height: var(--hpe-web-heading-h1-large-condensed-medium-line-height);
    letter-spacing: var(
      --hpe-web-heading-h1-large-condensed-medium-letter-spacing
    );
  }

  .xl-bold {
    font-size: var(--hpe-web-heading-h1-condensed-bold-font-size);
    font-weight: var(--hpe-web-heading-h1-condensed-bold-font-weight);
    line-height: var(--hpe-web-heading-h1-condensed-bold-line-height);
    letter-spacing: var(--hpe-web-heading-h1-condensed-bold-letter-spacing);
  }

  .xl-regular {
    font-size: var(--hpe-web-heading-h1-condensed-medium-font-size);
    font-weight: var(--hpe-web-heading-h1-condensed-medium-font-weight);
    line-height: var(--hpe-web-heading-h1-condensed-medium-line-height);
    letter-spacing: var(--hpe-web-heading-h1-condensed-medium-letter-spacing);
  }

  .xl-light {
    font-size: var(--hpe-web-heading-h1-condensed-medium-font-size);
    font-weight: var(--hpe-web-heading-h1-condensed-light-font-weight);
    line-height: var(--hpe-web-heading-h1-condensed-medium-line-height);
    letter-spacing: var(--hpe-web-heading-h1-condensed-medium-letter-spacing);
  }

  .lg-bold {
    font-size: var(
      --hpe-web-heading-h2-condensed-bold-font-size,
      var(--hpe-web-heading-h1-condensed-bold-font-size)
    );
    font-weight: var(
      --hpe-web-heading-h2-condensed-bold-font-weight,
      var(--hpe-web-heading-h1-condensed-bold-font-weight)
    );
    line-height: var(
      --hpe-web-heading-h2-condensed-bold-line-height,
      var(--hpe-web-heading-h1-condensed-bold-line-height)
    );
    letter-spacing: var(
      --hpe-web-heading-h2-condensed-bold-letter-spacing,
      var(--hpe-web-heading-h1-condensed-bold-letter-spacing)
    );
  }

  .lg-regular {
    font-size: var(
      --hpe-web-heading-h2-condensed-medium-font-size,
      var(--hpe-web-heading-h1-condensed-medium-font-size)
    );
    font-weight: var(
      --hpe-web-heading-h2-condensed-medium-font-weight,
      var(--hpe-web-heading-h1-condensed-medium-font-weight)
    );
    line-height: var(
      --hpe-web-heading-h2-condensed-medium-line-height,
      var(--hpe-web-heading-h1-condensed-medium-line-height)
    );
    letter-spacing: var(
      --hpe-web-heading-h2-condensed-medium-letter-spacing,
      var(--hpe-web-heading-h1-condensed-medium-letter-spacing)
    );
  }

  .lg-light {
    font-size: var(
      --hpe-web-heading-h2-condensed-medium-font-size,
      var(--hpe-web-heading-h1-condensed-medium-font-size)
    );
    font-weight: var(
      --hpe-web-heading-h2-condensed-light-font-weight,
      var(--hpe-web-heading-h1-condensed-light-font-weight)
    );
    line-height: var(
      --hpe-web-heading-h2-condensed-medium-line-height,
      var(--hpe-web-heading-h1-condensed-medium-line-height)
    );
    letter-spacing: var(
      --hpe-web-heading-h2-condensed-medium-letter-spacing,
      var(--hpe-web-heading-h1-condensed-medium-letter-spacing)
    );
  }
`;
//# sourceMappingURL=hpe-condensed-heading.styles.js.map