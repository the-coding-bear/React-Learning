import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
 let [counter, setCounter] = useState(15)
 
  //let counter = 15

  const addValue = () => {
    setCounter((prevCounter) =>{
      if(prevCounter<20){
        const newCounter = prevCounter +1
        console.log('clicked' , newCounter);
        return newCounter
      }else{
        console.log('Counter cannot greater than 20');
        return prevCounter
      }
    });

  }

  const removeValue = () => {
    setCounter((prevCounter) =>{
      if(prevCounter>0){
        return prevCounter - 1;
      }else{
        console.log('Counter cannot be negative');
        return prevCounter
      }
    });

  }

  return (
    <>
     <h1>Code and React</h1>
     <h2>Counter value : {counter}</h2>

     <button
     onClick={addValue}
     >Add value{counter}</button>
     <br />
     <button
     onClick={removeValue}
     >Remove value{counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
