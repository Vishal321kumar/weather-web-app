import Clock from 'react-live-clock';
import './App.css'

const ClockandTemp = () => {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let day = days[d.getDay()];
    let datec = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
  
    return `${day}, ${datec} ${month} ${year}`;
  };


  return (
    
          <div className="date-time-cont">
            <div className="time-cont"><Clock format="HH:mm:ss" interval={1000} ticking={true} /></div>
            <div className="date-cont">{dateBuilder(new Date())}</div>
          </div>

    
  )
}

export default ClockandTemp;
