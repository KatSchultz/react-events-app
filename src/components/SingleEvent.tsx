import React from "react";
import "./SingleEvent.css";
import { Event } from "../types";
import { useNavigate } from "react-router-dom";

interface Props {
  event: Event;
  addBucketListEvent: (event: Event) => void;
}

export default function SingleEvent({ event, addBucketListEvent }: Props) {
  const navigate = useNavigate();

  function bucketClickHandler(event: Event) {
    addBucketListEvent(event);
  }

  function goToEventDetails() {
    navigate(`/event/${event.id}`);
  }

  const date = new Date(event.dates.start.dateTime);
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  const venue = event._embedded.venues[0];

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
          <div className="event-name" onClick={goToEventDetails}>
            {event.name}
          </div>
          <div>Location: {venue.name} <br /> {venue.address.line1} <br /> {venue.city.name}, {venue.state.name}</div>
          <a href={event.url} target="blank">
            See Tickets
          </a>
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
