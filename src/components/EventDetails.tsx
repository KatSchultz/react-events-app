import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { fetchEventById } from "../services/events.services";
import { Event } from "../types";

export default function EventDetails() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [detailEvent, setDetailEvent] = useState<Event>();

  useEffect(() => {
    getEvent(id!);
  }, [id]);

  function getEvent(id: string) {
    fetchEventById(id).then((response) => {
      console.log(response);
      setDetailEvent(response.data._embedded.events[0]);
    });
  }

  //   console.log(searchParams);
  //   const detailEvent = events.find((event) => event.id === id);

  //   function goToPageNotFound() {
  //     navigate("/not-found");
  //   }

  //   if (!detailEvent) {
  //     goToPageNotFound();
  //   }

  //   console.log("ID: ", id);
  //   console.log(searchParams.get("id"));
  //   console.log(detailEvent);

  if (detailEvent) {
    const date = new Date(detailEvent!.dates.start.dateTime);
    const time = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();

    console.log("detail event: ", detailEvent);
    return (
      <div>
        <div>Display is working</div>
        <div className="time">
          <div>
            {month} {day}, {year}
          </div>
          <div>{time}</div>
        </div>

        <div>{detailEvent?.name}</div>
        <img src={detailEvent?.images[0].url} alt="" />
      </div>
    );
  } else {
    return <div>Event not found</div>;
  }
}
