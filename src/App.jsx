import React from 'react'
import Products from './components/products/Products.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import Resturant from './components/resturant/Resturant.jsx'
import Pizza from './components/meals/Pizza.jsx'

export default function App() {
  return (
    <>
    <Navbar/>
     <Routes>
        <Route path='/products' element={<Products/>}/>
        <Route path='/resturant' element={<Resturant/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<h1 className='text-center my-4'>Page Not Found</h1>}/>
     </Routes>
    <Footer/>
    
    </>
  )
}
