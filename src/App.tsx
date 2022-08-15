import { useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import BucketList from "./pages/BucketList";

import Search from "./pages/Search";
import { Event } from "./types";
import EventDetails from "./components/EventDetails";

function App() {
  const [bucketList, setBucketList] = useState<Event[]>([]);
  const [events, setEvents] = useState<Event[]>([]);

  function changeEvents(events: Event[]) {
    setEvents(events);
  }

  function addBucketListEvent(event: Event) {
    if (!bucketList.find((item) => item.id === event.id)) {
      setBucketList([...bucketList, event]);
    }
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
        <h1>Event Explorer</h1>
        <nav>
          <Link to="/">Event Search</Link>
          <Link to="/bucket-list">Bucket List</Link>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <Search
              events={events}
              addBucketListEvent={addBucketListEvent}
              bucketList={bucketList}
              changeEvents={changeEvents}
            />
          }
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
        <Route
          path="/event/:id"
          element={
            <EventDetails
              bucketList={bucketList}
              addBucketListEvent={addBucketListEvent}
              removeBucketListEvent={removeBucketListEvent}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
