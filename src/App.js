/** @jsx jsx */
import { useEffect } from 'react'
import { Global, jsx, css } from '@emotion/core'

import { reset } from './util/reset'
import { ToastProvider } from './components/toastContext'
import Card from './components/Card'

function App() {
  useEffect(() => {
    const container = document.querySelector('#overlays')
    if (!container) {
      const overlays = document.createElement('div')
      overlays.setAttribute('id', 'overlays')
      document.body.appendChild(overlays)
    }
  }, [])

  return (
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
    </ToastProvider>
  )
}

export default App
