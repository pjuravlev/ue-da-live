import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-table.js";

type TableStoryArgs = {
  headerType: "default" | "gray" | "dark";
  bodyType: "default" | "stripped";
  bodyOrientation: "horizontal" | "vertical";
  headers: string[];
  rows: string[][];
};

const meta: Meta<TableStoryArgs> = {
  title: "Elements/Table",
  component: "hpe-table",
  tags: ["autodocs"],
  argTypes: {
    headerType: {
      control: { type: "inline-radio" },
      options: ["default", "gray", "dark"],
      description: 'Header row theme: "default" | "gray" | "dark"',
    },
    bodyType: {
      control: { type: "inline-radio" },
      options: ["default", "stripped"],
      description:
        'Body row theme: "default" | "stripped" (alternates white and gray rows)',
    },
    bodyOrientation: {
      control: { type: "inline-radio" },
      options: ["horizontal", "vertical"],
      description: 'Body row layout: "horizontal" | "vertical"',
    },
    headers: {
      control: { type: "object" },
      description: "Column header labels",
    },
    rows: {
      control: { type: "object" },
      description: "Table body rows rendered as arrays of cell values",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Table is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Tables are used to display structured data across rows and columns for comparison. Use header relationships and alignment to support scanning and analysis.",
      },
    },
  },
};

export default meta;

export const Playground: StoryObj<TableStoryArgs> = {
  args: {
    headerType: "default",
    bodyType: "default",
    bodyOrientation: "horizontal",
    headers: [
      "Table Heading Cell",
      "Table Heading Cell",
      "Table Heading Cell",
      "Table Heading Cell",
      "Table Heading Cell",
    ],
    rows: [
      [
        "Table Body Cell",
        "Table Body Cell",
        "Table Body Cell",
        "Table Body Cell",
        "Table Body Cell",
      ],
      [
        "Table Body Cell",
        "Table Body Cell",
        "Table Body Cell",
        "Table Body Cell",
        "Table Body Cell",
      ],
      [
        "Table Body Cell",
        "Table Body Cell",
        "Table Body Cell",
        "Table Body Cell",
        "Table Body Cell",
      ],
      [
        "Table Body Cell",
        "Table Body Cell",
        "Table Body Cell",
        "Table Body Cell",
        "Table Body Cell",
      ],
      [
        "Table Body Cell",
        "Table Body Cell",
        "Table Body Cell",
        "Table Body Cell",
        "Table Body Cell",
      ],
    ],
  },
  render: (args) => html`
    <div style="width: 100%; max-width: 992px; margin: 0 auto;">
      <hpe-table aria-label="Example data table">
        <hpe-table-header-row slot="header-row" type=${args.headerType}>
          ${args.headers.map(
            (header) => html`
              <hpe-table-header-cell>${header}</hpe-table-header-cell>
            `,
          )}
        </hpe-table-header-row>
        ${args.rows.map(
          (row) => html`
            <hpe-table-body-row
              slot="body-row"
              type=${args.bodyType}
              orientation=${args.bodyOrientation}
            >
              ${row.map(
                (cell) => html`
                  <hpe-table-body-cell>${cell}</hpe-table-body-cell>
                `,
              )}
            </hpe-table-body-row>
          `,
        )}
      </hpe-table>
    </div>
  `,
};
