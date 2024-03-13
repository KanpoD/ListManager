import React, { useReducer } from "react";
import List from "./components/List";
import InputText from "./components/InputText";
import './App.css'

const listReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'DELETE_ITEM':
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

const App = () => {
  const [list, dispatch] = useReducer(listReducer, []);

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const deleteItem = (index) => {
    dispatch({ type: 'DELETE_ITEM', payload: index });
  };

  return (
    <div className="list_container">
      <h1>List Manager</h1>
      <InputText onAdd={addItem} />
      <List items={list} onDelete={deleteItem} />
    </div>
  );
};

export default App;
