import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-text-recipe.js";

type StoryArgs = {
  format: "h2" | "h3" | "h4" | "h5";
  eyebrow: string;
  heading: string;
  body: string;
  buttonLabel: string;
  disclaimer: string;
  showEyebrow: boolean;
  showBody: boolean;
  showButton: boolean;
  useButtonGroup: boolean;
  buttonGroupOrientation: "horizontal" | "vertical";
  showSecondaryAction: boolean;
  showDisclaimer: boolean;
};

const meta: Meta<StoryArgs> = {
  title: "Templates/Patterns/Text Recipe",
  component: "hpe-text-recipe",
  tags: ["autodocs"],
  argTypes: {
    format: {
      control: { type: "select" },
      options: ["h2", "h3", "h4", "h5"],
    },
    eyebrow: { control: { type: "text" } },
    heading: { control: { type: "text" } },
    body: { control: { type: "text" } },
    buttonLabel: { control: { type: "text" } },
    useButtonGroup: { control: { type: "boolean" } },
    buttonGroupOrientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    showSecondaryAction: { control: { type: "boolean" } },
    disclaimer: { control: { type: "text" } },
    showEyebrow: { control: { type: "boolean" } },
    showBody: { control: { type: "boolean" } },
    showButton: { control: { type: "boolean" } },
    showDisclaimer: { control: { type: "boolean" } },
  },
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Playground: Story = {
  args: {
    format: "h2",
    eyebrow: "Eyebrow label (optional)",
    heading: "Content headline goes here",
    body: "No matter how unique your needs are, HPE’s edge expertise, data management tools, and proven integration capabilities can help you scale across all your edge locations.",
    buttonLabel: "Label",
    useButtonGroup: false,
    buttonGroupOrientation: "horizontal",
    showSecondaryAction: false,
    disclaimer: "Note: Times are subject to change.",
    showEyebrow: true,
    showBody: true,
    showButton: true,
    showDisclaimer: false,
  },
  tags: ["hidden"],
  render: (args) => html`
    <hpe-text-recipe
      format=${args.format}
      eyebrow=${args.eyebrow}
      heading=${args.heading}
      body=${args.body}
      button-label=${args.buttonLabel}
      button-group-orientation=${args.buttonGroupOrientation}
      disclaimer=${args.disclaimer}
      ?show-eyebrow=${args.showEyebrow}
      ?show-body=${args.showBody}
      ?show-button=${args.showButton}
      ?use-button-group=${args.useButtonGroup}
      ?show-disclaimer=${args.showDisclaimer}
    >
      ${args.showSecondaryAction
        ? html`
            <hpe-button slot="secondary-action" type="secondary" size="default"
              >Secondary Action</hpe-button
            >
          `
        : ""}
    </hpe-text-recipe>
  `,
};
