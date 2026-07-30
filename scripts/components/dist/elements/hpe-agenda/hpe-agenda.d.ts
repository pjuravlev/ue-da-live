import { LitElement, PropertyValues } from 'lit';
/**
 * A stacked agenda pattern for organizing time-based event rows.
 *
 * @tag hpe-agenda
 * @summary Agenda container that applies alternating and border variants to row children.
 *
 * @attr {'alternating' | 'border' | 'no-border'} format
 *
 * @slot - One or more <hpe-agenda-row> elements.
 *
 * @csspart section - Outer agenda section wrapper.
 * @csspart container - Inner agenda container.
 */
export declare class HpeAgenda extends LitElement {
    static styles: import("lit").CSSResult;
    format: 'alternating' | 'border' | 'no-border';
    protected updated(changed: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult<1>;
    private syncRows;
}
/**
 * One agenda row with a time column and content column.
 *
 * @tag hpe-agenda-row
 * @summary Two-column agenda row for time and description content.
 *
 * @attr {'default' | 'sunken'} tone
 * @attr {boolean} bordered
 *
 * @slot time - Time or label content for the first column.
 * @slot title - Optional agenda item title.
 * @slot description - Optional agenda item description.
 * @slot - Main row content for the second column.
 *
 * @csspart row - Row container.
 * @csspart time - Time column.
 * @csspart content - Content column.
 */
export declare class HpeAgendaRow extends LitElement {
    static styles: import("lit").CSSResult;
    tone: 'default' | 'sunken';
    bordered: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'hpe-agenda': HpeAgenda;
        'hpe-agenda-row': HpeAgendaRow;
    }
}
//# sourceMappingURL=hpe-agenda.d.ts.map