import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Welcome from './welcome'
 


function App() {
  

  return (
    <div class="flex flex-col gap-40">
    <Header/>
    <Welcome/>

    </div>
   
   

  )
}





export default App
