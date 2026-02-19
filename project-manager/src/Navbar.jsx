import { Link } from "react-router-dom"
import { FaPaperclip } from "react-icons/fa6"
const NavBar = () => {
    return(
        <nav>
            <h1>Boardly<FaPaperclip></FaPaperclip></h1>
            <ul>
                <Link to="/dashboard"><li>Dashboard</li></Link>
                <Link to="/profile"><li>Profile</li></Link>
                <Link to="/projects"><li>Projects</li></Link>
            </ul>
            <section>
                <button>Light mode on</button>
            </section>
        </nav>
    )
}
export default NavBar