const API_KEY = 'f1b44fa279800816d1b105d3c171256f'
// const API_KEY_LOC ='c0d1509b031ada68a962812813342046'

const makeiconURL = (iconid)=> `https://openweathermap.org/img/wn/${iconid}@2x.png`

const WeatherData = async (city,units = 'metric')=>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}%20&appid=${API_KEY}&units=${units}`

    const data = await fetch(URL).then((res)=>res.json()).then((data)=>data)


    const {weather,main:{temp,feels_like ,humidity},visibility,sys:{country} ,wind:{speed},name}= data;
    
    const {description,icon} = weather[0]

    return{
        description,iconURL: makeiconURL(icon),temp,feels_like,humidity,visibility,country,speed,name
    }

} 

const LocationWeatherData = async (lat,lon,units = 'metric')=>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`

    const data = await fetch(URL).then((res)=>res.json()).then((data)=>data)


    const {weather,main:{temp},sys:{country},name}= data;
    
    const {description,icon} = weather[0]

    return{
        description,iconURL: makeiconURL(icon),temp,country,name
    }

} 


export { WeatherData ,LocationWeatherData};