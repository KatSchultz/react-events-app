import React, { useEffect, useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import BucketList from "./pages/BucketList";

import Search from "./pages/Search";
import { Event } from "./types";

function App() {
  const [bucketList, setBucketList] = useState<Event[]>([]);

  function addBucketListEvent(event: Event) {
    setBucketList([...bucketList, event]);
  }

  function removeBucketListEvent(id: string) {
    const list = [...bucketList];
    const index = list.findIndex((item) => item.id === id);
    list.splice(index, 1);
    setBucketList(list);
  }

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
        <Route
          path="/"
          element={<Search addBucketListEvent={addBucketListEvent} />}
        />
        <Route
          path="/bucket-list"
          element={
            <BucketList
              bucketList={bucketList}
              removeEvent={removeBucketListEvent}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
