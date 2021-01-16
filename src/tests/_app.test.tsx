import { render, fireEvent } from '@testing-library/react'

import '@tests/test-utils'
import Home from '@pages/index'

describe('Home page', () => {
  it('should render Home Page', () => {
    render(<Home />)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking button triggers alert', () => {
    const { getByText } = render(<Home />, {})
    window.alert = jest.fn()
    fireEvent.click(getByText('Test Button'))
    expect(window.alert).toHaveBeenCalledWith('Button is Clicked!')
  })
})
