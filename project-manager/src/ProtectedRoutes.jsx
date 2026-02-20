import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { firstContext } from '../Context/AuthContext';

const ProtectedRoutesComponent = () => {
    const {isloggedin, currentUser, handleLoggedIn, handleloggout} = useContext(firstContext);

    return isloggedin ? <Outlet></Outlet>: <Navigate to="/" replace></Navigate>
}
export default ProtectedRoutesComponent