import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from '../style.module.css';

const ItemDetail = () => {
  const { id } = useParams();
  const item = useSelector((state) =>
    state.items.find((item) => item.id.toString() === id)
  );

  if (!item) return <div>Item not found</div>;

  return (
    <div>
      <h2>Item Detail</h2>
      <p>ID: {item.id}</p>
      <p>Value: {item.value}</p>
    </div>
  );
};

export default ItemDetail;
