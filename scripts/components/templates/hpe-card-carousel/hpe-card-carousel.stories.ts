import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-card-carousel.js";
import "../../elements/hpe-card/hpe-card.js";

type StoryArgs = {
  padding: "default" | "none" | "top" | "bottom" | "left-right-only";
  heading: string;
  visibleCards: number;
  showIntro: boolean;
  introFormat: "h2" | "h3" | "h4" | "h5";
  introHeading: string;
  introEyebrow: string;
  introBody: string;
  introButtonLabel: string;
  showIntroButton: boolean;
};

const meta: Meta<StoryArgs> = {
  title: "Templates/Card Carousel",
  component: "hpe-card-carousel",
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
    showIntro: {
      control: { type: "boolean" },
      description: "Whether to render the intro text recipe",
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
    visibleCards: {
      control: { type: "number" },
      description: "How many cards are visible at once (default 4)",
      table: { defaultValue: { summary: "4" } },
    },
  },
};
export default meta;

type Story = StoryObj<StoryArgs>;

const cardImage =
  "https://www.figma.com/api/mcp/asset/bbf132f1-1412-4580-bacb-f90e61fece21";

function cardItem(title: string, description: string) {
  return html`
    <hpe-card>
      <img slot="media" src=${cardImage} alt="Abstract blue texture" />
      <h3 slot="heading">${title}</h3>
      <p>${description}</p>
      <a slot="cta" href="#">Label</a>
    </hpe-card>
  `;
}

export const Playground: Story = {
  args: {
    padding: "default",
    heading: "Content headline goes here",
    visibleCards: 4,
    showIntro: true,
    introFormat: "h2",
    introHeading: "Content headline goes here",
    introEyebrow: "Eyebrow label (optional)",
    introBody:
      "No matter how unique your needs are, HPE's edge expertise, data management tools, and proven integration capabilities can help you scale across all your edge locations.",
    introButtonLabel: "Label",
    showIntroButton: true,
  },
  tags: ["hidden"],
  render: (args) => html`
    <hpe-card-carousel
      padding=${args.padding}
      heading=${args.heading}
      .visibleCards=${Math.max(1, args.visibleCards)}
      ?show-intro=${args.showIntro}
      intro-format=${args.introFormat}
      intro-heading=${args.introHeading}
      intro-eyebrow=${args.introEyebrow}
      intro-body=${args.introBody}
      intro-button-label=${args.introButtonLabel}
      ?show-intro-button=${args.showIntroButton}
    >
      ${cardItem(
        "Card 1",
        "This is a description for the first card in the carousel.",
      )}
      ${cardItem(
        "Card 2",
        "This is a description for the second card in the carousel.",
      )}
      ${cardItem(
        "Card 3",
        "This is a description for the third card in the carousel.",
      )}
      ${cardItem(
        "Card 4",
        "This is a description for the fourth card in the carousel.",
      )}
      ${cardItem(
        "Card 5",
        "This is a description for the fifth card in the carousel.",
      )}
      ${cardItem(
        "Card 6",
        "This is a description for the sixth card in the carousel.",
      )}
    </hpe-card-carousel>
  `,
};
