import type { Meta, StoryObj } from "@storybook/react";

import { SideNavigation } from "./SideNavigation";

const meta = {
  title: 'ui/SideNavigation',
  component: SideNavigation,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'onClick' }
  },
} satisfies Meta<typeof SideNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CurrentPath: Story = {
  args: {
    routes: [{
      title: "Select Template",
      description: "Express",
      path: "/select-template",
    }, {
      title: "Version",
      path: "/version",
    }, {
      title: "Language",
      path: "/language"
    }],
  }
}
