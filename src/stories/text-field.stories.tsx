import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { TextField } from "@/shared/ui/text-field";

const meta = {
  title: "Shared UI/TextField",
  component: TextField,
  tags: ["autodocs"],
  args: {
    className: "w-80",
    label: "Email",
    type: "email",
    placeholder: "name@example.com",
    helperText: "Helper text",
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      canvas: {
        className: "sb-tight-preview",
      },
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Filled: Story = {
  args: {
    className: "w-80",
    type: "text",
    label: "Label",
    defaultValue: "Input value",
    helperText: "Supporting text",
  },
};

export const Error: Story = {
  args: {
    className: "w-80",
    label: "Error",
    placeholder: "Invalid input",
    errorText: "Error message",
  },
};

export const Disabled: Story = {
  args: {
    className: "w-80",
    label: "Disabled",
    defaultValue: "Disabled value",
    disabled: true,
  },
};
