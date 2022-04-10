import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import RankList from "./components/Rank/RankList";
import RankCategory from "./components/Rank/RankCategory";
import Vote from "./components/Vote/Vote";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/list" element={<RankList />} />
        <Route exact path="/category" element={<RankCategory />} />
        <Route exact path="/vote" element={<Vote />} />
      </Routes>
    </Router>
  );
};

export default App;
