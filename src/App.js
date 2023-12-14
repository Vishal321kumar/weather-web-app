import { useEffect, useState  } from "react";
import "./App.css";
import ClockandTemp from "./ClockTemp";
import Container2 from "./container2";
import { WeatherData , LocationWeatherData } from "./weatherService";
import weathericon from './images/WeatherIcons.gif'


function App() {

  const [weather,setWeather] = useState(null)
  const [locWeather,setLocWeather] = useState(null)
  const [city,setCity] = useState("delhi")

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  console.log("app render")

 useEffect(()=>{
     const fetchWeatherData = async () => {

       try{
        const data = await WeatherData(city);
        setWeather(data)
        console.log(data) 
       }
       catch(error){
        alert("Enter Valid City Name")
       }

     }
     fetchWeatherData();
 },[city])


 useEffect(() => {
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
          fetchLocWeatherData(latitude, longitude);
          console.log(latitude,longitude);
        },
        (error) => {
          console.error('Error getting location:',error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };
  
  const fetchLocWeatherData = async (latitude,longitude) => {
    const data2 = await LocationWeatherData(latitude,longitude);
    setLocWeather(data2)
    console.log(data2) 
  }
  
  getLocation();
  
}, [latitude,longitude,]);





  return (
    <div className="App">


    
    
    {weather && locWeather ?(
        <div className="container">

        <div className="container1">
          <div className="location-cont">
             <div>{locWeather.name}<br/>{locWeather.country}</div>
             
          </div>          
          
            <ClockandTemp/>

            <div className="temp-cont">{locWeather.temp.toFixed()}&#8451;</div>
            {/* &#8457; for fahrenheit*/}
            </div>
            
            
            <div className="container2">
            <Container2 weather={weather} locWeather={locWeather} setCity={setCity}></Container2>
            </div>
            </div>
            
            
            )
            
            : (<div className="black-box">
            <img src={weathericon} alt="loading" />
            <div className="loading-content">Detecting Your Location...<br/>
            
           <p className="smalltext"> your current location will be used for displaying the real time weather on your screen</p> </div>
          </div>)
            
            
          }
          
          
          <div className="container-out">Developed by Vishal Kumar</div>
          </div>
          );
        }

export default App;
