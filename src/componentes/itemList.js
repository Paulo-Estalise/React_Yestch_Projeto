import React, { useState, useEffect } from 'react';
import Item from '. /Item';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulando uma chamada assíncrona
    const fetchItems = () => {
      setTimeout(() => {
        // Supondo que esses são os dados obtidos da API
        const mockData = [
          { id: 1, name: 'Item 1', price: 10, description: 'Description for item 1' },
          { id: 2, name: 'Item 2', price: 20, description: 'Description for item 2' },
          { id: 3, name: 'Item 3', price: 30, description: 'Description for item 3' }
        ];
        setItems(mockData);
      }, 2000); // 2 segundos de atraso
    };

    fetchItems();
  }, []);

  return (
    <div className="item-list">
      <h1>Items List</h1>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
