import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Radio } from './Radio';
import { vitest } from 'vitest';

const title = "Install Dependencies"
const label = "Do you want to install dependencies?"

test("should render radio with text", async () => {
  // ARRANGE
  render(<Radio title={title} label={label} />)

  // ACT
  const radio = screen.getByText(title)

  // ASSERT
  expect(radio).toBeInTheDocument()
});