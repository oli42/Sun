import React, { useEffect } from 'react'
import Sun from '../Components/Sun'




export default function Home() {

  return (
    <div className='home'>
      <div className='parent'>
        <div className='div1'></div>
        <div className='div2'></div>

          <div className='div3'>
            <Sun/>
          </div>
        <div className='div4'></div>
        <div className='div5'></div>
      </div>
    </div>
  )
}
