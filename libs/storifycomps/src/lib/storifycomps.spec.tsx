import { render } from '@testing-library/react'

import Storifycomps from './storifycomps'

describe('Storifycomps', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Storifycomps />)
    expect(baseElement).toBeTruthy()
  })
})
