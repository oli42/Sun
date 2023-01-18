import React, { useContext, useEffect, useState } from 'react'
import { ResultContext, myContext } from '../Context/myContext'

function Result() {

  const resultContext = useContext(myContext);

  return (
    <div>
        {resultContext?.resultState.sunrise != "0" ?  
     
        <div>
              <div className="container">
                {resultContext?.resultState.sunrise != "0" ?  
                    <p >According to your location...</p>
                : null}
                
              </div>
              <div className="result">
                {resultContext?.resultState.sunrise != "0" ?  
                    <p >The sun will rise tomorrow at {resultContext?.resultState.sunrise}.</p>
                : null}
                
              </div>
              <div className="set">
                {resultContext?.resultState.sunrise != "0" ?  
                    <p >And will set at {resultContext?.resultState.sunset}.</p>
                : null}
                
              </div>
              <div className='day'>
                {resultContext?.resultState.sunrise != "0" ?  
                <p >Lucky you! Your day length will last {resultContext?.resultState.day_length}</p>
                : null}
              </div>
        </div>
       : null}
    </div>
  )
}

export default Result
