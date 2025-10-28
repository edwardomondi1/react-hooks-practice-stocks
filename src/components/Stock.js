import React from "react";

function Stock({ stock, addToPortfolio, removeFromPortfolio }) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
          {addToPortfolio ? (
            <button onClick={() => addToPortfolio(stock)}>Add to Portfolio</button>
          ) : (
            <button onClick={() => removeFromPortfolio(stock)}>Remove from Portfolio</button>
          )}
        </div>
      </div>
    </div>
  );
}
export default Stock;
