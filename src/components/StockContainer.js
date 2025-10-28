import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, sortBy, filterBy, addToPortfolio }) {
  const filteredStocks = stocks.filter((stock) => stock.type === filterBy);

  const sortedStocks = [...filteredStocks].sort((a, b) => {
    if (sortBy === "Alphabetically") {
      return a.name.localeCompare(b.name);
    } else {
      return a.price - b.price;
    }
  });

  return (
    <div>
      <h2>Stocks</h2>
      {sortedStocks.map((stock) => (
        <Stock key={stock.id} stock={stock} addToPortfolio={addToPortfolio} />
      ))}
    </div>
  );
}

export default StockContainer;
