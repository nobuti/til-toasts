/** @jsx jsx */
import { useContext } from 'react'
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'

import ToastContext from './toastContext'
import Button from './form/Button'
import { factory } from './Toast'

import { ReactComponent as Atom } from '../assets/atom.svg'
import { ReactComponent as Ghost } from '../assets/ghost.svg'
import { ReactComponent as Virus } from '../assets/virus.svg'
import { ReactComponent as Lego } from '../assets/lego.svg'
import { ReactComponent as Heart } from '../assets/heart.svg'

const Action = styled(Button)`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  padding: 0;

  svg {
    width: 48px;
    height: 48px;
    stroke-width: 1.25;
  }
`

const Card = () => {
  const { addToast } = useContext(ToastContext)

  return (
    <ul
      css={css`
        display: flex;

        li + li {
          margin-left: 24px;
        }
      `}
    >
      <li>
        <Action
          css={css`
            color: #2548f5;
          `}
          onClick={() => addToast(factory('atom'))}
        >
          <Atom />
        </Action>
      </li>

      <li>
        <Action
          css={css`
            color: #f58325;
          `}
          onClick={() => addToast(factory('ghost'))}
        >
          <Ghost />
        </Action>
      </li>

      <li>
        <Action
          css={css`
            color: #f5eb25;
          `}
          onClick={() => addToast(factory('virus'))}
        >
          <Virus />
        </Action>
      </li>

      <li>
        <Action
          css={css`
            color: #e425f5;
          `}
          onClick={() => addToast(factory('lego'))}
        >
          <Lego />
        </Action>
      </li>

      <li>
        <Action
          css={css`
            color: #f52537;
          `}
          onClick={() => addToast(factory('heart'))}
        >
          <Heart />
        </Action>
      </li>
    </ul>
  )
}

export default Card
