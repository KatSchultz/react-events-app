import React from "react";
import BucketListItem from "../components/BucketListItem";
import { Event } from "../types";

interface Props {
  bucketList: Event[];
}

export default function BucketList({ bucketList }: Props) {
  return (
    <div>
      <div>Bucket List</div>
      {bucketList.map((event) => (
        <BucketListItem event={event} />
      ))}
    </div>
  );
}
