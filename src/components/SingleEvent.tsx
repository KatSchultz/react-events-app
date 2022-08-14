import React from "react";
import "./SingleEvent.css";
import { Event } from "../types";

interface Props {
  event: Event;
}

export default function SingleEvent({ event }: Props) {
  function bucketClickHandler() {
    // setBucketList(...BucketList, event)
  }

  const date = new Date(event.dates.start.dateTime);
  // const time = date.getUTCHours();
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();

  return (
    <div className="single-event">
      <div className="date-details-container">
        <div className="date">
          <div>
            {month} {day}, {year}
          </div>
        </div>
        <div className="event-details">
          <div className="event-name">{event.name}</div>
          <div>Location</div>
        </div>
      </div>
      <div className="button" onClick={bucketClickHandler}>
        <div>
          Add to <br />
          Bucket List
        </div>
      </div>
    </div>
  );
}
