import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

if (process.env.NODE_ENV === 'development') {
  import('./mocks/browser')
    .then((mswModule) => mswModule.worker.start())
    .catch((err) => console.error(`Failed to start MSW module ${err}`))
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
