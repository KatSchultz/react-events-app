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
    <div className="App flex flex-col justify-center">
      <header className=" bg-[#184d47]">
        <h1 className="text-4xl font-titles font-bold m-0 pb-4 underline text-white">
          Event Explorer
        </h1>
        <nav className="flex justify-around flex-row">
          <Link
            to="/"
            className="p-2 hover:underline font-info text-white px-10 rounded-xl bg-[#184d47] w-full"
          >
            <div>Event Search</div>
          </Link>

          <Link
            to="/bucket-list"
            className="p-2 hover:underline font-info text-white px-10 rounded-xl bg-[#184d47] w-full"
          >
            <div>Bucket List</div>
          </Link>
        </nav>
      </header>
      <div className="app-content-holder flex justify-center content-center items-center m-auto  bg-white w-10/12  h-5/6 p-10">
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
