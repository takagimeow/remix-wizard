import type { Meta, StoryObj } from "@storybook/react";
import { DirectoryNameInput } from "./DirectoryNameInput";

const meta = {
  title: 'page/DirectoryNameInput',
  component: DirectoryNameInput,
  argTypes: {
    onChange: { action: 'onChange' },
  },
} satisfies Meta<typeof DirectoryNameInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
}