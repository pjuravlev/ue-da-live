import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-select.js";

type StoryArgs = {
  name: string;
  value: string;
  label: string;
  required: boolean;
  showLabel: boolean;
  descriptionText: string;
  showDescription: boolean;
  state: "enabled" | "error" | "typing" | "complete" | "disabled";
};

const meta: Meta<StoryArgs> = {
  title: "Elements/Inputs/Select",
  component: "hpe-select",
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text", description: "Select name attribute" },
    label: { control: "text", description: "Label text" },
    value: { control: "text", description: "Selected option value" },
    required: { control: "boolean", description: "Required state" },
    showLabel: { control: "boolean", description: "Show label" },
    descriptionText: { control: "text", description: "Description text" },
    showDescription: { control: "boolean", description: "Show description" },
    state: {
      control: "select",
      options: ["enabled", "error", "typing", "complete", "disabled"],
      description: "Select visual state",
    },
  },

  parameters: {
    docs: {
      description: {
        component: "Select is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Select inputs are used to choose one option from a larger list while conserving space. Open the list to browse options and select the appropriate value.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<StoryArgs>;

export const Playground: Story = {
  args: {
    name: "select-field",
    value: "",
    label: "Label",
    state: "enabled",
    required: true,
    showLabel: true,
    descriptionText: "Description (Optional)",
    showDescription: true,
  },
  render: (args) => html`
    <hpe-select
      name=${args.name}
      label=${args.label}
      value=${args.value}
      state=${args.state}
      ?required=${args.required}
      ?show-label=${args.showLabel}
      description-text=${args.descriptionText}
      ?show-description=${args.showDescription}
    >
      <option value="">Select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </hpe-select>
  `,
};
