import type { Meta, StoryObj } from "@storybook/react";
import { SelectRemixVersion } from "./SelectRemixVersion";

const meta = {
  title: 'page/SelectRemixVersion',
  component: SelectRemixVersion,
  argTypes: {
    onChange: { action: 'onChange' },
  }
} satisfies Meta<typeof SelectRemixVersion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  
}