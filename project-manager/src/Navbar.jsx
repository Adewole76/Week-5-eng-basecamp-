import { Link } from "react-router-dom"
const NavBar = () => {
    return(
        <nav>
            <h1>ProJect Manager</h1>
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