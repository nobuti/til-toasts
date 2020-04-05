import React from 'react'
import { render } from '@testing-library/react'

import Toasting from '../Toasting'
import * as ToastContext from '../toastContext'

describe('Toasting', () => {
  jest.spyOn(ToastContext, 'useToastContext').mockImplementation(() => ({
    toasts: [
      {
        toast: 1,
        color: '#2548f5',
        title: 'Wadus',
        message: 'Wadus wadus!',
      },
      {
        toast: 2,
        color: '#fabada',
        title: 'Bogus',
        message: 'Bogus wadus!',
      },
    ],
  }))

  it('should render properly', () => {
    const { container } = render(<Toasting />)
    expect(container).toMatchSnapshot()
  })
})
