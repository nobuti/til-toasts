/** @jsx jsx */
import { useContext } from 'react'
import { jsx, css } from '@emotion/core'

import ToastContext from './toastContext'
import Toast from './Toast'

const Toasting = () => {
  const { toasts } = useContext(ToastContext)

  return (
    <ul
      css={css`
        position: fixed;
        bottom: 16px;
        right: 16px;

        li + li {
          margin-top: 16px;
        }
      `}
    >
      {toasts.map((t) => (
        <li>
          <Toast key={t.toast} {...t} />
        </li>
      ))}
    </ul>
  )
}

export default Toasting
