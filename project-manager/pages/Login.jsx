import '../src/login.css'
import { IoLogoGoogle } from "react-icons/io5"
import { useLocation } from 'react-router-dom'
import { FaPaperclip } from "react-icons/fa6";
import NavBar from '../src/Navbar';
const LoginPage = () => {
    
    return(
        <main>
            <section className="login">
            <h1>Boardly<FaPaperclip className='paper-clip'></FaPaperclip></h1>    
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