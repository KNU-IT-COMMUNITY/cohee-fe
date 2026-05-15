import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Checkbox } from "@/shared/ui/checkbox";

const meta = {
  title: "Shared UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    label: "Accept terms",
    description: "I agree to the terms and conditions.",
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      canvas: {
        className: "sb-tight-preview",
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
