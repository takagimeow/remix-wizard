---
name: 'create-page-component'
root: '.'
output: '**/*'
ignore: []
questions:
  name: 'Please enter component name (e.g. MyComponent)'
---

# Variables

- name: `{{ inputs.name | pascal }}`

# `{{ name }}/{{ name }}.tsx`

```tsx
import React from "react";

export interface {{ name }}Props {

}

export function {{ name }}({}: {{ name }}Props) {
  return (
    <div>
      <h1>{{ inputs.name | pascal}}</h1>
    </div>
  );
}
```

# `{{ name }}/{{ name }}.page.tsx`

```tsx
import React from "react";
import { Outlet } from "react-router-dom";
import { {{ name }} } from "./{{ name }}"

export function {{ name }}Page() {
  return (
    <Outlet />
  );
}

export function {{ name }}IndexPage() {
  return (
    <{{ name }} />
  )
}
```

# `{{ name }}/index.tsx`

```ts
export { {{ name }}Page, {{ name }}IndexPage } from "./{{ name }}.page";
export { {{ name }} } from "./{{ name }}"
```

# `{{ name }}/{{ name }}.stories.tsx`

```tsx
import type { Meta, StoryObj } from "@storybook/react";

import { {{ name }} } from "./{{ name }}";

const meta = {
  title: 'ui/{{ name }}',
  component: {{ name }},
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'onClick' }
  },
} satisfies Meta<typeof {{ name }}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {}
}

export const Secondary: Story = {
  args: {}
}
```

# `{{ name }}/{{ name }}.module.css`

```tsx
.wrapper {

}

.header {

}

.buttonWrapper {

}

.button {

}
```
