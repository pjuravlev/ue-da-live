import { css } from "lit";

export const styles = css`
  :host {
    display: block;
    width: 100%;
  }

  .rule {
    display: block;
    width: 100%;
    height: 0;
    margin: 0;
    border: none;
    border-top: var(--hpe-web-border-width-default) solid
      var(--hpe-web-color-border-weak);
  }
`;
