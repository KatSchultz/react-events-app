import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import SearchResultsDisplay from "../components/SearchResultsDisplay";
import { Event } from "../types";

interface Props {
  addBucketListEvent: (event: Event) => void;
}

export default function SearchPage({ addBucketListEvent }: Props) {
  const [events, setEvents] = useState<Event[]>([]);

  function changeEvents(events: Event[]) {
    setEvents(events);
  }

  return (
    <div>
      <SearchForm changeEvents={changeEvents} />
      <SearchResultsDisplay
        events={events}
        addBucketListEvent={addBucketListEvent}
      />
    </div>
  );
}
