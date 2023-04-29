import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button';
import { vitest } from 'vitest';

test("should render button with text", async () => {
  // ARRANGE
  render(<Button text="Click" />)

  // ACT
  const button = screen.getByText('Click')

  // ASSERT
  expect(button).toBeInTheDocument()
});

test('should onClick be called when button is clicked', async () => {
  const mockOnClick = vitest.fn();
  // ARRANGE
  render(<Button text="Click" onClick={mockOnClick} />)

  // ACT
  userEvent.click(screen.getByText('Click'))

  // ASSERT
  expect(mockOnClick).toHaveBeenCalled()
})

test('should be disabled when disabled is true', async () => {
  // ARRANGE
  render(<Button text="Click" disabled={true} />)

  // ACT
  const button = screen.getByText('Click')

  // ASSERT
  expect(button).toBeDisabled()
});