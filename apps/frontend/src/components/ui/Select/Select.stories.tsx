import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";
import { languages, templates } from "../../../utils/constants";

const meta = {
  title: 'ui/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'onChange' }
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Template: Story = {
  args: {
    title: "Template",
    label: "What template of Remix do you want to use?",
    options: templates,
  }
}

export const Language: Story = {
  args: {
    title: "Language",
    label: "Which language do you want to use?",
    options: languages,
  }
}