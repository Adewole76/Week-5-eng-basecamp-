import { useLocation } from "react-router-dom";
import{Routes, Route} from "react-router-dom"
import LoginPage from '../pages/Login'
import DashBoard from '../pages/DashBoard'
import ProfilePage from '../pages/Profile'
import ProjectBoard from '../pages/ProjectBoard'
import ProjectsProject from '../pages/Projects'
import NavBar from './Navbar'
const LayoutComponent = () => {
    const location = useLocation()
  const showNavbar = location.pathname !== '/';
    return(
     <main>
     {showNavbar?<NavBar></NavBar>:''}
     <Routes>
       <Route path='/' element={<LoginPage></LoginPage>}/>
       <Route path='/dashboard' element={<DashBoard></DashBoard>}/>
       <Route path='/profile' element={<ProfilePage></ProfilePage>}/>
       <Route path='/projects' element={<ProjectBoard></ProjectBoard>}/>
       <Route path='/projects/:id' element={<ProjectsProject></ProjectsProject>}/>
       <Route path='/{root}'/>
     </Routes></main>
    )
}
export default LayoutComponent