import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./hpe-image-only.js";

type StoryArgs = {
  padding: "default" | "none" | "top" | "bottom" | "left-right-only";
  imageSrc: string;
  imageAlt: string;
  imageAspectRatio: "16:9" | "4:3" | "1:1" | "9:16" | "3:4" | "18:5";
};

const imageOnlyAsset =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80";

const meta: Meta<StoryArgs> = {
  title: "Templates/Stand Alone/Image Only",
  component: "hpe-image-only",
  tags: ["autodocs"],
  argTypes: {
    padding: {
      control: { type: "select" },
      options: ["default", "none", "top", "bottom", "left-right-only"],
    },
    imageSrc: { control: { type: "text" } },
    imageAlt: { control: { type: "text" } },
    imageAspectRatio: {
      control: { type: "select" },
      options: ["16:9", "4:3", "1:1", "9:16", "3:4", "18:5"],
    },
  },
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Playground: Story = {
  args: {
    padding: "default",
    imageSrc: imageOnlyAsset,
    imageAlt: "Abstract blue texture",
    imageAspectRatio: "16:9",
  },
  tags: ["hidden"],
  render: (args) => html`
    <hpe-image-only
      padding=${args.padding}
      image-src=${args.imageSrc}
      image-alt=${args.imageAlt}
      image-aspect-ratio=${args.imageAspectRatio}
    ></hpe-image-only>
  `,
};
