import React from "react";
import "./SingleEvent.css";
import { Event } from "../types";

interface Props {
  event: Event;
  addBucketListEvent: (event: Event) => void;
}

export default function SingleEvent({ event, addBucketListEvent }: Props) {
  function bucketClickHandler(event: Event) {
    addBucketListEvent(event);
  }

  const date = new Date(event.dates.start.dateTime);
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();

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
        </div>
      </div>
      <div className="button" onClick={() => bucketClickHandler(event)}>
        <div>
          Add to <br />
          Bucket List
        </div>
      </div>
    </div>
  );
}
