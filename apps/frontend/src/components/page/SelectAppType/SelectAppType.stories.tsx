import type { Meta, StoryObj } from "@storybook/react";
import { SelectAppType } from "./SelectAppType";

const meta = {
  title: 'page/SelectAppType',
  component: SelectAppType,
  argTypes: {
    onChange: { action: 'onChange' },
  },
} satisfies Meta<typeof SelectAppType>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
}
