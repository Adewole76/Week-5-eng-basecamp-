import { useLocation } from "react-router-dom";
import{Routes, Route} from "react-router-dom"
import LoginPage from '../pages/Login'
import DashBoard from '../pages/DashBoard'
import ProfilePage from '../pages/Profile'
import ProjectBoard from '../pages/ProjectBoard'
import ProjectsProject from '../pages/Projects'
import NavBar from './Navbar'
import ProtectedRoutesComponent from "./ProtectedRoutes";
const LayoutComponent = () => {
    const location = useLocation()
  const showNavbar = location.pathname !== '/';
    return(
     <main>
     {showNavbar?<NavBar></NavBar>:''}
     <Routes>
       <Route path='/' element={<LoginPage></LoginPage>}/>
       <Route path='/dashboard' element={
       <ProtectedRoutesComponent>
       <DashBoard></DashBoard>
       </ProtectedRoutesComponent>
       }/>
       <Route path='/profile' element={
       <ProtectedRoutesComponent>
       <ProfilePage></ProfilePage>
       </ProtectedRoutesComponent>
       }/>
       <Route path='/projects' element={
       <ProtectedRoutesComponent>
       <ProjectBoard></ProjectBoard>
       </ProtectedRoutesComponent>
       }/>
       <Route path='/projects/:id' element={
       <ProtectedRoutesComponent>
       <ProjectsProject></ProjectsProject>
       </ProtectedRoutesComponent>
       }/>
       <Route path='/{root}'/>
     </Routes></main>
    )
}
export default LayoutComponent