import type { Meta, StoryObj } from "@storybook/react";
import { SelectLanguage } from "./SelectLanguage";

const meta = {
  title: 'page/SelectLanguage',
  component: SelectLanguage,
  argTypes: {
    onChange: { action: 'onChange' },
  },
} satisfies Meta<typeof SelectLanguage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
}