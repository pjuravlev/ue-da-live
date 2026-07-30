import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-image.js";

const meta: Meta = {
  title: "Elements/Image",
  component: "hpe-image",
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: { type: "text" },
      description: "Image source URL",
    },
    alt: {
      control: { type: "text" },
      description: "Alternative text for accessibility",
      table: { defaultValue: { summary: "'Image'" } },
    },
    aspectRatio: {
      control: { type: "select" },
      options: ["16:9", "4:3", "1:1", "9:16", "3:4", "18:5"],
      description:
        'Aspect ratio: "16:9" | "4:3" | "1:1" | "9:16" | "3:4" | "18:5"',
      table: { defaultValue: { summary: "'4:3'" } },
    },
  },

  parameters: {
    docs: {
      description: {
        component: "Image is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Images are used to support storytelling, context, and visual hierarchy. Provide meaningful alt text and responsive sizing to preserve clarity and accessibility.",
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Playground: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=800&fit=crop&crop=faces",
    alt: "Portrait image",
    aspectRatio: "4:3",
  },
  render: (args) => html`
    <div style="width: 100%; max-width: 992px; margin: 0 auto;">
      <hpe-image
        src=${args.src}
        alt=${args.alt}
        aspect-ratio=${args.aspectRatio}
      ></hpe-image>
    </div>
  `,
};

export const AllAspectRatios: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div
      style="display: grid; grid-template-columns: repeat(1, 1fr); gap: 24px; max-width: 400px;"
    >
      <div>
        <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 500;">
          16:9
        </p>
        <hpe-image
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=450&fit=crop&crop=faces"
          alt="16:9 aspect ratio"
          aspect-ratio="16:9"
        ></hpe-image>
      </div>
      <div>
        <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 500;">4:3</p>
        <hpe-image
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=600&fit=crop&crop=faces"
          alt="4:3 aspect ratio"
          aspect-ratio="4:3"
        ></hpe-image>
      </div>
      <div>
        <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 500;">1:1</p>
        <hpe-image
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=800&fit=crop&crop=faces"
          alt="1:1 aspect ratio"
          aspect-ratio="1:1"
        ></hpe-image>
      </div>
      <div>
        <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 500;">
          9:16
        </p>
        <hpe-image
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1422&fit=crop&crop=faces"
          alt="9:16 aspect ratio"
          aspect-ratio="9:16"
        ></hpe-image>
      </div>
      <div>
        <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 500;">3:4</p>
        <hpe-image
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1067&fit=crop&crop=faces"
          alt="3:4 aspect ratio"
          aspect-ratio="3:4"
        ></hpe-image>
      </div>
      <div>
        <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 500;">
          18:5
        </p>
        <hpe-image
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=222&fit=crop&crop=faces"
          alt="18:5 aspect ratio"
          aspect-ratio="18:5"
        ></hpe-image>
      </div>
    </div>
  `,
};
