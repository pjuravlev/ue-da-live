import { css } from "lit";
export const styles = css `
  :host {
    display: block;
    --hpe-card-background: var(--hpe-web-color-background-card);
    --hpe-card-content-padding: var(--hpe-web-spacing-medium);
    --hpe-card-text-gap: var(--hpe-web-spacing-xxsmall);
    --hpe-card-section-gap: var(--hpe-web-spacing-medium);
    --hpe-card-footer-gap: var(--hpe-web-spacing-small);
    --hpe-card-hover-transition: opacity 0.2s ease-in-out;
  }

  .card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
    background: var(--hpe-card-background);
  }

  .card-media {
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }

  .card-media[hidden] {
    display: none;
  }

  ::slotted(hpe-image[slot="media"]) {
    display: block;
    width: 100%;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: var(--hpe-card-section-gap);
    padding: var(--hpe-card-content-padding);
    background: var(--hpe-card-background);
    flex: 1;
    position: relative;
    isolation: isolate;
  }

  .card-body::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
        88% 74% at 100% 100%,
        color-mix(
            in srgb,
            var(--hpe-web-base-color-green-125) 88%,
            var(--hpe-web-color-background-card)
          )
          0%,
        color-mix(
            in srgb,
            var(--hpe-web-base-color-green-125) 62%,
            var(--hpe-web-color-background-card)
          )
          22%,
        color-mix(
            in srgb,
            var(--hpe-web-base-color-green-100) 38%,
            var(--hpe-web-color-background-card)
          )
          42%,
        color-mix(
            in srgb,
            var(--hpe-web-base-color-green-100) 16%,
            var(--hpe-web-color-background-card)
          )
          56%,
        var(--hpe-card-background) 72%
      ),
      radial-gradient(
        54% 48% at 86% 95%,
        color-mix(
            in srgb,
            var(--hpe-web-color-decorative-green) 78%,
            var(--hpe-card-background)
          )
          0%,
        color-mix(
            in srgb,
            var(--hpe-web-color-decorative-green) 46%,
            var(--hpe-card-background)
          )
          30%,
        color-mix(
            in srgb,
            var(--hpe-web-color-decorative-green) 18%,
            var(--hpe-card-background)
          )
          46%,
        var(--hpe-card-background) 64%
      );
    background-repeat: no-repeat;
    background-size: 100% 100%;
    opacity: 0;
    pointer-events: none;
    transition: var(--hpe-card-hover-transition);
    z-index: 0;
  }

  :host([variant="default"]:hover) .card-body::after {
    opacity: 1;
  }

  :host([variant="flush"]) .card,
  :host([variant="flush"]) .card-body {
    background: transparent;
  }

  :host([variant="flush"]) .card-body {
    padding-block: var(--hpe-card-content-padding);
    padding-inline: var(--hpe-web-spacing-none);
  }

  .card-header,
  .card-footer {
    display: flex;
    flex-direction: column;
    gap: var(--hpe-card-footer-gap);
    position: relative;
    z-index: 1;
  }

  .card-header[hidden],
  .card-footer[hidden] {
    display: none;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: var(--hpe-card-text-gap);
    position: relative;
    z-index: 1;
  }

  .tagline,
  .heading,
  .body,
  .card-actions {
    display: block;
  }

  .card-actions {
    margin-top: auto;
    position: relative;
    z-index: 1;
  }

  ::slotted([slot="actions"]) {
    display: block;
  }

  .default-actions {
    display: flex;
    align-items: flex-start;
  }
`;
//# sourceMappingURL=hpe-card.styles.js.map