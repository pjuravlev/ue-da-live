import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-horizontal-rule.js";

const meta: Meta = {
  title: "Elements/Horizontal Rule",
  component: "hpe-horizontal-rule",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Horizontal Rule is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Horizontal rules are used to separate related content sections and reinforce visual structure. Use them to create lightweight division between content blocks.",
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Playground: Story = {
  render: () => html`
    <div style="width: 100%; max-width: 992px; margin: 0 auto;">
      <hpe-horizontal-rule></hpe-horizontal-rule>
    </div>
  `,
};

export const InContext: Story = {
  render: () => html`
    <div style="width: 100%; max-width: 992px; margin: 0 auto;">
      <div
        style="display: flex; flex-direction: column; gap: 24px; padding: 24px;"
      >
        <p>Content above the rule</p>
        <hpe-horizontal-rule></hpe-horizontal-rule>
        <p>Content below the rule</p>
      </div>
    </div>
  `,
};
