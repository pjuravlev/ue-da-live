import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-section.js";

const meta: Meta = {
  title: "Foundation/Section",
  component: "hpe-section",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Section is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Sections are used to group related content into meaningful page regions with consistent spacing. Use them to organize long pages into clear content blocks.",
      },
    },
    layout: "fullscreen",
  },
  argTypes: {
    padding: {
      control: { type: "select" },
      options: ["default", "none", "top", "bottom", "left-right-only"],
      description:
        "Padding variant: 'default' | 'none' | 'top' | 'bottom' | 'left-right-only'",
      table: { defaultValue: { summary: "'default'" } },
    },
  },
};

export default meta;

type Story = StoryObj;

const placeholder = html`
  <div
    style="
      min-height: 56px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border: 1px dashed var(--hpe-web-color-border-strong, #7764fc);
      background: var(
        --hpe-web-color-background-primary-soft,
        rgba(119, 100, 252, 0.18)
      );
      color: var(--hpe-web-color-text-strong, #201a29);
      font: var(--hpe-web-type-label-small, 600 0.875rem/1.2 sans-serif);
    "
  >
    Section Content
  </div>
`;

export const Playground: Story = {
  args: { padding: "default" },
  render: (args) => html`
    <hpe-section padding=${args.padding}>${placeholder}</hpe-section>
  `,
};
