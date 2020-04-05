import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Card from '../Card'
import * as ToastContext from '../toastContext'

describe('Card', () => {
  const addToast = jest.fn()
  jest
    .spyOn(ToastContext, 'useToastContext')
    .mockImplementation(() => ({ addToast }))

  it('should render properly', () => {
    const { container } = render(<Card />)
    expect(container).toMatchSnapshot()
  })

  it('should create toasts on click', async () => {
    const { container } = render(<Card />)
    const button = container.querySelector('button')

    fireEvent.click(button, {
      target: button,
    })

    expect(addToast).toHaveBeenCalled()
  })
})
