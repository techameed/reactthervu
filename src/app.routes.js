import React from 'react';
import permission from './path.json';
import { Redirect, Route } from "react-router-dom"; 

const ProtectedRoute = ({ component: Component, role, path, ...rest}) => {
    const validatePath = (path) => {
        const index = permission.role.indexOf(path);
        return (index !== -1)
    }
    const isAllowed = validatePath();
    return (
        <Route path={path} {...rest} render={props => {
            return isAllowed ? <Component {...props}/> : <Redirect to="/" />;
        }}/>
    );
}

export default ProtectedRoute;