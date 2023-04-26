import type { Meta, StoryObj } from "@storybook/react";
import { InstallDeps } from "./InstallDeps";

const meta = {
  title: 'page/InstallDeps',
  component: InstallDeps,
  argTypes: {
    onChange: { action: 'onChange' },
  },
} satisfies Meta<typeof InstallDeps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
}