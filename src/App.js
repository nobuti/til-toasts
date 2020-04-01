/** @jsx jsx */
import {Fragment} from 'react'
import {Global, jsx, css} from '@emotion/core'

import {reset} from './util/reset'

function App() {
  return (
    <Fragment>
    <Global styles={reset} />
    <section css={css`
      height: 100vh;
      background-color: #2548f5;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    `}>Wadus</section>
    </Fragment>
  );
}

export default App;
