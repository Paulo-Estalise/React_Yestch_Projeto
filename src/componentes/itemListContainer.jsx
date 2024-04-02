import React from 'react';
import ItemList from '. /ItemList';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title">Bem-vindo!</h3>
              <p className="card-text">{greeting}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
