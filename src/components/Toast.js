/** @jsx jsx */
import { useEffect, useCallback, useRef } from 'react'
import { jsx, css } from '@emotion/core'

import { useToastContext } from './toastContext'
import Button from './form/Button'

import { ReactComponent as X } from '../assets/x.svg'

export const factory = (type) => {
  const settings = {
    atom: {
      color: '#2548f5',
      title: 'Pet project',
      message: 'Time to code!',
    },
    ghost: {
      color: '#f58325',
      title: 'Terror movie',
      message: "Don't forget the popcorns!",
    },
    virus: {
      color: '#f5eb25',
      title: 'Oh no',
      message: 'Take a break, make some soup and stay safe!',
    },
    lego: {
      color: '#e425f5',
      title: 'Parenting',
      message: 'Time to play!',
    },
    heart: {
      color: '#f52537',
      title: 'Overcoming COVID-19',
      message: 'Distant but together!',
    },
  }

  return settings[type]
}

const TTL = 5 * 1000

const Toast = ({ color, title, message, toast }) => {
  const { removeToast } = useToastContext()
  const remove = useCallback(() => removeToast(toast), [removeToast, toast])

  const eta = useRef(TTL)

  useEffect(() => {
    const timeout = setTimeout(remove, eta.current)
    const created = new Date()

    return () => {
      const now = new Date()
      eta.current = eta.current - (now - created)
      clearTimeout(timeout)
    }
  }, [remove, toast])

  return (
    <div
      css={css`
        border-radius: 4px;
        width: 240px;
        border-left-style: solid;
        border-left-width: 12px;
        border-left-color: ${color};
        padding: 16px;
        background-color: #fff;
        position: relative;
        box-shadow: 0 2px 12px #10248a;
      `}
    >
      <h2
        css={css`
          font-size: 14px;
          font-weight: 500;
          color: #444;
          margin-bottom: ${message ? 4 : 0}px;
        `}
      >
        {title}
      </h2>
      {message && (
        <p
          css={css`
            font-size: 12px;
            font-weight: 400;
            color: #888;
          `}
        >
          {message}
        </p>
      )}

      <Button
        onClick={remove}
        css={css`
          background: transparent;
          padding: 0;
          width: 24px;
          height: 24px;
          color: #ababab;
          position: absolute;
          top: 8px;
          right: 8px;

          svg {
            width: 16px;
            height: 16px;
          }
        `}
      >
        <X />
      </Button>
    </div>
  )
}

export default Toast
