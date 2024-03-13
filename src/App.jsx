import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './count'
import Team from './Team'
import User from './user'
import Friends from './Friends'


function App() {
  
  
  function handalClick(){
    alert ('button click')
  }

  return (
    <>

      
      <h3>React core concepts 2</h3>
      <Friends></Friends>
      <User></User>
      <Count></Count>
      <Team></Team>
      <button onClick={handalClick}>Click</button>

      
    </>
  )
}

export default App
