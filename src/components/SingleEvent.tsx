import React from "react";
import "./SingleEvent.css";

interface Props {
  event: {
    name: string;
    type: string;
    id: string;
    test: boolean;
    url: string;
  };
}

export default function SingleEvent({ event }: Props) {
  function bucketClickHandler() {
    // setBucketList(...BucketList, event)
  }

  return (
    <div className="single-event">
      <div className="date-details-container">
        <div className="date">
          <div>date</div>
          <div>day</div>
          <div>time</div>
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
