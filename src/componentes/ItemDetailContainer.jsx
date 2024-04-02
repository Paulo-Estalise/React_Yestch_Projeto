import React, { useState, useEffect } from 'react';

const mockAsyncFetchItem = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Item 1', description: 'Descrição do Item 1', price: 10 });
    }, 2000);
  });
};

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const newItem = await mockAsyncFetchItem();
        setItem(newItem);
      } catch (error) {
        console.error('Erro ao buscar o item:', error);
      }
    };

    fetchItem();

  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card mt-5">
            <div className="card-body">
              {item ? (
                <>
                  <h3 className="card-title">{item.name}</h3>
                  <p className="card-text">Descrição: {item.description}</p>
                  <p className="card-text">Preço: {item.price}</p>
                </>
              ) : (
                <p>Carregando...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
<p>Carregando...</p>