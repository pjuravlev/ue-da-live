import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "../hpe-inputs/hpe-checkbox/hpe-checkbox.js";
import "../hpe-inputs/hpe-radio/hpe-radio.js";
import "./hpe-input-group.js";

type InputType = "checkbox" | "radio";

type InputConfig = {
  label: string;
  value: string;
  checked: boolean;
  disabled: boolean;
};

type StoryArgs = {
  orientation: "horizontal" | "vertical";
  inputType: InputType;
  inputs: InputConfig[];
};

const defaultInputs: InputConfig[] = [
  {
    label: "Email updates",
    value: "email",
    checked: true,
    disabled: false,
  },
  {
    label: "Event invites",
    value: "events",
    checked: false,
    disabled: false,
  },
];

const meta: Meta<StoryArgs> = {
  title: "Elements/Inputs/Input Group",
  component: "hpe-input-group",
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: 'Layout orientation: "horizontal" | "vertical"',
      table: { defaultValue: { summary: "'horizontal'" } },
    },
    inputType: {
      control: { type: "select" },
      options: ["checkbox", "radio"],
      description: 'Input type to render: "checkbox" | "radio"',
      table: { defaultValue: { summary: "'checkbox'" } },
    },
    inputs: {
      control: { type: "object" },
      description:
        "Array of input configs. Add, remove, or edit items in Storybook controls to change the rendered group.",
      table: {
        defaultValue: {
          summary: JSON.stringify(defaultInputs),
        },
      },
    },
  },

  parameters: {
    docs: {
      description: {
        component: "Input Group is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Input groups are used to compose related form controls into a single semantic unit. Use them to align labels, controls, and assistive messaging consistently.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Playground: Story = {
  args: {
    orientation: "horizontal",
    inputType: "checkbox",
    inputs: defaultInputs,
  },
  render: (args) => {
    const radioGroupName = "input-group-options";

    return html`
      <hpe-input-group orientation=${args.orientation}>
        ${args.inputs.map((input) => {
          if (args.inputType === "radio") {
            return html`
              <hpe-radio
                name=${radioGroupName}
                value=${input.value}
                label=${input.label}
                ?checked=${input.checked}
                ?disabled=${input.disabled}
              ></hpe-radio>
            `;
          }

          return html`
            <hpe-checkbox
              value=${input.value}
              label=${input.label}
              ?checked=${input.checked}
              ?disabled=${input.disabled}
            ></hpe-checkbox>
          `;
        })}
      </hpe-input-group>
    `;
  },
};
