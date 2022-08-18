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
    <div className="App flex justify-center content-center items-center ">
      <div className="app-content-holder bg-white w-10/12 m-auto h-5/6 m-10 p-10">
        <header>
          <h1 className="text-3xl font-titles font-bold">Event Explorer</h1>
          <nav className="flex justify-around">
            <Link
              to="/"
              className="p-2 hover:underline font-info text-white px-10 rounded-xl bg-[#184d47]"
            >
              Event Search
            </Link>
            <Link
              to="/bucket-list"
              className="p-2 hover:underline font-info text-white px-10 rounded-xl bg-[#184d47]"
            >
              Bucket List
            </Link>
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
                removeBucketListEvent={removeBucketListEvent}
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
    </div>
  );
}

export default App;
