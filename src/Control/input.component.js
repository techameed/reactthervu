import React from 'react';
import PropTypes from 'prop-types';
import classes from './input.css';

const Input = props => {
	
	const { 
          id, 
          type, 
          title, 
          value, 
          className, 
          style,
          checked, 
          disabled, 
          placeholder, 
          onChange 
        } = props;
	
	return (
	  <div className={classes.inputControl}>
	    <input
        id={id}
        style={style}
        className={className ? className : classes.input}
        type={type}
        title={title}
        disabled={disabled}
        value={value}
        checked={checked}
        onChange={onChange}
        placeholder={placeholder}/>
	  	</div>
	  );
}

Input.propTypes = {
    title: PropTypes.any,
  type: PropTypes.string,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	value: PropTypes.any,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
};

export default Input;


