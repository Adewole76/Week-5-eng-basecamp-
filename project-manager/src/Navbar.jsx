import { Link } from "react-router-dom"
import { FaPaperclip } from "react-icons/fa6"
import { useContext } from 'react';
import { firstContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
    const{ currentUser, handleloggout} = useContext(firstContext);
    const navigate = useNavigate()
    const logoutBtnOnclick = () =>{
       handleloggout()
      navigate('/')
    }
    
    return(
        <nav>
            <h1>Boardly<FaPaperclip></FaPaperclip></h1>
            <ul>
                <Link to="/dashboard"><li>Dashboard</li></Link>
                <Link to="/profile"><li>Profile</li></Link>
                <Link to="/projects"><li>Projects</li></Link>
            </ul>
            <section>
                <button className="theme-toogle">Light mode on</button>
                <button onClick={logoutBtnOnclick} className="logout-btn">logout</button>
            </section>
        </nav>
    )
}
export default NavBar