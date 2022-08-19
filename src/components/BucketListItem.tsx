import React from "react";
import { useNavigate } from "react-router-dom";
import { Event } from "../types";

interface Props {
  event: Event;
  removeEvent: (id: string) => void;
}

export default function BucketListItem({ event, removeEvent }: Props) {
  const navigate = useNavigate();

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

  function goToEventDetails() {
    navigate(`/event/${event.id}`);
  }

  const venue = event._embedded?.venues[0] || {};

  return (
    <div className="single-event">
      <div className="date-details-container lg:justify-around w-full">
        <div className="date font-info text-center">
          <div>
            {month} {day}, {year},
          </div>
          <div>{time}</div>
        </div>
        <div className="event-details-bucket ">
          <div className="event-name font-titles" onClick={goToEventDetails}>
            {event.name}
          </div>
          <div className="location-and-tickets flex flex-col md:flex-row lg:flex-row justify-around items-center w-full">
            <div className="image">
              <img
                src={event.images[0].url}
                alt=""
                style={{ maxWidth: 250 + "px" }}
              />
            </div>
            <div className="font-info location">
              Location: {venue?.name} <br /> {venue?.address?.line1} <br />{" "}
              {venue?.city?.name}, {venue?.state?.name}
            </div>
            <a
              href={event.url}
              target="blank"
              className="font-info hover:text-[#96bb7c]"
            >
              See Tickets
            </a>
          </div>
        </div>
      </div>
      <div className="button font-titles px-2" onClick={removeEventHandler}>
        <div>Remove Event</div>
      </div>
    </div>
  );
}
