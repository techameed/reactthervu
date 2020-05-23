import React from 'react';
import PropTypes from 'prop-types';
import classes from './input.css';

const Input = props => {
	
  const { 
          id, 
  	      type, 
  	      value, 
  	      checked, 
  	      disabled, 
  	      placeholder, 
  	      onChange 
  	    } = props;
  
  return (
    <div className={classes.inputControl}>
      <input
        id={id}
        type={type}
        disabled={disabled}
        value={value}
        checked={checked}
        onChange={onChange}
        placeholder={placeholder}/>
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  checked: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Input;


