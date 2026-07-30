var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let HpeImage = class HpeImage extends LitElement {
    constructor() {
        super(...arguments);
        this.alt = "Image";
        this.aspectRatio = "4:3";
    }
    render() {
        return html `
      <div part="image-container" class="image-container">
        ${this.src
            ? html `<img
              part="image"
              class="image"
              src=${this.src}
              alt=${this.alt}
            />`
            : html `<slot></slot>`}
      </div>
    `;
    }
};
HpeImage.styles = styles;
__decorate([
    property({ reflect: true })
], HpeImage.prototype, "src", void 0);
__decorate([
    property({ reflect: true })
], HpeImage.prototype, "alt", void 0);
__decorate([
    property({ reflect: true, attribute: "aspect-ratio" })
], HpeImage.prototype, "aspectRatio", void 0);
HpeImage = __decorate([
    customElement("hpe-image")
], HpeImage);
export { HpeImage };
//# sourceMappingURL=hpe-image.js.map