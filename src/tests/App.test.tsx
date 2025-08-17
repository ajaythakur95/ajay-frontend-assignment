import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'

test('renders navbar links', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  expect(screen.getByText(/Home/i)).toBeInTheDocument()
  expect(screen.getByText(/Projects/i)).toBeInTheDocument()
  expect(screen.getByText(/Skills/i)).toBeInTheDocument()
  expect(screen.getByText(/Contact/i)).toBeInTheDocument()
})
