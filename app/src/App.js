import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import RankList from "./components/Rank/RankList";
import RankCategory from "./components/Rank/RankCategory";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/list" element={<RankList />} />
        <Route exact path="/category" element={<RankCategory />} />
      </Routes>
    </Router>
  );
};

export default App;
