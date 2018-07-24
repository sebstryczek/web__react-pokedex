import React from 'react';
import PokemonItem from './PokemonItem';

const PokemonsList = ({ type, names, onClose }) =>
  <div>
    <div className="d-flex justify-content-between m-4">
      <h2>
        {type}
      </h2>
      <button className="btn btn-small" onClick={onClose}>x</button>
    </div>
    <div className="d-flex justify-content-start flex-wrap m-3">
      {
        names.map((n, i) => <PokemonItem key={i} name={n} />)
      }
    </div>
  </div>

export default PokemonsList;
