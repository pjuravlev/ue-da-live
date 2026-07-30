import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-x-stack.js";

type StackGap = "xs" | "sm" | "md" | "lg";

type StoryArgs = {
  gap: StackGap;
};

const meta: Meta<StoryArgs> = {
  title: "Foundation/Stacks/X Stack",
  component: "hpe-x-stack",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "X Stack is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Horizontal stacks are used to align related items in a row with consistent spacing. Use gap variants to maintain rhythm while composing controls and metadata.",
      },
    },
    layout: "fullscreen",
  },
  argTypes: {
    gap: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg"],
      description: "Gap variant: 'xs' | 'sm' | 'md' | 'lg'",
      table: { defaultValue: { summary: "'xs'" } },
    },
  },
};

export default meta;

type Story = StoryObj<StoryArgs>;

const placeholder = (label: string) => html`
  <div
    style="
      min-height: 56px;
      min-width: 180px;
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

export const Playground: Story = {
  args: {
    gap: "xs",
  },
  render: (args) => html`
    <hpe-x-stack gap=${args.gap}>
      ${placeholder("Item 1")} ${placeholder("Item 2")} ${placeholder("Item 3")}
    </hpe-x-stack>
  `,
};
