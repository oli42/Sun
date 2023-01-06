import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Form from './Components/Form'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <Form/>
  </React.StrictMode>,
)
