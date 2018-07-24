import React from 'react';
import TypeItem from './TypeItem';

const TypesList = ({ types, onSelect }) => {
  const items = types.map(
    (t, i) => <TypeItem key={i} name={t} onItemClick={onSelect} />
  );

  return (
    <div className="d-flex justify-content-start flex-wrap m-3">
      {items}
    </div>
  );
};

export default TypesList;
