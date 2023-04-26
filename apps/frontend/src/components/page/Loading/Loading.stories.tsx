import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./Loading";

const meta = {
  title: 'page/Loading',
  component: Loading,
  argTypes: {
    onChange: { action: 'onChange' },
  },
} satisfies Meta<typeof Loading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
}