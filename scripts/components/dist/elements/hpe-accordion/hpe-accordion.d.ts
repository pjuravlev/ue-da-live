import { LitElement } from "lit";
/**
 * A single accordion item with a trigger and expandable content region.
 *
 * @tag hpe-accordion-item
 * @summary Displays a single accordion item with an H5 label and chevron icon.
 *
 * @attr {string} label - Accordion trigger label text
 * @attr {boolean} expanded - Whether the accordion content is expanded
 * @attr {boolean} disabled - Whether the accordion trigger is disabled
 *
 * @slot - Accordion panel content shown when expanded
 *
 * @fires accordion-item-toggle - Emitted when the item requests a new expansion state
 *
 * @csspart item - The accordion item wrapper
 * @csspart trigger - The accordion trigger button
 * @csspart label - The accordion label text
 * @csspart icon - The chevron icon container
 * @csspart panel - The expandable content region
 */
export declare class HpeAccordionItem extends LitElement {
    static styles: import("lit").CSSResult;
    label: string;
    expanded: boolean;
    disabled: boolean;
    private readonly panelId;
    private readonly triggerId;
    render(): import("lit-html").TemplateResult<1>;
    focusTrigger(): void;
    private handleToggle;
    private handleKeydown;
}
/**
 * A parent accordion that coordinates related accordion items.
 *
 * @tag hpe-accordion
 * @summary Organizes multiple accordion items and keeps a single item expanded at a time.
 *
 * @slot - Accordion item elements (use `<hpe-accordion-item>`)
 *
 * @csspart accordion - The accordion container element
 */
export declare class HpeAccordion extends LitElement {
    static styles: import("lit").CSSResult;
    private items;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private updateItems;
    private handleItemToggle;
}
declare global {
    interface HTMLElementTagNameMap {
        "hpe-accordion": HpeAccordion;
        "hpe-accordion-item": HpeAccordionItem;
    }
}
//# sourceMappingURL=hpe-accordion.d.ts.map