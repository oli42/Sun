import { useEffect, useState } from "react";
import TheSun from '../utils/sounds/TheSun.mp3'
import { Howl } from "howler"

export default function Sun(props:any){

    const [result, setResult] = useState({"results": {
        "sunrise": "",
        "sunset": "",
        "first_light": "7:44:58 AM",
        "last_light": "2:37:01 AM",
        "dawn": "9:11:59 AM",
        "dusk": "1:10:00 AM",
        "solar_noon": "5:10:59 PM",
        "golden_hour": "11:57:57 PM",
        "day_length": "",
        "timezone": "UTC"
      }})
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)

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
          setResult(result);
          console.log('result', result);
          playMp3(TheSun);
          
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
        <div> 
            <button  onClick={getData}>Here comes the sun... according to your location</button>
                {result.results.sunrise != "" ?  
            <div >
                <p>sunrise: {result.results.sunrise}</p>
                <p>sunset: {result.results.sunset}</p>
                <p>day length: {result.results.day_length}</p>
            </div>
                : null}
     
        </div>
    )

}