import React, { Component } from 'react';
import classes from './App.css';
import Header from './header/header.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCloseSideDrawer : false
    }
    this.onToggleSideDrawer = this.onToggleSideDrawer.bind(this);
  }
  
  onToggleSideDrawer() {
    this.setState(previousState => ({
      isCloseSideDrawer : !previousState.isCloseSideDrawer
    }));
  }

  render() {
    return (
      <div className={classes['app']}>
        <Header 
          isCloseSideDrawer={this.state.isCloseSideDrawer} 
          onToggleSideDrawer={this.onToggleSideDrawer} />
      </div>
    );
  }
}

export default App;
