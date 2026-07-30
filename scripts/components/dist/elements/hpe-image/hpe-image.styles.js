import { css } from "lit";
export const styles = css `
  :host {
    --hpe-image-background: var(
      --image-background,
      var(--hpe-web-color-transparent)
    );
    display: block;
  }

  .image-container {
    position: relative;
    width: 100%;
    background-color: var(--hpe-image-background);
    overflow: hidden;
  }

  .image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* 16:9 aspect ratio */
  :host([aspect-ratio="16:9"]) .image-container {
    aspect-ratio: 16 / 9;
  }

  /* 4:3 aspect ratio (default) */
  :host([aspect-ratio="4:3"]) .image-container {
    aspect-ratio: 4 / 3;
  }

  /* 1:1 aspect ratio (square) */
  :host([aspect-ratio="1:1"]) .image-container {
    aspect-ratio: 1 / 1;
  }

  /* 9:16 aspect ratio (tall) */
  :host([aspect-ratio="9:16"]) .image-container {
    aspect-ratio: 9 / 16;
  }

  /* 3:4 aspect ratio (tall) */
  :host([aspect-ratio="3:4"]) .image-container {
    aspect-ratio: 3 / 4;
  }

  /* 18:5 aspect ratio (ultra-wide) */
  :host([aspect-ratio="18:5"]) .image-container {
    aspect-ratio: 18 / 5;
  }

  /* Slot (fallback content) styling */
  ::slotted(*) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
//# sourceMappingURL=hpe-image.styles.js.map