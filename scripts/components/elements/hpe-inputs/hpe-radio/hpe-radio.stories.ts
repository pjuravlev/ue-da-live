import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-radio.js";

type StoryArgs = {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  disabled: boolean;
};

const meta: Meta<StoryArgs> = {
  title: "Elements/Inputs/Radio",
  component: "hpe-radio",
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text", description: "Radio group name attribute" },
    value: { control: "text", description: "Radio value attribute" },
    label: { control: "text", description: "Label text" },
    checked: { control: "boolean", description: "Checked state" },
    disabled: { control: "boolean", description: "Disabled state" },
  },

  parameters: {
    docs: {
      description: {
        component: "Radio is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Radio buttons are used when users must select exactly one option from a set. Use arrow keys to move between options and space to select.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<StoryArgs>;

export const Playground: Story = {
  args: {
    name: "radio-group",
    value: "option-1",
    label: "Radio Label",
    checked: false,
    disabled: false,
  },
  render: (args) => html`
    <hpe-radio
      name=${args.name}
      value=${args.value}
      label=${args.label}
      ?checked=${args.checked}
      ?disabled=${args.disabled}
    ></hpe-radio>
  `,
};
