import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-image.styles";

/**
 * An image container component with flexible aspect ratio support.
 * Supports six aspect ratio variants optimized for different use cases.
 *
 * @tag hpe-image
 * @summary Displays an image with configurable aspect ratio options.
 *
 * @attr {string} src - Image source URL
 * @attr {string} alt - Alternative text for accessibility
 * @attr {string} aspect-ratio - Aspect ratio: "16:9" | "4:3" | "1:1" | "9:16" | "3:4" | "18:5" (default: "4:3")
 *
 * @slot - Fallback content if image fails to load or for placeholder
 *
 * @csspart container - The image container element
 * @csspart image - The img element
 */
@customElement("hpe-image")
export class HpeImage extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  src?: string;

  @property({ reflect: true })
  alt = "Image";

  @property({ reflect: true, attribute: "aspect-ratio" })
  aspectRatio: "16:9" | "4:3" | "1:1" | "9:16" | "3:4" | "18:5" = "4:3";

  override render() {
    return html`
      <div part="image-container" class="image-container">
        ${this.src
          ? html`<img
              part="image"
              class="image"
              src=${this.src}
              alt=${this.alt}
            />`
          : html`<slot></slot>`}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-image": HpeImage;
  }
}
