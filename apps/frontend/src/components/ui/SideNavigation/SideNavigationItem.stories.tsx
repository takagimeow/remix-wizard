import type { Meta, StoryObj } from "@storybook/react";

import { SideNavigationItem } from "./SideNavigationItem";
import { languages, templates } from "../../../utils/constants";

const meta = {
  title: 'ui/SideNavigationItem',
  component: SideNavigationItem,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'onClick' }
  },
} satisfies Meta<typeof SideNavigationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CurrentPath: Story = {
  args: {
    title: "Select Template",
    description: "Express",
    path: "/select-template",
    isCurrent: true,
  }
}

export const NotCurrentPath: Story = {
  args: {
    title: "Select Template",
    description: "Express",
    path: "/select-template",
    isCurrent: false,
  }
}