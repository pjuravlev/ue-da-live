var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './hpe-agenda.styles.js';
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
let HpeAgenda = class HpeAgenda extends LitElement {
    constructor() {
        super(...arguments);
        this.format = 'alternating';
        this.syncRows = () => {
            const defaultSlot = this.shadowRoot?.querySelector('slot');
            if (!defaultSlot)
                return;
            const rows = defaultSlot
                .assignedElements({ flatten: true })
                .filter((element) => element instanceof HpeAgendaRow);
            rows.forEach((row, index) => {
                row.bordered = this.format === 'border';
                row.tone =
                    this.format === 'alternating' && index % 2 === 0
                        ? 'sunken'
                        : 'default';
            });
        };
    }
    updated(changed) {
        if (changed.has('format')) {
            this.syncRows();
        }
    }
    render() {
        return html `
      <section part="section" class="section">
        <div part="container" class="container">
          <slot @slotchange=${this.syncRows}></slot>
        </div>
      </section>
    `;
    }
};
HpeAgenda.styles = styles;
__decorate([
    property({ reflect: true })
], HpeAgenda.prototype, "format", void 0);
HpeAgenda = __decorate([
    customElement('hpe-agenda')
], HpeAgenda);
export { HpeAgenda };
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
let HpeAgendaRow = class HpeAgendaRow extends LitElement {
    constructor() {
        super(...arguments);
        this.tone = 'default';
        this.bordered = false;
    }
    render() {
        return html `
      <div part="row" class="row">
        <div part="time" class="time">
          <slot name="time"></slot>
        </div>
        <div part="content" class="content">
          <slot name="title"></slot>
          <slot name="description">
            <slot></slot>
          </slot>
        </div>
      </div>
    `;
    }
};
HpeAgendaRow.styles = styles;
__decorate([
    property({ reflect: true })
], HpeAgendaRow.prototype, "tone", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], HpeAgendaRow.prototype, "bordered", void 0);
HpeAgendaRow = __decorate([
    customElement('hpe-agenda-row')
], HpeAgendaRow);
export { HpeAgendaRow };
//# sourceMappingURL=hpe-agenda.js.map