import React from 'react';

const Item = ({ text, btn }) => {
  return (
    <li>
      {text}
      {btn}
    </li>
  );
};

export default Item;