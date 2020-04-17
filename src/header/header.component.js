import React from 'react';
import classes from './header.css';
import Assignment from '@material-ui/icons/Assignment';
import Hamburger from '@material-ui/icons/Menu';

const header = props => {
  
  const { isCloseSideDrawer, onChangeSideDrawer, userName } = props;
  return(
    <div className={classes['header']}>
      <div className={classes['side-drawer']}>
        <div className={classes['logo-content']}>
          <Assignment style={{ fontSize: '190%' }} className={classes['thervu-logo']}  /> 
        </div> 
        <div className={`${classes['project-name-content']} ${isCloseSideDrawer ? classes['close'] : ''}`}>
          THERVU
        </div>
      </div>  
      <div className={`${classes['nav-bar']} ${isCloseSideDrawer ? classes['open'] : ''}`}>
        <div className={classes['hamburger-content']} onClick={onChangeSideDrawer}>
          <Hamburger style={{ fontSize: '190%' }} className={classes['hamburger-logo']}/>
        </div>
        <div className={classes['user-name']}>
          {userName}
        </div>
      </div> 
    </div>
  );
}

export default header;