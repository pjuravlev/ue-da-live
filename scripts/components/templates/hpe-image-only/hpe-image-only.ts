import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./hpe-image-only.styles.js";
import "../../foundation/hpe-section/hpe-section.js";
import "../../elements/hpe-image/hpe-image.js";

type Padding = "default" | "none" | "top" | "bottom" | "left-right-only";
type ImageAspectRatio = "16:9" | "4:3" | "1:1" | "9:16" | "3:4" | "18:5";

const DEFAULT_IMAGE_SRC =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80";

/**
 * A stand-alone image template that composes an image inside the shared section layout.
 *
 * @tag hpe-image-only
 * @summary Renders a section-constrained image using the shared section and image primitives.
 *
 * @attr {string} padding - Section padding variant: "default" | "none" | "top" | "bottom" | "left-right-only"
 * @attr {string} image-src - Image source URL
 * @attr {string} image-alt - Alternative text for accessibility
 * @attr {string} image-aspect-ratio - Image aspect ratio: "16:9" | "4:3" | "1:1" | "9:16" | "3:4" | "18:5"
 *
 * @csspart section - The inner hpe-section element
 * @csspart content - The image wrapper
 * @csspart image - The delegated hpe-image element
 */
@customElement("hpe-image-only")
export class HpeImageOnly extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  padding: Padding = "default";

  @property({ reflect: true, attribute: "image-src" })
  imageSrc = DEFAULT_IMAGE_SRC;

  @property({ reflect: true, attribute: "image-alt" })
  imageAlt = "Abstract blue texture";

  @property({ reflect: true, attribute: "image-aspect-ratio" })
  imageAspectRatio: ImageAspectRatio = "16:9";

  override render() {
    return html`
      <hpe-section part="section" class="section" padding=${this.padding}>
        <hpe-image
          src=${this.imageSrc}
          alt=${this.imageAlt}
          aspect-ratio=${this.imageAspectRatio}
        ></hpe-image>
      </hpe-section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hpe-image-only": HpeImageOnly;
  }
}
