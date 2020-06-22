import React from 'react';
import PropTypes from 'prop-types';
import classes from './input.css';

const Input = props => {
  
  const { 
          id, 
          type, 
          title,
          value, 
          checked, 
          disabled, 
          placeholder, 
          onChange,
          className,
          style 
        } = props;
  
  return (
    <div className={classes.inputControl}>
      <input
        className={className ? className : classes.input}
        style={style}
        id={id}
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
  type: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Input;


