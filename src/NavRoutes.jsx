import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/home/Index.jsx' 
import Aboutus from './pages/aboutus/Index.jsx'
import Contactus from './pages/contactus/Index.jsx'
import MenuCategory from './pages/menucategory/Index.jsx'
import MenuDetail from './pages/menudetail/Index.jsx'

export default function NavRoutes() {
  return (
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path={'about-us-page'} element={<Aboutus/>} />
        <Route path={'contact-us-page'} element={<Contactus/>} />
        <Route path={'menu-category'} element={<MenuCategory/>} />
        <Route path='menu-category/menu-details' element = {<MenuDetail/>}/>
    </Routes>    
  )
}