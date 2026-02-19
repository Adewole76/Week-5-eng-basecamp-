import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const firstContext = createContext();
const userAuthenticationProvider= () =>{
    const navigate = useNavigate()
    const [isloggedin, setIsloggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({})
useEffect(() => {
    const loadedIsLoggedIn = localStorage.getItem('loggedin');
    setIsloggedIn(loadedIsLoggedIn);
    const loadedCurrent = localStorage.getItem('current');
    const storedLoadedCurrent = !loadedCurrent?{}:JSON.parse(loadedCurrent);
    setCurrentUser(storedLoadedCurrent)
},[])
    

    const handleLoggedIn = () => {
        localStorage.setItem('loggedin', JSON.stringify(isloggedin));
        localStorage.setItem('current', JSON.stringify(currentUser))
    }

    return(
        <firstContext.Provider value ={{isloggedin,currentUser, handleLoggedIn}}>
   
        </firstContext.Provider>
    )
}
export default  userAuthenticationProvider

