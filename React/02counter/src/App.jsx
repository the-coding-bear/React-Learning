import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 15
  return (
    <>
      <h1>React 1</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button>remove value</button>
    </>
  )
}

export default App
