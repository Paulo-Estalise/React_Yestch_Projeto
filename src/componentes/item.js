import React from 'react';

const Item = ({ item }) => {
  return (
    <div className="item">
      <h2>{item.name}</h2>
      <p>Price: ${item.price}</p>
      <p>Description: {item.description}</p>
    </div>
  );
};

export default Item;
