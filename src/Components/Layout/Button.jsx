import React from 'react'

const ToggleButton = ({ onClick, children }) => {
  return (
    <button className="btn-toggle" onClick={onClick}>
      {children}
    </button>
  );
}

export default ToggleButton