import React from 'react';

import classes from "./SideDrawer.css"

const menus = (props) => {
        
    return(
         props.role.map(tab =>(
         <div className= { classes.menu }>
           <tab.icon className= {classes.menu_icon}/>
            <span className= {classes.sidebar_menus}>
              {tab.name }
            </span>
         </div>
         ))
     );
  };

  export default menus; 