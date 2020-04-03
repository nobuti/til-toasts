/** @jsx jsx */
import { useContext } from 'react'
import { jsx, css } from '@emotion/core'

import ToastContext from './toastContext'
import Button from './form/Button'

const Card = () => {
  const { toasts, addToast } = useContext(ToastContext)
  console.log(toasts)

  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <Button onClick={() => addToast({ type: 'wadus' })}>Wadus</Button>
    </div>
  )
}

export default Card
