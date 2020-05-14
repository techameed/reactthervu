import React from 'react';
import PropTypes from 'prop-types';
import classes from './input.css';

const Input = props => {
	
  const { 
		  id, 
		  type, 
		  value, 
		  checked, 
		  placeholder, 
		  onChange 
		} = props;
	
  return (
    <div className={classes.inputControl}>
	  <input
        id={id}
        type={type}
        value={value}
        checked={checked}
        onChange={onChange}
        placeholder={placeholder}/>
	</div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Input;


