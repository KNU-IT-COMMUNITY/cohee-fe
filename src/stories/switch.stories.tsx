import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Switch } from "@/shared/ui/switch";

const meta = {
  title: "Shared UI/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: {
    label: "Airplane mode",
    description: "Turn off wireless connections.",
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      canvas: {
        className: "sb-tight-preview",
      },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Off: Story = {};

export const On: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
