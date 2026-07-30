import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-button-only.js";
import "../../elements/hpe-button/hpe-button.js";

type ButtonType = "primary" | "secondary" | "link-primary" | "link-neutral";
type ButtonSize = "small" | "default" | "large";

type ButtonConfig = {
  label: string;
  type: ButtonType;
  size: ButtonSize;
  disabled: boolean;
  showLeftIcon: boolean;
  showRightIcon: boolean;
};

type StoryArgs = {
  padding: "default" | "none" | "top" | "bottom" | "left-right-only";
  buttonGroupOrientation: "horizontal" | "vertical";
  buttons: ButtonConfig[];
};

const defaultButtons: ButtonConfig[] = [
  {
    label: "Primary Action",
    type: "primary",
    size: "default",
    disabled: false,
    showLeftIcon: false,
    showRightIcon: true,
  },
  {
    label: "Secondary Action",
    type: "secondary",
    size: "default",
    disabled: false,
    showLeftIcon: false,
    showRightIcon: true,
  },
];

const meta: Meta<StoryArgs> = {
  title: "Templates/Stand Alone/Button Only",
  component: "hpe-button-only",
  tags: ["autodocs"],
  argTypes: {
    padding: {
      control: { type: "select" },
      options: ["default", "none", "top", "bottom", "left-right-only"],
    },
    buttonGroupOrientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    buttons: {
      control: { type: "object" },
      description:
        "Array of button configs. Add, remove, or edit items in Storybook controls to change the rendered actions.",
      table: {
        defaultValue: {
          summary: JSON.stringify(defaultButtons),
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Playground: Story = {
  args: {
    padding: "default",
    buttonGroupOrientation: "horizontal",
    buttons: defaultButtons,
  },
  tags: ["hidden"],
  render: (args) => html`
    <hpe-button-only
      padding=${args.padding}
      button-group-orientation=${args.buttonGroupOrientation}
    >
      ${args.buttons.map(
        (button) => html`
          <hpe-button
            type=${button.type}
            size=${button.size}
            ?disabled=${button.disabled}
            ?show-left-icon=${button.showLeftIcon}
            ?show-right-icon=${button.showRightIcon}
          >
            ${button.label}
          </hpe-button>
        `,
      )}
    </hpe-button-only>
  `,
};
