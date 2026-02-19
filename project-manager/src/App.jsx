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
import UserAuthenticationProvider from '../Context/AuthContext'
import LayoutComponent from './layout'

function App() {
  return (
  <BrowserRouter>
  <UserAuthenticationProvider>
    <LayoutComponent></LayoutComponent>
  </UserAuthenticationProvider>
  </BrowserRouter>
  )
}

export default App
