import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { fetchEventById } from "../services/events.services";
import { Event } from "../types";

interface Props {
  bucketList: Event[];
}

export default function EventDetails({ bucketList }: Props) {
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
    const onBucketList = bucketList.find((item) => item.id === detailEvent.id);
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
        <div>{detailEvent.name}</div>
        <div className="time">
          <div>
            {month} {day}, {year}
          </div>
          <div>{time}</div>
        </div>
        <div>On Your Bucket List: {onBucketList ? "Yes" : "No"} </div>

        <div>Info: {detailEvent.info}</div>
        <div>
          <a href={detailEvent.url} target="blank">
            See Tickets
          </a>
        </div>
        <img src={detailEvent?.images[0].url} alt="" />
      </div>
    );
  } else {
    return <div>Event not found</div>;
  }
}
