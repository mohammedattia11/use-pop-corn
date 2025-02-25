import React from 'react'

const MovieDetails = ({ selectedID, onResetID }) => {
  return (
    <div className="details">
      <button className="btn-back" onClick={() => onResetID(null)}>
        &larr;
      </button>
      <p>{selectedID}</p>
    </div>
  );
};

export default MovieDetails