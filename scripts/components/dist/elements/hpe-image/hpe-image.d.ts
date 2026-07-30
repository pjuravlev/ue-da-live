import { LitElement } from "lit";
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
export declare class HpeImage extends LitElement {
    static styles: import("lit").CSSResult;
    src?: string;
    alt: string;
    aspectRatio: "16:9" | "4:3" | "1:1" | "9:16" | "3:4" | "18:5";
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-image": HpeImage;
    }
}
//# sourceMappingURL=hpe-image.d.ts.map