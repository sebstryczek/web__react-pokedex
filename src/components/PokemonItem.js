import React from 'react';

const PokemonItem = ({ name }) => {
  return (
    <div className="card text-center m-2">
      <div className="card-body">
        {name}
      </div>
    </div>
  );
};

export default PokemonItem;
