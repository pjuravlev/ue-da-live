import type { Meta, StoryObj } from "@storybook/web-components";
import { html, nothing } from "lit";
import "./hpe-heading.js";

const meta: Meta = {
  title: "Foundation/Typography/Heading",
  component: "hpe-heading",
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
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    size: {
      control: { type: "select" },
      options: ["auto", "xs", "sm", "md", "lg", "xl", "display"],
    },
  },

  parameters: {
    docs: {
      description: {
        component:
          "Heading is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Headings are used to communicate content hierarchy and improve page scannability. Choose semantic levels that reflect document structure and accessibility needs.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Playground: Story = {
  args: {
    as: undefined,
    level: "h2",
    size: "auto",
  },
  render: (args) => html`
    <hpe-heading level=${args.level} size=${args.size} as=${args.as ?? nothing}>
      Heading
    </hpe-heading>
  `,
};

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div style="display: grid; gap: 1.5rem;">
      <hpe-heading level="h1" size="display">Heading</hpe-heading>
      <hpe-heading level="h1">Heading</hpe-heading>
      <hpe-heading level="h2">Heading</hpe-heading>
      <hpe-heading level="h3">Heading</hpe-heading>
      <hpe-heading level="h4">Heading</hpe-heading>
      <hpe-heading level="h5">Heading</hpe-heading>
      <hpe-heading level="h6">Heading</hpe-heading>
    </div>
  `,
};

export const TypographyOnly: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div style="display: grid; gap: 1.5rem;">
      <hpe-heading level="h5" as="span">Inline heading-styled text</hpe-heading>
      <hpe-heading level="h3" as="div">Block heading-styled text</hpe-heading>
    </div>
  `,
};
