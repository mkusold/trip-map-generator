import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './app'

test('renders', () => {
  render(<App />)
  const element = screen.getByText(/Home/i)
  expect(element).toBeInTheDocument()
})
