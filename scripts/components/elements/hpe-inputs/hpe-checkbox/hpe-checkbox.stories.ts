import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-checkbox.js";

type StoryArgs = {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  disabled: boolean;
};

const meta: Meta<StoryArgs> = {
  title: "Elements/Inputs/Checkbox",
  component: "hpe-checkbox",
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text", description: "Checkbox name attribute" },
    value: { control: "text", description: "Checkbox value attribute" },
    label: { control: "text", description: "Label text" },
    checked: { control: "boolean", description: "Checked state" },
    disabled: { control: "boolean", description: "Disabled state" },
  },

  parameters: {
    docs: {
      description: {
        component: "Checkbox is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Checkboxes are used when users can select zero, one, or multiple options from a set. Use them for independent, non-exclusive choices.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<StoryArgs>;

export const Playground: Story = {
  args: {
    name: "checkbox-field",
    value: "option-1",
    label: "Checkbox Label",
    checked: false,
    disabled: false,
  },
  render: (args) => html`
    <hpe-checkbox
      name=${args.name}
      value=${args.value}
      label=${args.label}
      ?checked=${args.checked}
      ?disabled=${args.disabled}
    ></hpe-checkbox>
  `,
};
