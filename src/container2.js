import React, { useState } from 'react'
import './container2.css';
import logo from './images/forecast.png'
import search from './images/search (1).png'
import storm from './images/storm.png'
import cloudyday from './images/cloudy-day.png'
import smoke from './images/smoke.png'
import haze from './images/haze.png'
import clouds from './images/clouds.png'
import clearsky from './images/full-moon.png'
import raining from './images/raining.png'
import snow from './images/snow.png'
import mist from './images/mist.png'
import wind from './images/wind.png'
import sun from './images/sun.png'


const Container2 = ({weather,locWeather,setCity}) => {

  console.log('container 2 render')

  const [inputvalue,setInputvalue]=useState("")


  const weatherImageMap = {
    // Add more entries based on your weather descriptions
    storm: storm,
    cloudy: cloudyday,
    smoke: smoke,
    haze: haze,
    mist:mist,
    rain:raining,
    wind:wind,
    sunny:sun,
    'light rain':raining,
    'moderate rain':raining,
    thunderstorm:storm,
    snow:snow,
    'broken clouds':clouds,
    'overcast clouds':clouds,
    'clear sky' :clearsky,
    default: weather.iconURL,
  };

  const getWeatherImage = (description) => {
    // Convert description to lowercase for case-insensitive matching
    const key = description.toLowerCase();
    return weatherImageMap[key] || weatherImageMap.default;
  };  

  function handleSearch(e){ 
    console.log(inputvalue) 
    setCity(inputvalue)
    setInputvalue("")  
  }

  function handleChange(e){
    setInputvalue(e.target.value)
  }
  function handleKey(e){
    if(e.key === 'Enter' && e.target.value!=="") { 
      handleSearch()
    }
  }


  return (
    <>

    {weather ?
     <img src={getWeatherImage(locWeather.description)} className='render-img' alt='n/a' />
    :logo }
    <div className='cont2'>{locWeather.description}</div> 
    <hr className='hrtop'/>
    

    <div className='input-field'>
    <input type='text'  value={inputvalue} className='input-class'  onChange={handleChange} onKeyDown={handleKey} placeholder='Search City...'></input>
    <button className='btn'  onClick={handleSearch} >  <img src={search}  className='search-logo' alt='loading...' /></button>
    </div>

    <div className='entry'>
    <div className='entry-city'>
      <img src={getWeatherImage(weather.description)} className='2nd-img' alt='n/a' /></div>
    {weather.name},{weather.country}
    
     
    <hr/>
    <div className='temp-entry'>
      <div>Temperature</div>
      <div>{weather.temp.toFixed()} &#8451; </div>
    </div>

    <hr/>
    <div className='humid-entry'>
      <div>Humidity</div>
      <div>{weather.humidity} %</div>
    </div>
    <hr/>
    <div className='visib-entry'>
      <div>Visibility</div>
      <div>{weather.visibility} mi</div>
    </div>
    <hr/>
    <div className='wind-entry'>
      <div>Wind</div>
      <div>{weather.speed} Km/h</div>
    </div>
    </div>

    </>
  )
}

export default Container2;
