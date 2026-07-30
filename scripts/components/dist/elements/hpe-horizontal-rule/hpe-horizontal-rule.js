var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "./hpe-horizontal-rule.styles.js";
/**
 * A decorative horizontal rule used to visually separate sections of content.
 *
 * @tag hpe-horizontal-rule
 * @summary A full-width horizontal divider styled with the design-system border token.
 *
 * @csspart rule - The underlying `<hr>` element.
 */
let HpeHorizontalRule = class HpeHorizontalRule extends LitElement {
    render() {
        return html `<hr part="rule" class="rule" />`;
    }
};
HpeHorizontalRule.styles = styles;
HpeHorizontalRule = __decorate([
    customElement("hpe-horizontal-rule")
], HpeHorizontalRule);
export { HpeHorizontalRule };
//# sourceMappingURL=hpe-horizontal-rule.js.map