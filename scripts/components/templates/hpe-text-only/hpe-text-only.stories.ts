import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-text-only.js";
import "../../elements/hpe-button/hpe-button.js";

type StoryArgs = {
  padding: "default" | "none" | "top" | "bottom" | "left-right-only";
  format: "h2" | "h3" | "h4" | "h5";
  eyebrow: string;
  heading: string;
  body: string;
  buttonLabel: string;
  showEyebrow: boolean;
  showBody: boolean;
  showButton: boolean;
  useButtonGroup: boolean;
  buttonGroupOrientation: "horizontal" | "vertical";
  showSecondaryAction: boolean;
};

const meta: Meta<StoryArgs> = {
  title: "Templates/Stand Alone/Text Only",
  component: "hpe-text-only",
  tags: ["autodocs"],
  argTypes: {
    padding: {
      control: { type: "select" },
      options: ["default", "none", "top", "bottom", "left-right-only"],
    },
    format: {
      control: { type: "select" },
      options: ["h2", "h3", "h4", "h5"],
    },
    eyebrow: { control: { type: "text" } },
    heading: { control: { type: "text" } },
    body: { control: { type: "text" } },
    buttonLabel: { control: { type: "text" } },
    showEyebrow: { control: { type: "boolean" } },
    showBody: { control: { type: "boolean" } },
    showButton: { control: { type: "boolean" } },
    useButtonGroup: { control: { type: "boolean" } },
    buttonGroupOrientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    showSecondaryAction: {
      control: { type: "boolean" },
      description: "Whether to render the slotted secondary action button",
    },
  },
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Playground: Story = {
  args: {
    padding: "default",
    format: "h2",
    eyebrow: "Eyebrow label (optional)",
    heading: "Text Only",
    body: "No matter how unique your needs are, HPE's edge expertise, data management tools, and proven integration capabilities can help you scale across all your edge locations.",
    buttonLabel: "Label",
    showEyebrow: true,
    showBody: true,
    showButton: true,
    useButtonGroup: false,
    buttonGroupOrientation: "horizontal",
    showSecondaryAction: false,
  },
  tags: ["hidden"],
  render: (args) => html`
    <hpe-text-only
      padding=${args.padding}
      format=${args.format}
      eyebrow=${args.eyebrow}
      heading=${args.heading}
      body=${args.body}
      button-label=${args.buttonLabel}
      button-group-orientation=${args.buttonGroupOrientation}
      ?show-eyebrow=${args.showEyebrow}
      ?show-body=${args.showBody}
      ?show-button=${args.showButton}
      ?use-button-group=${args.useButtonGroup}
    >
      ${args.showSecondaryAction
        ? html`
            <hpe-button slot="secondary-action" type="secondary" size="default"
              >Secondary</hpe-button
            >
          `
        : ""}
    </hpe-text-only>
  `,
};
