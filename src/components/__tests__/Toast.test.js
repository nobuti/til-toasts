import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { advanceBy, advanceTo, clear } from 'jest-date-mock'

import Toast from '../Toast'
import * as ToastContext from '../toastContext'

describe('Toast', () => {
  const removeToast = jest.fn()
  jest
    .spyOn(ToastContext, 'useToastContext')
    .mockImplementation(() => ({ removeToast }))

  const toast = { color: '#2548f5', title: 'Wadus', message: 'wadus wadus!' }

  beforeEach(() => {
    advanceTo(new Date(2020, 3, 5, 0, 0, 0)) // reset to date time.
  })

  afterEach(clear)

  it('should render properly', () => {
    const { container } = render(<Toast {...toast} />)
    expect(container).toMatchSnapshot()
  })

  it('should hide on click', async () => {
    const { container } = render(<Toast {...toast} />)
    const button = container.querySelector('button')

    fireEvent.click(button, {
      target: button,
    })

    expect(removeToast).toHaveBeenCalled()
  })

  it('should hide after 5 seconds', async () => {
    render(<Toast {...toast} />)

    advanceBy(6000) // advance time 6 seconds

    expect(removeToast).toHaveBeenCalled()
  })
})
