import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UP } from './data/passChar';

function App() {
  let [uppercase,setUppercase]=useState(false)
  let [lowercase,setLowercase]=useState(false)
  let [number,setNumber]=useState(false)
  let [symbols,setSymbols]=useState(false)
  let [passwordLen,setPasswordLen]=useState(10)
  let[fPass,setFpass]=useState('')

 let createPassword=()=>{
  let finalPass=''
  let charSet=''
  if(uppercase || lowercase || number || symbols){
    if(uppercase) charSet+=UP;
    if(lowercase) charSet+=LC;
    if(number) charSet+=NC;
    if(symbols) charSet+=SC;
    for(let i=0;i<passwordLen;i++){
       finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
    }
    setFpass(finalPass)
  }
  else{
    alert("Please one CheckBox!.....")
  }
}
let copyPass=()=>{
  navigator.clipboard.writeText(fPass)
}

  return (
    <>
      <div className='passwordBox'>
      
        <h2>Password Generator</h2>
        <div className='passwordBoxin'>
          <input type='text' value={fPass} readOnly />  <button onClick={copyPass}>Copy</button>
        </div>

        <div className='passlength'>
          <label>Password Length</label>
          <input type='number' value={passwordLen} max={20} min={10} onChange={(event)=>setPasswordLen(event.target.value)}/>
        </div>

        <div className='passlength'>
          <label>Include uppercase letters</label>
          <input type='checkbox' className='check' checked={uppercase} onClick={()=>setUppercase(!uppercase)}/>
        </div>

        <div className='passlength'>
          <label>Include lowercase letters</label>
          <input type='checkbox' className='check' checked={lowercase} onClick={()=>setLowercase(!lowercase)}/>
        </div>

        <div className='passlength'>
          <label>Include numbers </label>
          <input type='checkbox' checked={number} className='check' onClick={()=>setNumber(!number)}/>
        </div>

        <div className='passlength'>
          <label>Include symbols</label>
          <input type='checkbox' checked={symbols} className='check' onClick={()=>setSymbols(!symbols)}/>
        </div>
        <button className='btn' onClick={createPassword}>
          Generate Password</button>
      </div>
    </>
  );
}

export default App;
