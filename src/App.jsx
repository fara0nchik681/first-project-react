import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Welcome from './welcome'
 import MyComponent from './components/myComponent'
import ProductCard from './components/ProductCard'
import ProductList from './components/ProductList'
import Main from './pages/Main'
import Education from './pages/Education'
import { Routes,Route } from 'react-router-dom'
import Auth from './pages/Auth'
import ProductPage from './pages/ProductPage'




function App() {
  

  return (
    <Routes>
<Route path="/" element={<Main/>}/>
<Route path="/edu" element={<Education/>}/>
<Route path="/login" element={<Auth/>}/>
<Route path ="/product/:id" element={<ProductPage/>}/>
    </Routes>

      
   

  )
}





export default App
