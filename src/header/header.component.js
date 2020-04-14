import React from 'react';
import './header.css';
import Assignment from '@material-ui/icons/Assignment';
import Hamburger from '@material-ui/icons/Menu';

const header = props =>{
  
  let projectNameClassName = ["project-name-content"];
  let navBarClassName = ["nav-bar"];
  if (props.isClosesideDrawer) {
      projectNameClassName.push("close");
      navBarClassName.push("open");
  }
  return(
    <div className="header">
      <div className="side-drawer">
        <div className="logo-content">
          <Assignment style={{ fontSize: "190%" }} className="thervu-logo" /> 
        </div> 
        <div className={projectNameClassName.join(" ")}>
          THERVU
        </div>
      </div>  
      <div className={navBarClassName.join(" ")}>
        <div className="hamburger" onClick={props.onChangeSideDrawerHandler}>
          <Hamburger style={{ fontSize: "140%" }} className="hamburger-logo" />
        </div>
        <div className="user-name">
          {props.userName}
        </div>
      </div> 
    </div>
  );
}

export default header;