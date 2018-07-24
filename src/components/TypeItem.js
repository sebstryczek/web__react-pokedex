import React from 'react';
import './TypeItem.css';

const TypeItem = ({ name, onItemClick }) => {
  const onClick = () => onItemClick(name);
  return (
    <div className="card text-center m-2 type-item" onClick={ onClick }>
      <div className="card-body">
        {name}
      </div>
    </div>
  );
};

export default TypeItem;
