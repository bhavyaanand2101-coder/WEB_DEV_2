import React, { useState } from 'react';

export default function EchoInput() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Type here..."
        style={{ border: '1px solid black', padding: '5px' }} 
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}