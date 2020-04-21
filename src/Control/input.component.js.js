

import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {

	return (
		<div>
			<input
				type={props.type}
				value={props.value}
				onChange={props.onChange}
		  	  onSubmit={props.onSubmit}
				placeholder={props.placeholder} />
		</div>
  );
}

	Input.propTypes = {
		type: PropTypes.string,
		value: PropTypes.string,
		onChange: PropTypes.func,
		onSubmit: PropTypes.func,
		placeholder: PropTypes.string,
	};

export default Input;
