import React from 'react';
import classes from './popup.css';
import Modal from 'react-modal';
import ButtonComponent from './buttonComponent';

const Popup = props => {
  const {
    open,
    onClose,
    onClickYes,
    onClickNo,
    content
  } = props;
    
  return (
    
    <Modal 
      isOpen={open}
      ariaHideApp={false}
      onRequestClose={onClose}
      className={classes.modal}
    >
      <p>{content}</p>
      <ButtonComponent
        content='YES'
        isPrimary={false}
        onClickFunction={onClickYes} 
        className={classes.yesButton}
      />
      <ButtonComponent
        content='NO'
        isPrimary={true}
        onClickFunction={onClickNo} 
        className={classes.noButton}
      />
    </Modal>    
  );
}

export default Popup;
