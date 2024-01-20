import React from 'react'
import {Routes, Route, Router} from 'react-router-dom'
import HomePage from './pages/home' 
import Aboutus from './pages/aboutus'
import Contactus from './pages/contactus'
import MenuCategory from './pages/menucategory'
import MenuDetail from './pages/menudetail/MenuDetail'

export default function NavRoutes() {
  return (

      <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path={'/about-us-page'} element={<Aboutus/>} />
          <Route path={'/contact-us-page'} element={<Contactus/>} />
          <Route path={'/menu-category'} element={<MenuCategory/>}/>
          <Route path='/menu-category/menu-details' element = {<MenuDetail/>}/>
      
      </Routes>  

  
  )
}