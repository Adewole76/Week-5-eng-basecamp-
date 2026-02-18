import '../src/login.css'
import { IoLogoGoogle } from "react-icons/io5"
import { useLocation } from 'react-router-dom'
const LoginPage = () => {
    const location = useLocation()
 const showNavbar = location.pathname !== '/';

    return(
        <main>
            {showNavbar?<NavBar></NavBar>:''}
            <section className="login">
            <h2>Welcome Back</h2>
            <p>Welcome back! Please eneter your details</p>
            <form action="">
                <label htmlFor="userName">UserName:
                <input type="text" placeholder="userName" />
                </label>

               <label htmlFor="email">Email:
                <input type="email" placeholder="email" />
               </label>

               <label htmlFor="password">Password:
                <input type="password" placeholder="password"/>
               </label>
            </form>
            <p>forgot Password</p>
            <button className="login-btn">Login</button>
            <button className="sign-in-Google">Sign in with <IoLogoGoogle /></button>
            </section>
        </main>
    )
}
export default LoginPage