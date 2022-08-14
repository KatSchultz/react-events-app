import React from "react";
import BucketListItem from "../components/BucketListItem";
import { Event } from "../types";

interface Props {
  bucketList: Event[];
  removeEvent: (id: string) => void;
}

export default function BucketList({ bucketList, removeEvent }: Props) {
  return (
    <div>
      <div>Bucket List</div>
      {bucketList.map((event) => (
        <BucketListItem event={event} removeEvent={removeEvent} />
      ))}
    </div>
  );
}
