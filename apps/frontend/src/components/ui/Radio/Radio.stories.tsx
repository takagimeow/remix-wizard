import type { Meta, StoryObj } from "@storybook/react";

import { Radio } from "./Radio";

const meta = {
  title: 'ui/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'onChange' }
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NpmInstall: Story = {
  args: {
    title: "Install Dependencies",
    label: "Do you want to install dependencies?",
  }
}
