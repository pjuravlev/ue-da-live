import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-carousel.js";

type StoryArgs = {
  visibleSlides: number;
  showControls: boolean;
  showSlideCount: boolean;
  slideCount: number;
};

const meta: Meta<StoryArgs> = {
  title: "Elements/Carousel",
  component: "hpe-carousel",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Carousel is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Carousels are used to browse multiple pieces of related content within a constrained space. Use previous/next controls to navigate through items while preserving context.",
      },
    },
    layout: "fullscreen",
  },
  argTypes: {
    visibleSlides: {
      control: { type: "number" },
      description: "Number of visible slides at once.",
      table: { defaultValue: { summary: "1" } },
    },
    showControls: {
      control: { type: "boolean" },
      description: "Whether navigation controls are shown.",
      table: { defaultValue: { summary: "true" } },
    },
    showSlideCount: {
      control: { type: "boolean" },
      description:
        "Whether to render the slide count label on small viewports.",
      table: { defaultValue: { summary: "false" } },
    },
    slideCount: {
      control: { type: "number" },
      description: "Number of placeholder slides to render in the story.",
      table: { defaultValue: { summary: "3" } },
    },
  },
};

export default meta;

type Story = StoryObj<StoryArgs>;

const placeholderSlide = (label: string) => html`
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

export const Playground: Story = {
  args: {
    visibleSlides: 1,
    showControls: true,
    showSlideCount: false,
    slideCount: 3,
  },
  render: (args) => html`
    <div style="width: 100%; margin: 0 auto;">
      <hpe-carousel
        .visibleSlides=${Math.max(1, args.visibleSlides)}
        ?show-controls=${args.showControls}
        ?show-slide-count=${args.showSlideCount}
      >
        ${Array.from({ length: Math.max(1, args.slideCount) }, (_, index) =>
          placeholderSlide(`Slide ${index + 1}`),
        )}
      </hpe-carousel>
    </div>
  `,
};
