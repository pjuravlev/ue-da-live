import { LitElement, PropertyValues, html } from 'lit';
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
@customElement('hpe-agenda')
export class HpeAgenda extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  format: 'alternating' | 'border' | 'no-border' = 'alternating';

  protected override updated(changed: PropertyValues<this>) {
    if (changed.has('format')) {
      this.syncRows();
    }
  }

  override render() {
    return html`
      <section part="section" class="section">
        <div part="container" class="container">
          <slot @slotchange=${this.syncRows}></slot>
        </div>
      </section>
    `;
  }

  private syncRows = () => {
    const defaultSlot = this.shadowRoot?.querySelector(
      'slot',
    ) as HTMLSlotElement | null;

    if (!defaultSlot) return;

    const rows = defaultSlot
      .assignedElements({ flatten: true })
      .filter((element): element is HpeAgendaRow => element instanceof HpeAgendaRow);

    rows.forEach((row, index) => {
      row.bordered = this.format === 'border';
      row.tone =
        this.format === 'alternating' && index % 2 === 0
          ? 'sunken'
          : 'default';
    });
  };
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
@customElement('hpe-agenda-row')
export class HpeAgendaRow extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  tone: 'default' | 'sunken' = 'default';

  @property({ reflect: true, type: Boolean })
  bordered = false;

  override render() {
    return html`
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
}

declare global {
  interface HTMLElementTagNameMap {
    'hpe-agenda': HpeAgenda;
    'hpe-agenda-row': HpeAgendaRow;
  }
}