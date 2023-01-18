import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './App.scss'
import './index.css'
import Home from './Pages/Home'
import Sun from './Components/Sun'
import Result from './Components/Result'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='body'>
      <Home/>
    </div>
  </React.StrictMode>,
)
