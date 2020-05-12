import React from 'react';
import PropTypes from 'prop-types';
import classes from '../input/input.css';

const Input = (props) => {
  return (
    <div className={classes.inputControl}>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        checked={props.checked}
        onCheckbox={props.onCheckbox}
        onChange={props.onChange}
        placeholder={props.placeholder}/>
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  checked: PropTypes.bool,
  value: PropTypes.string,
  onCheckbox: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Input;


