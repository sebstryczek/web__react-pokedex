import React from 'react';

const TypeItem = ({ name, onItemClick }) => {
  const onClick = () => onItemClick(name);
  return (
    <li onClick={ onClick }>
      { name }
    </li>
  );
};

export default TypeItem;
