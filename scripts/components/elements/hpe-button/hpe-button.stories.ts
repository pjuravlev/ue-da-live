import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-button.js";

const iconTemplate = (
  slot: "start-icon" | "end-icon",
  direction: "back" | "forward",
) => {
  const path =
    direction === "back" ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7";

  return html`
    <span slot=${slot} aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        width="24"
        height="24"
      >
        <path d=${path} />
      </svg>
    </span>
  `;
};

const meta: Meta = {
  title: "Elements/Buttons/Button",
  component: "hpe-button",
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "secondary", "link-primary", "link-neutral"],
      description:
        'Visual type: "primary" | "secondary" | "link-primary" | "link-neutral"',
      table: { defaultValue: { summary: "'primary'" } },
    },
    size: {
      control: { type: "select" },
      options: ["small", "default", "large"],
      description: 'Size variant: "small" | "default" | "large"',
      table: { defaultValue: { summary: "'default'" } },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
      table: { defaultValue: { summary: "false" } },
    },
    showLeftIcon: {
      control: { type: "boolean" },
      description: "Whether to show the fallback leading arrow icon",
      table: { defaultValue: { summary: "false" } },
    },
    showRightIcon: {
      control: { type: "boolean" },
      description: "Whether to show the fallback trailing arrow icon",
      table: { defaultValue: { summary: "true" } },
    },
  },

  parameters: {
    docs: {
      description: {
        component: "Button is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Buttons are used to trigger actions and move users through flows. Choose variants and labels that clearly communicate intent and priority.",
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Playground: Story = {
  args: {
    type: "primary",
    size: "default",
    disabled: false,
    showLeftIcon: false,
    showRightIcon: true,
  },
  render: (args) => html`
    <hpe-button
      type=${args.type}
      size=${args.size}
      ?disabled=${args.disabled}
      ?show-left-icon=${args.showLeftIcon}
      ?show-right-icon=${args.showRightIcon}
    >
      Button
    </hpe-button>
  `,
};

export const Types: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div
      style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;"
    >
      <hpe-button type="primary">Primary</hpe-button>
      <hpe-button type="secondary">Secondary</hpe-button>
      <hpe-button type="link-primary">Link Primary</hpe-button>
      <hpe-button type="link-neutral">Link Neutral</hpe-button>
    </div>
  `,
};

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div
      style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;"
    >
      <hpe-button size="small">Small</hpe-button>
      <hpe-button size="default">Default</hpe-button>
      <hpe-button size="large">Large</hpe-button>
    </div>
  `,
};

export const SlottedIcons: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div
      style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;"
    >
      <hpe-button>
        ${iconTemplate("start-icon", "back")} Start icon
      </hpe-button>
      <hpe-button> End icon ${iconTemplate("end-icon", "forward")} </hpe-button>
      <hpe-button>
        ${iconTemplate("start-icon", "back")} Both icons
        ${iconTemplate("end-icon", "forward")}
      </hpe-button>
    </div>
  `,
};
