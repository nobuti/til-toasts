/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'

import { reset } from './util/reset'
import { ToastProvider } from './components/toastContext'
import Card from './components/Card'
import Toasting from './components/Toasting'

const App = () => (
  <ToastProvider>
    <Global styles={reset} />
    <section
      css={css`
        height: 100vh;
        background-color: #2548f5;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <Card />
    </section>

    <Toasting />
  </ToastProvider>
)

export default App
