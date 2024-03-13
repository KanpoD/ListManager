import React from "react";
import Item from "./Item";

const List = ({ items, onDelete }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item, index) => (
          <Item
            key={index}
            text={item}
            btn={<button onClick={() => onDelete(index)}>Supprimer</button>}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
