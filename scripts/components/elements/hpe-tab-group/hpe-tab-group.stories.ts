import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-tab-group";

interface TabConfig {
  label: string;
  panelLabel: string;
}

interface TabGroupStoryArgs {
  activationMode: "automatic" | "manual";
  orientation: "horizontal" | "vertical";
  tabs: TabConfig[];
}

const panelPlaceholder = (label: string) => html`
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
    ${label}
  </div>
`;

const meta: Meta = {
  title: "Elements/Tab Group",
  component: "hpe-tab-group",
  tags: ["autodocs"],
  argTypes: {
    activationMode: {
      control: { type: "inline-radio" },
      options: ["automatic", "manual"],
      description: 'Tab activation mode: "automatic" | "manual"',
    },
    orientation: {
      control: { type: "inline-radio" },
      options: ["horizontal", "vertical"],
      description: 'Tab orientation: "horizontal" | "vertical"',
    },
    tabs: {
      control: { type: "object" },
      description: "Array of tab and panel configurations",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Tab Group is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Tabs are used to organize related content. They allow users to navigate between groups of information that appear within the same context. Click tabs or use arrow keys to navigate.",
      },
    },
  },
};

export default meta;

/**
 * Default tabs component with multiple tabs and panels
 */
export const Playground: StoryObj = {
  args: {
    activationMode: "automatic",
    orientation: "horizontal",
    tabs: [
      { label: "Tab Label 1", panelLabel: "Tab Panel 1 Content" },
      { label: "Tab Label 2", panelLabel: "Tab Panel 2 Content" },
      { label: "Tab Label 3", panelLabel: "Tab Panel 3 Content" },
      { label: "Tab Label 4", panelLabel: "Tab Panel 4 Content" },
    ] as TabConfig[],
  },
  render: (args) => html`
    <div style="width: 100%; max-width: 992px; margin: 0 auto;">
      <hpe-tab-group
        activation-mode=${(args as TabGroupStoryArgs).activationMode}
        orientation=${(args as TabGroupStoryArgs).orientation}
      >
        ${((args as TabGroupStoryArgs).tabs as TabConfig[]).map(
          (tab) => html`<hpe-tab slot="tab">${tab.label}</hpe-tab>`,
        )}
        ${((args as TabGroupStoryArgs).tabs as TabConfig[]).map(
          (tab) => html`
            <hpe-tab-panel slot="panel"
              >${panelPlaceholder(tab.panelLabel)}</hpe-tab-panel
            >
          `,
        )}
      </hpe-tab-group>
    </div>
  `,
};
