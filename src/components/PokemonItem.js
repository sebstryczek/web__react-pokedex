import React from 'react';

const PokemonItem = ({ name }) =>
  <div className="pokemon-item card text-center m-2">
    <div className="card-body">
      {name}
    </div>
  </div>

export default PokemonItem;
