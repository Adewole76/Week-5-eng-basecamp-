import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import loginPage from '../pages/Login'
import dashBoard from '../pages/DashBoard'
import profilePage from '../pages/Profile'
import projectBoard from '../pages/ProjectBoard'
import projectsProject from '../pages/Projects'
import NavBar from './Navbar'

function App() {

  return (
  <BrowserRouter>
  <NavBar></NavBar>
  <Routes>
    <Route path='/' element={<loginPage></loginPage>}/>
    <Route path='/dashboard' element={<dashBoard></dashBoard>}/>
    <Route path='/profile' element={<profilePage></profilePage>}/>
    <Route path='/projects' element={<projectBoard></projectBoard>}/>
    <Route path='/projects/:id' element={<projectBoard></projectBoard>}/>
    <Route path='/{root}'/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
