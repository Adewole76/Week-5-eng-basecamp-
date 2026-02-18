import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/Login'
import DashBoard from '../pages/DashBoard'
import ProfilePage from '../pages/Profile'
import ProjectBoard from '../pages/ProjectBoard'
import ProjectsProject from '../pages/Projects'
import NavBar from './Navbar'

function App() {
 
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<LoginPage></LoginPage>}/>
    <Route path='/dashboard' element={<DashBoard></DashBoard>}/>
    <Route path='/profile' element={<ProfilePage></ProfilePage>}/>
    <Route path='/projects' element={<ProjectBoard></ProjectBoard>}/>
    <Route path='/projects/:id' element={<ProjectsProject></ProjectsProject>}/>
    <Route path='/{root}'/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
