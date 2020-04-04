/** @jsx jsx */
import { useContext, useState } from 'react'
import { jsx, css } from '@emotion/core'
import { useTransition, animated } from 'react-spring'

import ToastContext from './toastContext'
import Toast from './Toast'

const Toasting = () => {
  const { toasts } = useContext(ToastContext)
  const [refMap] = useState(() => new Map())

  const transitions = useTransition(toasts, (toast) => toast.toast, {
    enter: (item) => async (next) => {
      await next({
        opacity: 1,
        height: refMap.get(item.toast).clientHeight + 16,
      })
    },
    leave: (item) => async (next) => {
      refMap.delete(item.toast)
      await next({ opacity: 0, height: 0 })
    },
    from: { opacity: 0, height: 0 },
  })

  return (
    <div
      css={css`
        position: fixed;
        bottom: 16px;
        right: 16px;
      `}
    >
      <ul>
        {transitions.map(({ item, props, key }) => (
          <animated.li key={key} style={props}>
            <div ref={(ref) => ref && refMap.set(item.toast, ref)}>
              <Toast key={item.toast} {...item} />
            </div>
          </animated.li>
        ))}
      </ul>
    </div>
  )
}

export default Toasting
