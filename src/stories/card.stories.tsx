import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

const meta = {
  title: "Shared UI/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      canvas: {
        className: "sb-tight-preview",
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[22rem]">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>
          Cards contain content and actions about a single subject.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-muted-foreground">
          This is supporting text that describes the card content.
        </p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Action</Button>
        <Button size="sm" variant="ghost">
          Dismiss
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const Compact: Story = {
  render: () => (
    <Card className="w-[22rem] p-5">
      <CardTitle>Elevated card</CardTitle>
      <CardDescription className="mt-2">
        Use cards to group related content and actions.
      </CardDescription>
    </Card>
  ),
};
