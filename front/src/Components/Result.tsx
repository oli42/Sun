import React, { useContext, useEffect, useState } from 'react'
import { ResultContext, myContext } from '../Context/myContext'

function Result() {

  const resultContext = useContext(myContext);
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    if(resultContext?.resultState.sunrise === '0')
      setTimer(0)
    else if ( resultContext?.resultState.sunrise !== '0' && timer < 10){
      setTimeout(()=> {
        setTimer(timer + 1)
      }, 1000)
    }
    
  }, [timer, resultContext?.resultState.sunrise !== '0'])


  return (
    <div>

        {resultContext?.resultState.sunrise != "0" && (timer >= 0)?  
        <div>
              <div className="hello">
                    <p >Hello!</p>
              </div>
        </div>
        : null
        }     
        {resultContext?.resultState.sunrise != "0" && (timer >= 2)?  
        <div>
              <div className="container">
                    <p >According to your location...</p>
              </div>
        </div>
        : null
        }
        {resultContext?.resultState.sunrise != "0" && (timer >= 4)?  
        <div>
              <div className="result">
                    <p >Tomorrow the sun will rise at {resultContext?.resultState.sunrise}.</p>
              </div>
        </div>
        : null
        }
        {resultContext?.resultState.sunrise != "0" && timer >= 7 ?  
        <div>
              <div className="set">
                    <p >And will set at {resultContext?.resultState.sunset}.</p>
              </div>
        </div>
        : null
        }
        {resultContext?.resultState.sunrise != "0" && timer >= 9 ?  
        <div>
              <div className='day'>
                <p >Lucky you! Your day length will last {resultContext?.resultState.day_length} hours.</p>
              </div>
        </div>
        : null
        }
    </div>
  )
}

export default Result
