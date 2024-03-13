import React, { useState } from 'react';

const InputText = ({ onAdd }) => {
  const [newItem, setNewItem] = useState('');

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleAddItem = () => {
    if (newItem) {
      onAdd(newItem);
      setNewItem('');
    }
  };

  return (
    <div className="input" >
      <input
        type="text"
        value={newItem}
        onChange={handleInputChange}
        placeholder="text"
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default InputText;