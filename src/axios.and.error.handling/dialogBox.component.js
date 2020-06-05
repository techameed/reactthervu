import React from 'react';
import classes from './dialogBox.css';
import ReactModal from 'react-modal';
import ButtonComponent from './controls/buttonComponent';

const Modal = ({
  show,
  onCloseModal,
  content
  }) => {
  
  return (  
    <ReactModal
      isOpen={show}
      onRequestClose={onCloseModal}
      ariaHideApp={false}
      className={classes.modal}
    >
      <p>{content}</p>
      
      <ButtonComponent
        content='OK'
        onClickFunction={onCloseModal}
        className={classes.okButton} 
      />
    </ReactModal>
  );
}

export default Modal;
