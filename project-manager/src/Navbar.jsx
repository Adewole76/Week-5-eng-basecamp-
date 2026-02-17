import { Link } from "react-router-dom"
const NavBar = () => {
    return(
        <nav>
            <h1>ProJect Manager</h1>
            <ul>
                <li>Dashboard</li>
                <li>Profile</li>
                <li>Projects</li>
            </ul>
            <section>
                <button>Light mode on</button>
            </section>
        </nav>
    )
}
export default NavBar