import React, { useContext, useEffect, useState } from 'react'
import Sun from '../Components/Sun'
import Result from '../Components/Result'
import { ResultContext, myContext } from '../Context/myContext'


export default function Home() {


  const [resultState, setResultState] = useState({sunrise: '0', sunset: '0', day_length: '0'})
  const resultContext = useContext(myContext)

  return (
    <myContext.Provider value={{resultState, setResultState}}>
      <Sun/>
      <Result/>
    </myContext.Provider>
  )
}
