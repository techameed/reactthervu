import React from 'react';

const DropDown = (props) => {
  const {id, value, onChange, option} = props;

  return (
    <select id={id} value={value} onChange={onChange}>        
      {option.length !== 0 
        ? option.map(data =>(<option value={data}>{data}</option>)) 
        : (<option>No data found</option>)        
      }
    </select>
  );
}

export default DropDown;