import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../style.module.css';

const ItemList = () => {
  const items = useSelector((state) => state.items);

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>{item.value}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
