import React from 'react';
import permission from './path.json';
import { Redirect, Route } from "react-router-dom"; 

const ProtectedRoute = ({ component: Component, role, path, ...rest}) => {
    let validatePath = (role, path) => {
        var index = permission.admin.indexOf(path);
        console.log(index);
        if(index != -1) {
            return true;
        } else {
            return false;
        }
    }
    let isAllowed = validatePath();
    return (
        <Route path={path} {...rest} render={props => {
            return isAllowed ? <Component {...props}/> : <Redirect to="/" />;
        }}/>
    );
}

export default ProtectedRoute;