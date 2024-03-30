import React, { useState } from 'react';

function QuantityControl({ stock, onAdd }) {
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleAdd = () => {
    if (quantity > 0) {
      onAdd(quantity);
      setQuantity(0);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={decreaseQuantity}>-</button>
      <span style={{ fontSize: '20px', margin: '0 10px' }}>{quantity}</span>
      <button onClick={increaseQuantity}>+</button>
      <br />
      <button onClick={handleAdd} disabled={stock === 0 || quantity === 0}>
        Adicionar ao carrinho
      </button>
      {stock === 0 && <p>Estoque esgotado</p>}
    </div>
  );
}

export default QuantityControl;
