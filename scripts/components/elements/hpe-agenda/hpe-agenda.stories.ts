import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './hpe-agenda.js';

const sessions = [
  {
    time: '8:00 a.m.-5:00 p.m.',
    title: 'Welcome Breakfast',
    description:
      'HPE Discover Cafe in HPE Discover Showcase\nLevel 2, Hall B',
  },
  {
    time: '8:00 a.m.-5:00 p.m.',
    title: 'Welcome Breakfast',
    description:
      'HPE Discover Cafe in HPE Discover Showcase\nLevel 2, Hall B',
  },
  {
    time: '8:00 a.m.-5:00 p.m.',
    title: 'Welcome Breakfast',
    description:
      'HPE Discover Cafe in HPE Discover Showcase\nLevel 2, Hall B',
  },
  {
    time: '8:00 a.m.-5:00 p.m.',
    title: 'Welcome Breakfast',
    description:
      'HPE Discover Cafe in HPE Discover Showcase\nLevel 2, Hall B',
  },
  {
    time: '8:00 a.m.-5:00 p.m.',
    title: 'Welcome Breakfast',
    description:
      'HPE Discover Cafe in HPE Discover Showcase\nLevel 2, Hall B',
  },
] as const;

const meta: Meta = {
  title: 'Elements/Agenda',
  component: 'hpe-agenda',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "Agenda is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Agenda components are used to present time-based information in a clear sequence. Use them to help users scan sessions, timing, and event flow quickly.",
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    format: {
      control: { type: 'select' },
      options: ['alternating', 'border', 'no-border'],
      description:
        'Visual format for the agenda rows: alternating, border, or no-border.',
      table: { defaultValue: { summary: 'alternating' } },
    },
  },
};

export default meta;

type Story = StoryObj;

const renderAgenda = (format: 'alternating' | 'border' | 'no-border') => html`
  <hpe-agenda format=${format}>
    ${sessions.map(
      (session) => html`
        <hpe-agenda-row>
          <span slot="time">${session.time}</span>
          <p slot="title">${session.title}</p>
          <p slot="description">${session.description}</p>
        </hpe-agenda-row>
      `,
    )}
  </hpe-agenda>
`;

export const Alternating: Story = {
  args: {
    format: 'alternating',
  },
  render: (args) => renderAgenda(args.format),
};

export const Border: Story = {
  args: {
    format: 'border',
  },
  render: (args) => renderAgenda(args.format),
};

export const NoBorder: Story = {
  args: {
    format: 'no-border',
  },
  render: (args) => renderAgenda(args.format),
};