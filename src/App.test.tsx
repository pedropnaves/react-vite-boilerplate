import { expect, it, describe } from 'vitest'
import App from './App'
import { render, screen } from './utils/test-utils'

describe('Simple working test', () => {
  it('Should be an example of a test', () => {
    render(<App />)
    expect(screen.getByText('Menu')).toBeInTheDocument()
  })
})
