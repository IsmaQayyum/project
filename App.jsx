import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

import { Route, Routes } from 'react-router-dom'
import Frangrance from './Pages/Frangrance'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Detailpage from './Pages/Detailpage'
import Card from './Components/Card'
import Product from './Components/Product'
import Productdetail from './Pages/Productdetail'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar womenText="Clothing" men="Brand"/>

 <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/men' element={<Men/>}></Route>
  <Route path='/women' element={<Women/>}></Route>
  <Route path='/frangrance' element={<Frangrance/>}></Route>
  <Route path='/kids' element={<Kids/>}></Route>
  <Route path='/card' element={<Card/>}></Route>
  <Route path='/card/:id' element={<Detailpage/>}></Route>
  <Route path='/product' element={<Product/>}></Route>
  <Route path='/product/:id' element={<Productdetail/>}></Route>
 </Routes>
    </>
  )
}

export default App
