import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Note from './Note'
import { vi } from 'vitest'

test('clicking the button calls event handler once', async () => {
  const note = {
    content: 'Does not work anymore',
    important: true
  }

  const mockHandler = vi.fn()

  render(
    <Note note={note} toggleImportance={mockHandler} />
  )

  const element = screen.queryByText('do u render?')
  expect(element).toBeNull()

  /*const element = screen.getByText('Component testing is done with react-testing library')

  screen.debug(element)*/

})