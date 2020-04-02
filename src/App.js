/** @jsx jsx */
import { Fragment, useEffect } from 'react'
import { Global, jsx, css } from '@emotion/core'

import { reset } from './util/reset'

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
    <Fragment>
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
        Wadus
      </section>
    </Fragment>
  )
}

export default App
