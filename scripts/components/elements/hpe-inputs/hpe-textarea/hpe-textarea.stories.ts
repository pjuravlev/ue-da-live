import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-textarea.js";

type StoryArgs = {
  name: string;
  value: string;
  placeholder: string;
  label: string;
  required: boolean;
  showLabel: boolean;
  descriptionText: string;
  showDescription: boolean;
  maxLength: number;
  state: "enabled" | "error" | "typing" | "complete" | "disabled";
};

const meta: Meta<StoryArgs> = {
  title: "Elements/Inputs/Textarea",
  component: "hpe-textarea",
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text", description: "Textarea name attribute" },
    label: { control: "text", description: "Label text" },
    value: { control: "text", description: "Textarea value" },
    placeholder: { control: "text", description: "Placeholder text" },
    required: { control: "boolean", description: "Required state" },
    showLabel: { control: "boolean", description: "Show label" },
    descriptionText: { control: "text", description: "Description text" },
    showDescription: { control: "boolean", description: "Show description" },
    maxLength: { control: "number", description: "Maximum character count" },
    state: {
      control: "select",
      options: ["enabled", "error", "typing", "complete", "disabled"],
      description: "Textarea visual state",
    },
  },

  parameters: {
    docs: {
      description: {
        component: "Textarea is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Textareas are used to capture longer free-form responses and multi-line input. Use them for notes, comments, and extended descriptions.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<StoryArgs>;

export const Playground: Story = {
  args: {
    name: "textarea-field",
    label: "Label",
    value: "",
    placeholder: "Value...",
    state: "enabled",
    required: true,
    showLabel: true,
    descriptionText: "Description (Optional)",
    showDescription: true,
    maxLength: 3000,
  },
  render: (args) => html`
    <hpe-textarea
      name=${args.name}
      label=${args.label}
      value=${args.value}
      placeholder=${args.placeholder}
      state=${args.state}
      ?required=${args.required}
      ?show-label=${args.showLabel}
      description-text=${args.descriptionText}
      ?show-description=${args.showDescription}
      max-length=${args.maxLength}
    ></hpe-textarea>
  `,
};
