import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinsPage from "./components/CoinsPage";
import CoinDetailPage from "./components/CoinDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoinsPage />} />
        <Route path="/coins/:coinId" element={<CoinDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;