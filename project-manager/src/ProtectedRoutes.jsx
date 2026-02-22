import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { firstContext } from '../Context/AuthContext';

const ProtectedRoutesComponent = ({children}) => {
    const {isloggedin} = useContext(firstContext);

    return (isloggedin ? 
    children: <Navigate to="/" replace></Navigate>)
}
export default ProtectedRoutesComponent