import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-pull-quote.js";

const meta: Meta = {
  title: "Elements/Pull Quote",
  component: "hpe-pull-quote",
  tags: ["autodocs"],
  argTypes: {
    hideQuoteSign: {
      control: { type: "boolean" },
      description: "When true, hides the decorative opening quote mark.",
      table: { defaultValue: { summary: "false" } },
    },
  },

  parameters: {
    docs: {
      description: {
        component: "Pull Quote is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Pull quotes are used to highlight notable statements and add editorial emphasis within page content. Use them to draw attention to key messaging.",
      },
    },
  },
};
export default meta;

type Story = StoryObj;

const quoteText =
  "No matter how unique your needs are, HPE's edge expertise, data management tools, and proven integration capabilities can help you scale across all your edge locations.";

export const Playground: Story = {
  args: {
    hideQuoteSign: false,
  },
  render: (args) => html`
    <div style="width: 100%; max-width: 992px; margin: 0 auto;">
      <hpe-pull-quote ?hide-quote-sign=${args.hideQuoteSign}>
        ${quoteText}
        <span slot="attribution-name">Robert Smith</span>
        <span slot="attribution-role">Chief Operating Officer at DIB</span>
      </hpe-pull-quote>
    </div>
  `,
};

export const WithoutQuoteSign: Story = {
  render: () => html`
    <hpe-pull-quote hide-quote-sign>
      ${quoteText}
      <span slot="attribution-name">Robert Smith</span>
      <span slot="attribution-role">Chief Operating Officer at DIB</span>
    </hpe-pull-quote>
  `,
};

export const QuoteOnly: Story = {
  render: () => html` <hpe-pull-quote> ${quoteText} </hpe-pull-quote> `,
};
