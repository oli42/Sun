import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.scss'
import './index.css'
import Home from './Pages/Home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
      <Home/>
    </div>
  </React.StrictMode>,
)
