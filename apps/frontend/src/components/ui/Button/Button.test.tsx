import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button';
import { vitest } from 'vitest';

test('should onClick be called when button is clicked', async () => {
  const mockOnClick = vitest.fn();
  // ARRANGE
  render(<Button text="Click" onClick={mockOnClick} />)

  // ACT
  userEvent.click(screen.getByText('Click'))

  // ASSERT
  expect(mockOnClick).toHaveBeenCalled()
})