import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/itemSlice';
import styles from '../style.module.css';
const AddItem = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addItem({ id: Date.now(), value: input }));
      setInput('');
    }
  };

  return (
    <div>
      <h2>Add to List</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter item" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddItem;
