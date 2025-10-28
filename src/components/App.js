import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("Alphabetically");
  const [filterBy, setFilterBy] = useState("Tech");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then((data) => setStocks(data));
  }, []);

  const addToPortfolio = (stock) => {
    if (!portfolio.find((s) => s.id === stock.id)) {
      setPortfolio([...portfolio, stock]);
    }
  };

  const removeFromPortfolio = (stock) => {
    setPortfolio(portfolio.filter((s) => s.id !== stock.id));
  };

  return (
    <div>
      <Header />
      <MainContainer
        stocks={stocks}
        portfolio={portfolio}
        sortBy={sortBy}
        filterBy={filterBy}
        setSortBy={setSortBy}
        setFilterBy={setFilterBy}
        addToPortfolio={addToPortfolio}
        removeFromPortfolio={removeFromPortfolio}
      />
    </div>
  );
}

export default App;
