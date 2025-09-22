import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [city,setCity]=useState('')
  let [wDetails,setWdetails]=useState()
  let [isLoading,setIsloading]=useState(false)
  let [counter,setCounter]=useState(1)
  let getData=(event)=>{
    setIsloading(true)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},PK&appid=751d66e130befad396405dc13796a57c&units=metric`)
    .then((res)=>res.json())
    .then((finalRes)=>{
      if(finalRes.cod=="404"){
        setWdetails(undefined)
      }
      else{
          setWdetails(finalRes)
      }
      setIsloading(false)
    })
    event.preventDefault()
    setCity('')
  }

  let changeCounter=()=>{
   setCounter(counter+1)
  }

  useEffect(()=>{
    console.log("munir jamil")
  },[counter])

  return (
    <div className="container">
    {counter}
    <button className='btn' onClick={changeCounter}>Count</button>
      <div className='cont1'>
        <h1 className='cont2'>Simple weather App</h1>

        <form onSubmit={getData}>
          <input type='text' value={city} onChange={(e)=>setCity(e.target.value)} className='input' placeholder='City Name'/><button className='btn'>Submit</button>
        </form>

        <div className='cont3'>

           <img src='https://media.tenor.com/AYFTckMqK9kAAAAm/discord-discordgifemoji.webp' className={isLoading
            ?
           'img1'
           :
           'img2'}/>

          {wDetails!==undefined
          ?
          <>
          <h3 className='had'>{wDetails.name} <span className='span'>
            {wDetails.sys.country}
          </span></h3>
          <h2 className='had2'>{wDetails.main.temp}</h2>
          <img src={`http://openweathermap.org/img/w/${wDetails.weather[0].icon}.png`}/>
          <p>{wDetails.weather[0].description}</p>
          </>
          :
          "No Data"
          } 
        </div>
      </div>
    </div>
  );
}

export default App;
