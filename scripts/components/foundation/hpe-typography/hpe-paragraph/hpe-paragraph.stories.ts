import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { nothing } from "lit";
import "./hpe-paragraph.js";

const meta: Meta = {
  title: "Foundation/Typography/Paragraph",
  component: "hpe-paragraph",
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["p", "div", "span"],
      description:
        'Render tag override for typography-only usage. Defaults to "p".',
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "disclaimer"],
    },
  },

  parameters: {
    docs: {
      description: {
        component:
          "Paragraph is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Paragraph text is used for primary long-form reading content. Use size variants to support hierarchy and readability across layouts.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Playground: Story = {
  args: {
    as: "p",
    size: "md",
  },
  render: (args) => html`
    <hpe-paragraph size=${args.size} as=${args.as ?? nothing}
      >Paragraph</hpe-paragraph
    >
  `,
};

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div style="display: grid; gap: 1.5rem;">
      <hpe-paragraph size="lg">Paragraph</hpe-paragraph>
      <hpe-paragraph size="md">Paragraph</hpe-paragraph>
      <hpe-paragraph size="sm">Paragraph</hpe-paragraph>
      <hpe-paragraph size="disclaimer">Paragraph</hpe-paragraph>
    </div>
  `,
};

export const TypographyOnly: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div style="display: grid; gap: 1.5rem;">
      <hpe-paragraph size="md" as="span"
        >Inline paragraph-styled text</hpe-paragraph
      >
      <hpe-paragraph size="lg" as="div"
        >Block paragraph-styled text</hpe-paragraph
      >
    </div>
  `,
};
