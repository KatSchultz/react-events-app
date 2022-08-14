import React from "react";
import { Event } from "../types";

interface Props {
  event: Event;
}

export default function BucketListItem({ event }: Props) {
  return (
    <div>
      <div>{event.name}</div>
    </div>
  );
}
