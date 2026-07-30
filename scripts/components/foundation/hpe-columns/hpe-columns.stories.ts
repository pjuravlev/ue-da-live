import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-columns.js";

type ColumnsVariant =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "40:60"
  | "60:40"
  | "33:66"
  | "66:33"
  | "20:80"
  | "80:20";

type StoryArgs = {
  columns: ColumnsVariant;
  orientation: "horizontal" | "vertical";
  order: "default" | "reverse";
};

const meta: Meta<StoryArgs> = {
  title: "Foundation/Columns",
  component: "hpe-columns",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Columns is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Columns are used to create responsive multi-column layouts for related content regions. Use layout variants to balance hierarchy and readability across breakpoints.",
      },
    },
    layout: "fullscreen",
  },
  argTypes: {
    columns: {
      control: { type: "select" },
      options: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "40:60",
        "60:40",
        "33:66",
        "66:33",
        "20:80",
        "80:20",
      ],
      description:
        "Layout variant: '1' | '2' | '3' | '4' | '5' | '40:60' | '60:40' | '33:66' | '66:33' | '20:80' | '80:20'",
      table: { defaultValue: { summary: "'2'" } },
    },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "Layout direction: 'horizontal' | 'vertical'",
      table: { defaultValue: { summary: "'horizontal'" } },
    },
    order: {
      control: { type: "select" },
      options: ["default", "reverse"],
      description: "Item order: 'default' | 'reverse'",
      table: { defaultValue: { summary: "'default'" } },
    },
  },
};

export default meta;

type Story = StoryObj<StoryArgs>;

const placeholder = (label: string) => html`
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

const getColumnCount = (columns: ColumnsVariant) =>
  columns.includes(":") ? 2 : Number(columns);

const renderColumns = (args: StoryArgs) => {
  const count = getColumnCount(args.columns);
  const items = Array.from({ length: count }, (_, index) => {
    const slotName = `column-${index + 1}`;
    return html`<div slot=${slotName}>
      ${placeholder(`Column ${index + 1}`)}
    </div>`;
  });

  return html`
    <hpe-columns
      columns=${args.columns}
      orientation=${args.orientation}
      order=${args.order}
    >
      ${items}
    </hpe-columns>
  `;
};

export const Playground: Story = {
  args: {
    columns: "2",
    orientation: "horizontal",
    order: "default",
  },
  render: (args) => renderColumns(args),
};
