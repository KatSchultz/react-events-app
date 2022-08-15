import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchEventById } from "../services/events.services";
import { Event } from "../types";

interface Props {
  bucketList: Event[];
  addBucketListEvent: (event: Event) => void;
  removeBucketListEvent: (id: string) => void;
}

export default function EventDetails({
  bucketList,
  addBucketListEvent,
  removeBucketListEvent,
}: Props) {
  const { id } = useParams();
  const [detailEvent, setDetailEvent] = useState<Event>();

  useEffect(() => {
    getEvent(id!);
  }, [id]);

  function getEvent(id: string) {
    fetchEventById(id).then((response) => {
      setDetailEvent(response.data._embedded.events[0]);
    });
  }

  if (detailEvent) {
    const onBucketList = bucketList.find((item) => item.id === detailEvent.id);
    const date = new Date(detailEvent.dates.start.dateTime);
    const time = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();

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
        <div>
          {onBucketList ? (
            <button onClick={() => removeBucketListEvent(detailEvent.id)}>
              Remove From
              <br />
              Bucket List
            </button>
          ) : (
            <button onClick={() => addBucketListEvent(detailEvent)}>
              Add To
              <br />
              Bucket List
            </button>
          )}
        </div>

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
