import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import NotFound from '../pages/Shared/NotFound';

const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    const location=useLocation()
    console.log(location.pathname);
    if(loading){
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-infinity loading-lg"></span></div>
    }
   
    if (!user) {
           
       return <Navigate state={{from:location.pathname}} to="/login" replace >          
        
        </Navigate>
    }
    if (!children) {
        return <NotFound></NotFound>
    }

    
    return (
        children
     
    );
};

export default PrivateRoute;