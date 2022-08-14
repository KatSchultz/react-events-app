import React from "react";
import { Event } from "../types";

import SingleEvent from "./SingleEvent";

interface Props {
  events: Event[];
  addBucketListEvent: (event: Event) => void;
}

export default function SearchResultsDisplay({
  events,
  addBucketListEvent,
}: Props) {
  const displayEvents = [...events];
  displayEvents.sort(
    (a, b) =>
      new Date(a.dates.start.dateTime).getTime() -
      new Date(b.dates.start.dateTime).getTime()
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {displayEvents.map((event) => (
        <SingleEvent
          event={event}
          key={event.id}
          addBucketListEvent={addBucketListEvent}
        />
      ))}
    </div>
  );
}
