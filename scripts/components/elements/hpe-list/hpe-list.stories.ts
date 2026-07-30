import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-list.js";

type StoryArgs = {
  bulletType: "checkmark" | "bullet-point";
  items: string[];
};

const meta: Meta<StoryArgs> = {
  title: "Elements/List",
  component: "hpe-list",
  tags: ["autodocs"],
  argTypes: {
    bulletType: {
      control: { type: "inline-radio" },
      options: ["checkmark", "bullet-point"],
      description: "Marker mode for list items: 'checkmark' | 'bullet-point'",
      table: { defaultValue: { summary: "'checkmark'" } },
    },
    items: {
      control: { type: "object" },
      description: "Array of list item labels",
    },
  },

  parameters: {
    docs: {
      description: {
        component: "List is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Lists are used to present grouped information in ordered or unordered formats. Use them to improve readability and support quick content scanning.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Playground: Story = {
  args: {
    bulletType: "checkmark",
    items: ["List Item", "List Item", "List Item"],
  },
  render: (args) => html`
    <hpe-list bullet-type=${args.bulletType} style="max-width: 580px;">
      ${args.items.map((item) => html`<hpe-list-item>${item}</hpe-list-item>`)}
    </hpe-list>
  `,
};
