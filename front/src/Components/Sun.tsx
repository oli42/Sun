import { useContext, useEffect, useState } from "react";
import TheSun from '../sounds/TheSun.mp3'
import { Howl } from "howler"
// import Result from "./Result";
import { ResultContext, myContext } from "../Context/myContext";
import Result from "./Result";

export default function Sun(props:any){



    // const [result, setResult] = useState({"results": {
    //     "sunrise": " ",
    //     "sunset": " ",
    //     "first_light": "7:44:58 AM",
    //     "last_light": "2:37:01 AM",
    //     "dawn": "9:11:59 AM",
    //     "dusk": "1:10:00 AM",
    //     "solar_noon": "5:10:59 PM",
    //     "golden_hour": "11:57:57 PM",
    //     "day_length": "",
    //     "timezone": "UTC"
    //   }})

    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const resultContext = useContext(myContext)
    console.log('resultContext', resultContext)

    const playMp3 = (src: any) => {
        const sound = new Howl({
          src, 
          html5: true,
        });
        sound.play()
      };
    

    async function getData() {
          let url = `https://api.sunrisesunset.io/json?lat=${latitude}/&lng=${longitude}`;
      
          const response = await fetch(url);          
          if (!response.ok) {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
          }
  
          const result = await response.json();
          console.log(result)
          // setResult(result.results);
          playMp3(TheSun);
          setTimeout(() =>{

            resultContext?.setResultState(result.results)
          }, 3000)
          
        }

      useEffect(() =>{

            navigator.geolocation.getCurrentPosition(position => {
              const { latitude, longitude } = position.coords;
                console.log(position);
                setLatitude((position.coords.latitude));
                setLongitude((position.coords.longitude))
      
            })
    },[])
   

    return (
        <div className="flower">
            <button onClick={getData}></button>
        </div>
    )

}