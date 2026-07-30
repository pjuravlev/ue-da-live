import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-accordion.js";

interface AccordionItemConfig {
  label: string;
  panelLabel: string;
  expanded: boolean;
  disabled: boolean;
}

const meta: Meta = {
  title: "Elements/Accordion",
  component: "hpe-accordion",
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: { type: "object" },
      description: "Array of accordion item configurations",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Accordion is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Accordions are used to progressively disclose sections of related content. Expand or collapse panels to focus attention and reduce visual complexity.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const panelPlaceholder = (label: string) => html`
  <div
    style="
      min-height: 56px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border: 1px dashed var(--hpe-web-color-border-strong, #7764fc);
      background: var(
        --hpe-web-color-background-primary-soft,
        rgba(119, 100, 252, 0.18)
      );
      color: var(--hpe-web-color-text-strong, #201a29);
      font: var(--hpe-web-type-label-small, 600 0.875rem/1.2 sans-serif);
    "
  >
    ${label}
  </div>
`;

export const Playground: Story = {
  args: {
    items: [
      {
        label: "Accordion Item Label 1",
        panelLabel: "Panel Content 1",
        expanded: false,
        disabled: false,
      },
      {
        label: "Accordion Item Label 2",
        panelLabel: "Panel Content 2",
        expanded: false,
        disabled: false,
      },
      {
        label: "Accordion Item Label 3",
        panelLabel: "Panel Content 3",
        expanded: false,
        disabled: false,
      },
    ] as AccordionItemConfig[],
  },
  render: (args) => html`
    <div style="width: 100%; max-width: 992px; margin: 0 auto;">
      <hpe-accordion>
        ${(args.items as AccordionItemConfig[]).map(
          (item) => html`
            <hpe-accordion-item
              label=${item.label}
              ?expanded=${item.expanded}
              ?disabled=${item.disabled}
            >
              ${panelPlaceholder(item.panelLabel)}
            </hpe-accordion-item>
          `,
        )}
      </hpe-accordion>
    </div>
  `,
};

export const Expanded: Story = {
  render: () => html`
    <div style="width: 100%; max-width: 992px; margin: 0 auto;">
      <hpe-accordion>
        <hpe-accordion-item label="Accordion Item Label" expanded>
          ${panelPlaceholder("Panel Content")}
        </hpe-accordion-item>
      </hpe-accordion>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="width: 100%; max-width: 992px; margin: 0 auto;">
      <hpe-accordion>
        <hpe-accordion-item label="Enabled Item"
          >${panelPlaceholder("Panel Content")}</hpe-accordion-item
        >
        <hpe-accordion-item label="Disabled Item" disabled>
          ${panelPlaceholder("Panel Content")}
        </hpe-accordion-item>
      </hpe-accordion>
    </div>
  `,
};
