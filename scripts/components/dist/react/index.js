import * as React from "react";
import { createComponent } from "@lit/react";
import { HpeAccordion as HpeAccordionElement, HpeAccordionItem as HpeAccordionItemElement, HpeAgenda as HpeAgendaElement, HpeAgendaRow as HpeAgendaRowElement, HpeButton as HpeButtonElement, HpeButtonGroup as HpeButtonGroupElement, HpeCard as HpeCardElement, HpeCarousel as HpeCarouselElement, HpeForm as HpeFormElement, HpeHorizontalRule as HpeHorizontalRuleElement, HpeImage as HpeImageElement, HpeInputGroup as HpeInputGroupElement, HpeCheckbox as HpeCheckboxElement, HpeRadio as HpeRadioElement, HpeSelect as HpeSelectElement, HpeInput as HpeInputElement, HpeTextarea as HpeTextareaElement, HpeList as HpeListElement, HpeListItem as HpeListItemElement, HpePullQuote as HpePullQuoteElement, HpeTab as HpeTabElement, HpeTabPanel as HpeTabPanelElement, HpeTabGroup as HpeTabGroupElement, HpeTable as HpeTableElement, HpeTableHeaderRow as HpeTableHeaderRowElement, HpeTableHeaderCell as HpeTableHeaderCellElement, HpeTableBodyRow as HpeTableBodyRowElement, HpeTableBodyCell as HpeTableBodyCellElement, HpeColumns as HpeColumnsElement, HpeSection as HpeSectionElement, HpeXStack as HpeXStackElement, HpeYStack as HpeYStackElement, HpeCondensedHeading as HpeCondensedHeadingElement, HpeParagraph as HpeParagraphElement, HpeHeading as HpeHeadingElement, } from "../index.js";
const withReact = (tagName, elementClass, events) => createComponent({
    react: React,
    tagName,
    elementClass,
    events,
});
export const HpeAccordion = withReact("hpe-accordion", HpeAccordionElement, {
    onAccordionItemToggle: "accordion-item-toggle",
});
export const HpeAccordionItem = withReact("hpe-accordion-item", HpeAccordionItemElement, {
    onAccordionItemToggle: "accordion-item-toggle",
});
export const HpeAgenda = withReact("hpe-agenda", HpeAgendaElement);
export const HpeAgendaRow = withReact("hpe-agenda-row", HpeAgendaRowElement);
export const HpeButton = withReact("hpe-button", HpeButtonElement);
export const HpeButtonGroup = withReact("hpe-button-group", HpeButtonGroupElement);
export const HpeCard = withReact("hpe-card", HpeCardElement);
export const HpeCarousel = withReact("hpe-carousel", HpeCarouselElement, {
    onHpeCarouselChange: "hpe-carousel-change",
});
export const HpeForm = withReact("hpe-form", HpeFormElement, {
    onHpeFormSubmit: "hpe-form-submit",
});
export const HpeHorizontalRule = withReact("hpe-horizontal-rule", HpeHorizontalRuleElement);
export const HpeImage = withReact("hpe-image", HpeImageElement);
export const HpeInputGroup = withReact("hpe-input-group", HpeInputGroupElement);
export const HpeCheckbox = withReact("hpe-checkbox", HpeCheckboxElement);
export const HpeRadio = withReact("hpe-radio", HpeRadioElement);
export const HpeSelect = withReact("hpe-select", HpeSelectElement);
export const HpeInput = withReact("hpe-input", HpeInputElement);
export const HpeTextarea = withReact("hpe-textarea", HpeTextareaElement);
export const HpeList = withReact("hpe-list", HpeListElement);
export const HpeListItem = withReact("hpe-list-item", HpeListItemElement);
export const HpePullQuote = withReact("hpe-pull-quote", HpePullQuoteElement);
export const HpeTab = withReact("hpe-tab", HpeTabElement, {
    onTabSelected: "tab-selected",
});
export const HpeTabPanel = withReact("hpe-tab-panel", HpeTabPanelElement);
export const HpeTabGroup = withReact("hpe-tab-group", HpeTabGroupElement, {
    onTabSelected: "tab-selected",
});
export const HpeTable = withReact("hpe-table", HpeTableElement);
export const HpeTableHeaderRow = withReact("hpe-table-header-row", HpeTableHeaderRowElement);
export const HpeTableHeaderCell = withReact("hpe-table-header-cell", HpeTableHeaderCellElement);
export const HpeTableBodyRow = withReact("hpe-table-body-row", HpeTableBodyRowElement);
export const HpeTableBodyCell = withReact("hpe-table-body-cell", HpeTableBodyCellElement);
export const HpeColumns = withReact("hpe-columns", HpeColumnsElement);
export const HpeSection = withReact("hpe-section", HpeSectionElement);
export const HpeXStack = withReact("hpe-x-stack", HpeXStackElement);
export const HpeYStack = withReact("hpe-y-stack", HpeYStackElement);
export const HpeCondensedHeading = withReact("hpe-condensed-heading", HpeCondensedHeadingElement);
export const HpeParagraph = withReact("hpe-paragraph", HpeParagraphElement);
export const HpeHeading = withReact("hpe-heading", HpeHeadingElement);
//# sourceMappingURL=index.js.map