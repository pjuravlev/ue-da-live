import * as React from "react";
import { createComponent } from "@lit/react";
import {
  HpeAccordion as HpeAccordionElement,
  HpeAccordionItem as HpeAccordionItemElement,
  HpeAgenda as HpeAgendaElement,
  HpeAgendaRow as HpeAgendaRowElement,
  HpeButton as HpeButtonElement,
  HpeButtonGroup as HpeButtonGroupElement,
  HpeCard as HpeCardElement,
  HpeCarousel as HpeCarouselElement,
  HpeForm as HpeFormElement,
  HpeHorizontalRule as HpeHorizontalRuleElement,
  HpeImage as HpeImageElement,
  HpeInputGroup as HpeInputGroupElement,
  HpeCheckbox as HpeCheckboxElement,
  HpeRadio as HpeRadioElement,
  HpeSelect as HpeSelectElement,
  HpeInput as HpeInputElement,
  HpeTextarea as HpeTextareaElement,
  HpeList as HpeListElement,
  HpeListItem as HpeListItemElement,
  HpePullQuote as HpePullQuoteElement,
  HpeTab as HpeTabElement,
  HpeTabPanel as HpeTabPanelElement,
  HpeTabGroup as HpeTabGroupElement,
  HpeTable as HpeTableElement,
  HpeTableHeaderRow as HpeTableHeaderRowElement,
  HpeTableHeaderCell as HpeTableHeaderCellElement,
  HpeTableBodyRow as HpeTableBodyRowElement,
  HpeTableBodyCell as HpeTableBodyCellElement,
  HpeColumns as HpeColumnsElement,
  HpeSection as HpeSectionElement,
  HpeXStack as HpeXStackElement,
  HpeYStack as HpeYStackElement,
  HpeCondensedHeading as HpeCondensedHeadingElement,
  HpeParagraph as HpeParagraphElement,
  HpeHeading as HpeHeadingElement,
} from "../index.js";

const withReact = <T extends HTMLElement>(
  tagName: string,
  elementClass: { new (): T },
  events?: Record<string, string>,
) =>
  createComponent({
    react: React,
    tagName,
    elementClass,
    events,
  });

export const HpeAccordion = withReact<HpeAccordionElement>(
  "hpe-accordion",
  HpeAccordionElement,
  {
    onAccordionItemToggle: "accordion-item-toggle",
  },
);
export const HpeAccordionItem = withReact<HpeAccordionItemElement>(
  "hpe-accordion-item",
  HpeAccordionItemElement,
  {
    onAccordionItemToggle: "accordion-item-toggle",
  },
);
export const HpeAgenda = withReact<HpeAgendaElement>(
  "hpe-agenda",
  HpeAgendaElement,
);
export const HpeAgendaRow = withReact<HpeAgendaRowElement>(
  "hpe-agenda-row",
  HpeAgendaRowElement,
);
export const HpeButton = withReact<HpeButtonElement>(
  "hpe-button",
  HpeButtonElement,
);
export const HpeButtonGroup = withReact<HpeButtonGroupElement>(
  "hpe-button-group",
  HpeButtonGroupElement,
);
export const HpeCard = withReact<HpeCardElement>("hpe-card", HpeCardElement);
export const HpeCarousel = withReact<HpeCarouselElement>(
  "hpe-carousel",
  HpeCarouselElement,
  {
    onHpeCarouselChange: "hpe-carousel-change",
  },
);
export const HpeForm = withReact<HpeFormElement>("hpe-form", HpeFormElement, {
  onHpeFormSubmit: "hpe-form-submit",
});
export const HpeHorizontalRule = withReact<HpeHorizontalRuleElement>(
  "hpe-horizontal-rule",
  HpeHorizontalRuleElement,
);
export const HpeImage = withReact<HpeImageElement>(
  "hpe-image",
  HpeImageElement,
);
export const HpeInputGroup = withReact<HpeInputGroupElement>(
  "hpe-input-group",
  HpeInputGroupElement,
);
export const HpeCheckbox = withReact<HpeCheckboxElement>(
  "hpe-checkbox",
  HpeCheckboxElement,
);
export const HpeRadio = withReact<HpeRadioElement>(
  "hpe-radio",
  HpeRadioElement,
);
export const HpeSelect = withReact<HpeSelectElement>(
  "hpe-select",
  HpeSelectElement,
);
export const HpeInput = withReact<HpeInputElement>(
  "hpe-input",
  HpeInputElement,
);
export const HpeTextarea = withReact<HpeTextareaElement>(
  "hpe-textarea",
  HpeTextareaElement,
);
export const HpeList = withReact<HpeListElement>("hpe-list", HpeListElement);
export const HpeListItem = withReact<HpeListItemElement>(
  "hpe-list-item",
  HpeListItemElement,
);
export const HpePullQuote = withReact<HpePullQuoteElement>(
  "hpe-pull-quote",
  HpePullQuoteElement,
);
export const HpeTab = withReact<HpeTabElement>("hpe-tab", HpeTabElement, {
  onTabSelected: "tab-selected",
});
export const HpeTabPanel = withReact<HpeTabPanelElement>(
  "hpe-tab-panel",
  HpeTabPanelElement,
);
export const HpeTabGroup = withReact<HpeTabGroupElement>(
  "hpe-tab-group",
  HpeTabGroupElement,
  {
    onTabSelected: "tab-selected",
  },
);
export const HpeTable = withReact<HpeTableElement>(
  "hpe-table",
  HpeTableElement,
);
export const HpeTableHeaderRow = withReact<HpeTableHeaderRowElement>(
  "hpe-table-header-row",
  HpeTableHeaderRowElement,
);
export const HpeTableHeaderCell = withReact<HpeTableHeaderCellElement>(
  "hpe-table-header-cell",
  HpeTableHeaderCellElement,
);
export const HpeTableBodyRow = withReact<HpeTableBodyRowElement>(
  "hpe-table-body-row",
  HpeTableBodyRowElement,
);
export const HpeTableBodyCell = withReact<HpeTableBodyCellElement>(
  "hpe-table-body-cell",
  HpeTableBodyCellElement,
);
export const HpeColumns = withReact<HpeColumnsElement>(
  "hpe-columns",
  HpeColumnsElement,
);
export const HpeSection = withReact<HpeSectionElement>(
  "hpe-section",
  HpeSectionElement,
);
export const HpeXStack = withReact<HpeXStackElement>(
  "hpe-x-stack",
  HpeXStackElement,
);
export const HpeYStack = withReact<HpeYStackElement>(
  "hpe-y-stack",
  HpeYStackElement,
);
export const HpeCondensedHeading = withReact<HpeCondensedHeadingElement>(
  "hpe-condensed-heading",
  HpeCondensedHeadingElement,
);
export const HpeParagraph = withReact<HpeParagraphElement>(
  "hpe-paragraph",
  HpeParagraphElement,
);
export const HpeHeading = withReact<HpeHeadingElement>(
  "hpe-heading",
  HpeHeadingElement,
);
