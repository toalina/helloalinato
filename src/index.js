import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './routes/App'
import ScrollToTop from './routes/ScrollToTop'
// import ScrollMemory from 'react-router-scroll-memory'

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
)
