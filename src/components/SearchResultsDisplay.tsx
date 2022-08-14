import React from "react";
import { Event } from "../types";

import SingleEvent from "./SingleEvent";

interface Props {
  events: Event[];
}

export default function SearchResultsDisplay({ events }: Props) {
  const displayEvents = [...events];
  displayEvents.sort(
    (a, b) =>
      new Date(a.dates.start.dateTime).getTime() -
      new Date(b.dates.start.dateTime).getTime()
  );
  console.log(events);
  console.log(displayEvents);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {displayEvents.map((event) => (
        <SingleEvent event={event} key={event.id} />
      ))}
    </div>
  );
}
