import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-button-group.js";
import "../hpe-button/hpe-button.js";

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
  orientation: "horizontal" | "vertical";
  buttons: ButtonConfig[];
};

const defaultButtons: ButtonConfig[] = [
  {
    label: "Button One",
    type: "primary",
    size: "default",
    disabled: false,
    showLeftIcon: false,
    showRightIcon: true,
  },
  {
    label: "Button Two",
    type: "secondary",
    size: "default",
    disabled: false,
    showLeftIcon: false,
    showRightIcon: true,
  },
];

const meta: Meta<StoryArgs> = {
  title: "Elements/Buttons/Button Group",
  component: "hpe-button-group",
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: 'Layout orientation: "horizontal" | "vertical"',
      table: { defaultValue: { summary: "'horizontal'" } },
    },
    buttons: {
      control: { type: "object" },
      description:
        "Array of button configs. Add, remove, or edit items in Storybook controls to change the rendered group.",
      table: {
        defaultValue: {
          summary: JSON.stringify(defaultButtons),
        },
      },
    },
  },

  parameters: {
    docs: {
      description: {
        component: "Button Group is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Button groups are used to present related actions together with consistent spacing and hierarchy. Use them when users need to compare and choose between nearby actions.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<StoryArgs>;

export const Playground: Story = {
  args: {
    orientation: "horizontal",
    buttons: defaultButtons,
  },
  render: (args) => html`
    <hpe-button-group orientation=${args.orientation}>
      ${args.buttons.map(
        (btn) => html`
          <hpe-button
            type=${btn.type}
            size=${btn.size}
            ?disabled=${btn.disabled}
            ?show-left-icon=${btn.showLeftIcon}
            ?show-right-icon=${btn.showRightIcon}
          >
            ${btn.label}
          </hpe-button>
        `,
      )}
    </hpe-button-group>
  `,
};
