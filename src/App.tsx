import React, { useEffect, useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import BucketList from "./pages/BucketList";


import Search from "./pages/Search";

function App() {
  

  return (
    <div className="App">
      <header>
        <h1>Event Bucket</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/bucket-list">Bucket List</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/bucket-list" element={<BucketList />} />
      </Routes>
    </div>
  );
}

export default App;
