import React from 'react';

const DropDown = (props) => {
  const {id, value, onChange, option, isPlaceholderHidden} = props;

  return (
    <select id={id} value={value} onChange={onChange}>        
      {option.length !== 0 
        ? option.map((data, index) => 
          (
          <option 
            key={index} 
            hidden={isPlaceholderHidden && index === 0} 
            value={data}>
          {data}
          </option>
          )
        ) 
        : (<option>No data found</option>)        
      }
    </select>
  );
}

export default DropDown;