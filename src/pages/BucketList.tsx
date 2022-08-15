import BucketListItem from "../components/BucketListItem";
import { Event } from "../types";

interface Props {
  bucketList: Event[];
  removeEvent: (id: string) => void;
}

export default function BucketList({ bucketList, removeEvent }: Props) {
  return (
    <div className="container">
      <div>Bucket List</div>
      {bucketList.length === 0 && <div>Nothing on your Bucket List!</div>}

      {bucketList.map((event) => (
        <BucketListItem
          key={event.id}
          event={event}
          removeEvent={removeEvent}
        />
      ))}
    </div>
  );
}
