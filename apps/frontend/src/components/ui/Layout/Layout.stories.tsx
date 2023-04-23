import type { Meta, StoryObj } from "@storybook/react";

import { Layout } from "./Layout";
import { Select } from "../Select/Select";
import { languages } from "../../../utils/constants";

const meta = {
  title: 'ui/Layout',
  component: Layout,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CurrentPath: Story = {
  args: {
    title: "Remix Wizard",
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
    children: (
      <Select title={`Language`} label={`Which language do you want to use?`} options={languages} />
    )
  }
}
