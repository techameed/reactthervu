

import React from "react";
import PropTypes from 'prop-types';

//create a function component
const Input = (props) => {
  
  return (
		<form onSubmit={ props.onSubmit }>
			<div>
				<input
					type={ props.inputType } //type of the parameter
					value={ props.value}  // content of the parameter
					onChange={ props.onChange }  // update the parameter
					placeholder={ props.placeholder } /> 
			</div>
		</form>
    );
};
   //Prototypes for the inputs
	Input.propTypes = {
		inputType: React.PropTypes.string,
		onchange: React.PropTypes.func,
		value: React.PropTypes.string,
		placeholder: React.PropTypes.string,
	};
export default Input;