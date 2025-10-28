import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({
  stocks,
  portfolio,
  sortBy,
  filterBy,
  setSortBy,
  setFilterBy,
  addToPortfolio,
  removeFromPortfolio,
}) {
  return (
    <div>
      <SearchBar sortBy={sortBy} filterBy={filterBy} setSortBy={setSortBy} setFilterBy={setFilterBy} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} sortBy={sortBy} filterBy={filterBy} addToPortfolio={addToPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} removeFromPortfolio={removeFromPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
