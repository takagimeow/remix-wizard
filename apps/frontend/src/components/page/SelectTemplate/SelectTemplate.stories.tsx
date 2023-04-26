import type { Meta, StoryObj } from "@storybook/react";
import { SelectTemplate } from "./SelectTemplate";

const meta = {
  title: 'page/SelectTemplate',
  component: SelectTemplate,
  argTypes: {
    onChange: { action: 'onChange' },
  },
} satisfies Meta<typeof SelectTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {

  }
}
