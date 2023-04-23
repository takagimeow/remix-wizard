import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: 'ui/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'onClick' }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Next: Story = {
  args: {
    text: "Next",
  }
}
export const Back: Story = {
  args: {
    text: "Back",
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    text: "Disabled",
  }
}