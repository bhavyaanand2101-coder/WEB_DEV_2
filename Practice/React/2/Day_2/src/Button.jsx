import React from 'react';

export default function Button({ color, text }) {
  return (
    <button
      style={{
        backgroundColor: color,
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        margin: '5px',
        cursor: 'pointer',
      }}
    >
      {text}
    </button>
  );
}