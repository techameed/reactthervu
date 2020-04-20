import React ,{Component} from 'react';
import classes from './dialog.box.css';

class Modal extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
      return (
        <div>
          
          <ReactModal 
             isOpen={this.state.showModal}
             onRequestClose={this.handleCloseModal}
             className="classes.Modal"
          >
            <div><p>{this.props.error}</p></div>
            <button onClick={this.handleCloseModal}>OK</button>
          </ReactModal>
        </div>
      );
    }
  }
  
  const props = {};

export default modal;