
import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Home'
import Salles from './Salles'
import Product from './product'
import Add from './Add'

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/salles' element={<Salles />}></Route>
    <Route path='/products' element={<Product />}></Route>
    <Route path='/add-product' element={<Add />}></Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App