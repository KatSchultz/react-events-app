import React from "react";

import SingleEvent from "./SingleEvent";

const events = [
  {
    name: "Boston Red Sox vs. New York Yankees",
    type: "event",
    id: "Z7r9jZ1AdFN4I",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFN4I",
  },
  {
    name: "Boston Red Sox vs. New York Yankees",
    type: "event",
    id: "Z7r9jZ1AdFN4M",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFN4M",
  },
  {
    name: "Boston Red Sox vs. New York Yankees",
    type: "event",
    id: "Z7r9jZ1AdFNbk",
    test: false,
    url: "https://www.ticketmaster.com/event/Z7r9jZ1AdFNbk",
  },
];

export default function SearchResultsDisplay() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {events.map((event) => (
        <SingleEvent event={event} />
      ))}
    </div>
  );
}
