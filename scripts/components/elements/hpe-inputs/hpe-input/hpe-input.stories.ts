import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-input.js";

type StoryArgs = {
  name: string;
  value: string;
  placeholder: string;
  label: string;
  required: boolean;
  showLabel: boolean;
  descriptionText: string;
  showDescription: boolean;
  state: "enabled" | "error" | "typing" | "complete" | "disabled";
};

const meta: Meta<StoryArgs> = {
  title: "Elements/Inputs/Input",
  component: "hpe-input",
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text", description: "Input name attribute" },
    label: { control: "text", description: "Label text" },
    value: { control: "text", description: "Input value" },
    placeholder: { control: "text", description: "Placeholder text" },
    required: { control: "boolean", description: "Required state" },
    showLabel: { control: "boolean", description: "Show label" },
    descriptionText: { control: "text", description: "Description text" },
    showDescription: { control: "boolean", description: "Show description" },
    state: {
      control: "select",
      options: ["enabled", "error", "typing", "complete", "disabled"],
      description: "Input visual state",
    },
  },

  parameters: {
    docs: {
      description: {
        component: "Input is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Text inputs are used to capture short-form user data such as names, IDs, or keywords. Include clear labels and validation feedback to reduce entry errors.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<StoryArgs>;

export const Playground: Story = {
  args: {
    name: "input-field",
    label: "Label",
    value: "",
    placeholder: "Value...",
    state: "enabled",
    required: true,
    showLabel: true,
    descriptionText: "Description (Optional)",
    showDescription: true,
  },
  render: (args) => html`
    <hpe-input
      name=${args.name}
      label=${args.label}
      value=${args.value}
      placeholder=${args.placeholder}
      state=${args.state}
      ?required=${args.required}
      ?show-label=${args.showLabel}
      description-text=${args.descriptionText}
      ?show-description=${args.showDescription}
    ></hpe-input>
  `,
};
