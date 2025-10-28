import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, removeFromPortfolio }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map((stock) => (
        <Stock key={stock.id} stock={stock} removeFromPortfolio={removeFromPortfolio} />
      ))}
    </div>
  );
}

export default PortfolioContainer;
