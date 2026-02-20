import '../src/login.css'
import { IoLogoGoogle } from "react-icons/io5"
import { useLocation } from 'react-router-dom'
import { FaPaperclip } from "react-icons/fa6";
import NavBar from '../src/Navbar';
import { useState } from 'react';
import { useContext } from 'react';
import { firstContext } from '../Context/AuthContext';
const LoginPage = () => {
const {isloggedin, currentUser, handleLoggedIn, handleloggout} = useContext(firstContext);
const [userNameValue, setUserName] = useState('')
const [passwordValue, setpassword] = useState('')
const [Email, setEmail] = useState('');
const [errorMessage, setErrorMessage] = useState('');

const handleEmailChange = (e) => {
    setEmail(e.target.value);
}
const handlepasswordChange = (e) => {
    setpassword(e.target.value)
}
const handleUserChange = (e) => {
    setUserName(e.target.value)
}
    const handleSubmit = (e) => {
        e.preventDefault()
     handleLoggedIn(userNameValue, Email, passwordValue);
    }
    return(
        <main>
            <section className="login">
            <h1>Boardly<FaPaperclip className='paper-clip'></FaPaperclip></h1>    
            <h2>Welcome Back</h2>
            <p>Welcome back! Please eneter your details</p>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="userName">UserName:
                <input type="text" onChange={handleUserChange} value={userNameValue} placeholder="userName" />
                </label>

               <label htmlFor="email">Email:
                <input onChange={handleEmailChange} value={Email} type="email" placeholder="email" />
               </label>

               <label htmlFor="password">Password:
                <input onChange={handlepasswordChange} value={passwordValue} type="password" placeholder="password"/>
               </label>
               <p>forgot Password</p>
               <button type='submit' className="login-btn">Login</button>
            </form>
            <button className="sign-in-Google">Sign in with <IoLogoGoogle /></button>
            </section>
        </main>
    )
}
export default LoginPage