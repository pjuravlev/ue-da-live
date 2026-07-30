import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-card.js";
import "../hpe-image/hpe-image.js";
import "../hpe-button/hpe-button.js";
import "../hpe-button-group/hpe-button-group.js";
import "../../foundation/hpe-typography/hpe-heading/hpe-heading.js";
import "../../foundation/hpe-typography/hpe-paragraph/hpe-paragraph.js";

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
  variant: "default" | "flush";
  showMedia: boolean;
  src: string;
  alt: string;
  aspectRatio: "16:9" | "4:3" | "1:1" | "9:16" | "3:4" | "18:5";
  showHeader: boolean;
  tagline: string;
  heading: string;
  body: string;
  showFooter: boolean;
  showActions: boolean;
  orientation: "horizontal" | "vertical";
  buttons: ButtonConfig[];
};

const defaultButtons: ButtonConfig[] = [
  {
    label: "Learn more",
    type: "link-primary",
    size: "default",
    disabled: false,
    showLeftIcon: false,
    showRightIcon: false,
  },
  {
    label: "Contact us",
    type: "link-neutral",
    size: "default",
    disabled: false,
    showLeftIcon: false,
    showRightIcon: false,
  },
];

const slotPlaceholder = (label: string) => html`
  <div
    style="
      min-height: 56px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border: 1px dashed var(--hpe-web-color-border-strong, #7764fc);
      background: var(--hpe-web-color-background-primary-soft, rgba(119, 100, 252, 0.18));
      color: var(--hpe-web-color-text-strong, #201a29);
      font: var(--hpe-web-type-label-small, 600 0.875rem/1.2 sans-serif);
    "
  >
    ${label}
  </div>
`;

const meta: Meta<StoryArgs> = {
  title: "Elements/Card",
  component: "hpe-card",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "flush"],
      description: 'Card presentation: "default" | "flush"',
      table: { defaultValue: { summary: "'default'" } },
    },
    showMedia: {
      control: { type: "boolean" },
      description: "Whether to render the media slot.",
    },
    src: {
      control: { type: "text" },
      description: "Image source URL",
    },
    alt: {
      control: { type: "text" },
      description: "Alternative text for accessibility",
      table: { defaultValue: { summary: "'Image'" } },
    },
    aspectRatio: {
      control: { type: "select" },
      options: ["16:9", "4:3", "1:1", "9:16", "3:4", "18:5"],
      description:
        'Aspect ratio: "16:9" | "4:3" | "1:1" | "9:16" | "3:4" | "18:5"',
      table: { defaultValue: { summary: "'4:3'" } },
    },
    showHeader: {
      control: { type: "boolean" },
      description: "Whether to render supportive content in the header slot.",
    },
    tagline: {
      control: { type: "text" },
      description: "Tagline slot content.",
    },
    heading: {
      control: { type: "text" },
      description: "Heading slot content.",
    },
    body: {
      control: { type: "text" },
      description: "Body slot content.",
    },
    showFooter: {
      control: { type: "boolean" },
      description: "Whether to render supporting footer content.",
    },
    showActions: {
      control: { type: "boolean" },
      description: "Whether to render actions in the story example.",
    },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: 'Action group orientation: "horizontal" | "vertical"',
    },
    buttons: {
      control: { type: "object" },
      description:
        "Array of button configs. Add, remove, or edit items in Storybook controls to change the card action group.",
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
        component:
          "Card is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Cards are used to group related content and actions into a scannable container. Use them to present summaries, highlights, and linked destinations consistently.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<StoryArgs>;

const defaultArgs: StoryArgs = {
  variant: "default",
  showMedia: true,
  src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=740&h=462&fit=crop",
  alt: "Abstract blue glass texture",
  aspectRatio: "16:9",
  showHeader: false,
  tagline: "Tagline label",
  heading: "Content headline goes here",
  body: "No matter how unique your needs are, HPE's edge expertise, data management tools, and proven integration capabilities can help you scale across all your edge locations.",
  showFooter: false,
  showActions: true,
  orientation: "vertical",
  buttons: defaultButtons,
};

const renderCard = (args: StoryArgs) => html`
  <hpe-card variant=${args.variant} style="max-width: 370px;">
    ${args.showMedia
      ? html`
          <hpe-image
            slot="media"
            src=${args.src}
            alt=${args.alt}
            aspect-ratio=${args.aspectRatio}
          ></hpe-image>
        `
      : ""}
    ${args.showHeader
      ? html` <div slot="header">${slotPlaceholder("Header slot")}</div> `
      : ""}
    <span slot="tagline">${args.tagline}</span>
    <span slot="heading">${args.heading}</span>
    <hpe-paragraph slot="body" size="md">${args.body}</hpe-paragraph>
    ${args.showFooter
      ? html` <div slot="footer">${slotPlaceholder("Footer slot")}</div> `
      : ""}
    ${args.showActions
      ? html`
          <hpe-button-group slot="actions" orientation=${args.orientation}>
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
          </hpe-button-group>
        `
      : html`<span slot="actions" hidden aria-hidden="true"></span>`}
  </hpe-card>
`;

export const Playground: Story = {
  args: defaultArgs,
  render: (args) => renderCard(args),
};

export const Default: Story = {
  args: defaultArgs,
  render: (args) => renderCard(args),
};

export const Flush: Story = {
  args: {
    ...defaultArgs,
    variant: "flush",
  },
  render: (args) => renderCard(args),
};
