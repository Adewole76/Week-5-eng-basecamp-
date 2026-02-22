import { createContext, useState, useEffect, useContext, Children } from "react";
import { useNavigate } from "react-router-dom";

export const firstContext = createContext();
const UserAuthenticationProvider= ({children}) =>{
    const [isloggedin, setIsloggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({})
useEffect(() => {
    const loadedIsLoggedIn = localStorage.getItem('loggedin');
    const storedLoadedIsloggedin = !loadedIsLoggedIn?{}:JSON.parse(loadedIsLoggedIn);
    setIsloggedIn(storedLoadedIsloggedin);
    const loadedCurrent = localStorage.getItem('current');
    const storedLoadedCurrent = !loadedCurrent?{}:JSON.parse(loadedCurrent);
    setCurrentUser(storedLoadedCurrent)
},[])
    

    const handleLoggedIn = (username, email, password) => {
        setIsloggedIn(true)
        setCurrentUser({
           Email: email,
           UserName: username,
           Password: password
        })
        localStorage.setItem('loggedin', JSON.stringify(true));
        localStorage.setItem('current', JSON.stringify({
            Email: email,
            UserName: username,
            Password: password
         }))
    }

    const handleloggout= () => {
        setIsloggedIn(false);
        setCurrentUser({});
        
        localStorage.setItem('loggedin', JSON.stringify(false));
        localStorage.setItem('current', JSON.stringify({}))

    }

    return(
        <firstContext.Provider value={{ isloggedin, currentUser, handleLoggedIn, handleloggout }}>
        {children}
        </firstContext.Provider>
    )
}
export default  UserAuthenticationProvider

