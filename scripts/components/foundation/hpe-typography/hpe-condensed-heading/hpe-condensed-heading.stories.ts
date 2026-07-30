import type { Meta, StoryObj } from "@storybook/web-components";
import { html, nothing } from "lit";
import "./hpe-condensed-heading.js";

const meta: Meta = {
  title: "Foundation/Typography/Condensed Heading",
  component: "hpe-condensed-heading",
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: { type: "select" },
      options: [undefined, "div", "span"],
      description:
        'Render tag override for typography-only usage. Defaults to the semantic heading element implied by "level".',
    },
    level: {
      control: { type: "select" },
      options: ["h1", "h2"],
    },
    size: {
      control: { type: "select" },
      options: ["auto", "display"],
    },
    weight: {
      control: { type: "select" },
      options: ["regular", "bold", "light"],
    },
  },

  parameters: {
    docs: {
      description: {
        component:
          "Condensed Heading is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Condensed headings are used for high-impact display text where strong visual emphasis is needed. Pair semantic heading levels with condensed typographic styling.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Playground: Story = {
  args: {
    as: undefined,
    level: "h1",
    size: "display",
    weight: "bold",
  },
  render: (args) => html`
    <hpe-condensed-heading
      level=${args.level}
      size=${args.size}
      weight=${args.weight}
      as=${args.as ?? nothing}
    >
      Heading
    </hpe-condensed-heading>
  `,
};

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div style="display: grid; gap: 1.5rem;">
      <hpe-condensed-heading level="h1" size="display" weight="bold"
        >Heading</hpe-condensed-heading
      >
      <hpe-condensed-heading level="h1" size="display" weight="regular"
        >Heading</hpe-condensed-heading
      >
      <hpe-condensed-heading level="h1" size="display" weight="light"
        >Heading</hpe-condensed-heading
      >
      <hpe-condensed-heading level="h1" weight="bold"
        >Heading</hpe-condensed-heading
      >
      <hpe-condensed-heading level="h1" weight="regular"
        >Heading</hpe-condensed-heading
      >
      <hpe-condensed-heading level="h1" weight="light"
        >Heading</hpe-condensed-heading
      >
      <hpe-condensed-heading level="h2" weight="bold"
        >Heading</hpe-condensed-heading
      >
      <hpe-condensed-heading level="h2" weight="regular"
        >Heading</hpe-condensed-heading
      >
      <hpe-condensed-heading level="h2" weight="light"
        >Heading</hpe-condensed-heading
      >
    </div>
  `,
};

export const TypographyOnly: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div style="display: grid; gap: 1.5rem;">
      <hpe-condensed-heading level="h2" as="span">
        Inline condensed heading-styled text
      </hpe-condensed-heading>
      <hpe-condensed-heading level="h1" size="display" weight="bold" as="div">
        Block condensed heading-styled text
      </hpe-condensed-heading>
    </div>
  `,
};
