import React, { useEffect, useState } from "react";
import "./SingleEvent.css";
import { Event } from "../types";
import { useNavigate } from "react-router-dom";

interface Props {
  event: Event;
  bucketList: Event[];
  addBucketListEvent: (event: Event) => void;
}

export default function SingleEvent({
  event,
  bucketList,
  addBucketListEvent,
}: Props) {
  const [onBucketList, setOnBucketList] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   checkBucketList();
  // }, [onBucketList]);

  // function checkBucketList() {
  //   const bucketListStatus = bucketList.find((item) => (item.id = event.id));
  //   console.log(bucketListStatus);
  //   if (!bucketListStatus) {
  //     setOnBucketList(false);
  //   } else {
  //     setOnBucketList(true);
  //   }
  //   console.log("bucket list check", onBucketList);
  // }

  function bucketClickHandler(event: Event) {
    setOnBucketList(true);
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
          <div>
            Location: {venue.name} <br /> {venue.address.line1} <br />{" "}
            {venue.city.name}, {venue.state.name}
          </div>
          <a href={event.url} target="blank">
            See Tickets
          </a>
        </div>
      </div>
      {onBucketList === false ? (
        <div className="button" onClick={() => bucketClickHandler(event)}>
          <div>
            Add to <br />
            Bucket List
          </div>
        </div>
      ) : (
        <div
          className="button"
          style={{ backgroundColor: "#184d47", color: "#fad586" }}
        >
          <div>
            On Your <br />
            Bucket List
          </div>
        </div>
      )}
    </div>
  );
}
