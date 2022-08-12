import React from "react";
import { Event } from "../types";

import SingleEvent from "./SingleEvent";

interface Props {
  events: Event[];
}

export default function SearchResultsDisplay({ events }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {events.map((event) => (
        <SingleEvent event={event} key={event.id} />
      ))}
    </div>
  );
}
