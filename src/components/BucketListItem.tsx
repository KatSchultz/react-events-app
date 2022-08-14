import React from "react";
import { Event } from "../types";

interface Props {
  event: Event;
  removeEvent: (id: string) => void;
}

export default function BucketListItem({ event, removeEvent }: Props) {
  const date = new Date(event.dates.start.dateTime);
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();

  function removeEventHandler() {
    removeEvent(event.id);
  }

  return (
    <div className="single-event">
      <div className="date-details-container">
        <div className="date">
          <div>
            {month} {day}, {year},
          </div>
          <div>{time}</div>
        </div>
        <div className="event-details">
          <div className="event-name">{event.name}</div>
          <div>Location</div>
          <a href={event.url} target="blank">
            See Tickets
          </a>
        </div>
      </div>
      <div className="button" onClick={removeEventHandler}>
        <div>Remove Event</div>
      </div>
    </div>
  );
}
