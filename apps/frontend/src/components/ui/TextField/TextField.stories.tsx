import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "./TextField";

const meta = {
  title: 'ui/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'onChange' }
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Directory name",
    label: "Where would you like to create your app?",
  }
}

export const WithPlaceholder: Story = {
  args: {
    title: "Directory name",
    label: "Where would you like to create your app?",
    placeholder: "./my-remix-app"
  }
}

export const WithValidator: Story = {
  args: {
    title: "Directory name",
    label: "Where would you like to create your app?",  
    validator: (value: string) => {
      if (!value.match(/^((\.?\/?)?([a-z0-9_-]*))+$/)) {
        return false;
      }
      return true;
    }
  }
}