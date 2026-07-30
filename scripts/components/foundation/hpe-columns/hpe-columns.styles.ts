import { css } from "lit";

export const styles = css`
  :host {
    display: block;
    width: 100%;
    --hpe-columns-gap-horizontal: var(--hpe-web-spacing-large);
    --hpe-columns-gap-vertical: var(--hpe-web-spacing-small);
  }

  .columns {
    width: 100%;
    box-sizing: border-box;
  }

  .column {
    min-width: 0;
    box-sizing: border-box;
  }

  ::slotted(*) {
    display: block;
    width: 100%;
    min-width: 0;
  }

  :host([orientation="horizontal"]) .columns {
    display: grid;
    gap: var(--hpe-columns-gap-horizontal);
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  :host([orientation="horizontal"][order="reverse"]) .column-1 {
    order: 5;
  }

  :host([orientation="horizontal"][order="reverse"]) .column-2 {
    order: 4;
  }

  :host([orientation="horizontal"][order="reverse"]) .column-3 {
    order: 3;
  }

  :host([orientation="horizontal"][order="reverse"]) .column-4 {
    order: 2;
  }

  :host([orientation="horizontal"][order="reverse"]) .column-5 {
    order: 1;
  }

  :host([orientation="vertical"]) .columns {
    display: flex;
    flex-direction: column;
    gap: var(--hpe-columns-gap-vertical);
  }

  :host([orientation="vertical"][order="reverse"]) .columns {
    flex-direction: column-reverse;
  }

  :host([orientation="vertical"]) .column {
    width: 100%;
  }

  :host([orientation="horizontal"][columns="1"]) .columns {
    grid-template-columns: minmax(0, 1fr);
  }

  :host([orientation="horizontal"][columns="2"]) .columns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  :host([orientation="horizontal"][columns="3"]) .columns {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  :host([orientation="horizontal"][columns="4"]) .columns {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  :host([orientation="horizontal"][columns="5"]) .columns {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  :host([orientation="horizontal"][columns="40:60"]) .columns {
    grid-template-columns: minmax(0, 40fr) minmax(0, 60fr);
  }

  :host([orientation="horizontal"][columns="60:40"]) .columns {
    grid-template-columns: minmax(0, 60fr) minmax(0, 40fr);
  }

  :host([orientation="horizontal"][columns="33:66"]) .columns {
    grid-template-columns: minmax(0, 33fr) minmax(0, 66fr);
  }

  :host([orientation="horizontal"][columns="66:33"]) .columns {
    grid-template-columns: minmax(0, 66fr) minmax(0, 33fr);
  }

  :host([orientation="horizontal"][columns="20:80"]) .columns {
    grid-template-columns: minmax(0, 20fr) minmax(0, 80fr);
  }

  :host([orientation="horizontal"][columns="80:20"]) .columns {
    grid-template-columns: minmax(0, 80fr) minmax(0, 20fr);
  }
`;
