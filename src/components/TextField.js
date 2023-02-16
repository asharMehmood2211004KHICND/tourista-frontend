import React from 'react'

export const TextField = ({value,setValue}) => {


  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (
    // <div>TextField</div>
    <div>
      <label>
        <input type="text" value={value} onChange={handleChange} />
      </label>
    </div>
  );
}
