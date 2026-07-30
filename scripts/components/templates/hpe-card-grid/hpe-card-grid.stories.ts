import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-card-grid.js";
import "../../elements/hpe-card/hpe-card.js";

const meta: Meta = {
  title: "Templates/Card Grid",
  component: "hpe-card-grid",
  tags: ["autodocs"],
  argTypes: {
    padding: {
      control: { type: "select" },
      options: ["default", "none", "top", "bottom", "left-right-only"],
      description: "Section padding variant",
    },
    heading: {
      control: { type: "text" },
      description: "Optional intro heading override (legacy alias)",
    },
    introFormat: {
      control: { type: "select" },
      options: ["h2", "h3", "h4", "h5"],
      description: "Intro text recipe format",
    },
    introHeading: {
      control: { type: "text" },
      description: "Intro heading text",
    },
    showIntro: {
      control: { type: "boolean" },
      description: "Whether to render the intro text recipe",
    },
    introEyebrow: {
      control: { type: "text" },
      description: "Intro eyebrow copy",
    },
    introBody: {
      control: { type: "text" },
      description: "Intro body copy",
    },
    introButtonLabel: {
      control: { type: "text" },
      description: "Intro CTA label",
    },
    showIntroButton: {
      control: { type: "boolean" },
      description: "Whether to render the intro CTA button",
    },
    columns: {
      control: { type: "select" },
      options: [1, 2, 3, 4],
      description: "Number of columns: 1 | 2 | 3 | 4 (default: 3)",
      table: { defaultValue: { summary: "3" } },
    },
  },
};
export default meta;

type Story = StoryObj;

const cardImage =
  "https://www.figma.com/api/mcp/asset/a7e86587-af93-4488-b2ff-d8a0652fd722";

/** Reusable hpe-card item used in grid stories. */
const cardItem = (title: string, body: string) => html`
  <hpe-card>
    <img slot="media" src=${cardImage} alt="Abstract blue texture" />
    <span slot="eyebrow">Eyebrow label (optional)</span>
    <h3 slot="heading">${title}</h3>
    <p>${body}</p>
    <a slot="cta" href="#">Label</a>
  </hpe-card>
`;

export const Playground: Story = {
  args: {
    padding: "default",
    showIntro: true,
    introFormat: "h2",
    heading: "Content headline goes here",
    introHeading: "Content headline goes here",
    introEyebrow: "Eyebrow label (optional)",
    introBody:
      "No matter how unique your needs are, HPE's edge expertise, data management tools, and proven integration capabilities can help you scale across all your edge locations.",
    introButtonLabel: "Label",
    showIntroButton: true,
    columns: 3,
  },
  tags: ["hidden"],
  render: (args) => html`
    <hpe-card-grid
      padding=${args.padding}
      columns=${args.columns}
      heading=${args.heading}
      intro-format=${args.introFormat}
      intro-heading=${args.introHeading}
      intro-eyebrow=${args.introEyebrow}
      intro-body=${args.introBody}
      intro-button-label=${args.introButtonLabel}
      ?show-intro=${args.showIntro}
      ?show-intro-button=${args.showIntroButton}
    >
      ${cardItem("Card 1", "Description for card one.")}
      ${cardItem("Card 2", "Description for card two.")}
      ${cardItem("Card 3", "Description for card three.")}
      ${cardItem("Card 4", "Description for card four.")}
      ${cardItem("Card 5", "Description for card five.")}
      ${cardItem("Card 6", "Description for card six.")}
    </hpe-card-grid>
  `,
};
