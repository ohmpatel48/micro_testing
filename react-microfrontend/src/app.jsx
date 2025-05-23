import React, { useState } from 'react';
import './styles.css'; 

export function HelloWidget({ onTextChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
    if (onTextChange) {
      console.log(onTextChange);       
      onTextChange(val);
    }
  };

  return (
    <div>
      <label>Enter text: </label>
      <input type="text" value={inputValue} className='bordernone' onChange={handleChange} />
      <p className='bad'>You typed: {inputValue}</p>
    </div>
  );
}

export function GoodbyeWidget() {
  return <div>Goodbye from React Microfrontend!</div>;
}