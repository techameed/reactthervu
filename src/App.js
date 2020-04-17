import React, { Component } from 'react';
import classes from './App.css';
import Header from './header/header.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCloseSideDrawer : false
    }
  }
  
  onChangeSideDrawer = () => {
    this.setState(state => ({
      isCloseSideDrawer : !state.isCloseSideDrawer
    }));
  }

  render = () => {
    return (
      <div className={classes['app']}>
       <Header 
         isCloseSideDrawer={this.state.isCloseSideDrawer} 
         onChangeSideDrawer={this.onChangeSideDrawer} />
      </div>
    );
  }
}

export default App;
