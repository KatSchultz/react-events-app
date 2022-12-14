import SearchForm from "../components/SearchForm";
import SearchResultsDisplay from "../components/SearchResultsDisplay";
import { Event } from "../types";

interface Props {
  addBucketListEvent: (event: Event) => void;
  removeBucketListEvent: (id: string) => void;
  bucketList: Event[];
  changeEvents: (events: Event[]) => void;
  events: Event[];
}

export default function SearchPage({
  addBucketListEvent,
  removeBucketListEvent,
  events,
  bucketList,
  changeEvents,
}: Props) {
  return (
    <div className="w-full">
      <SearchForm changeEvents={changeEvents} events={events} />
      <div className="">
        <SearchResultsDisplay
          events={events}
          bucketList={bucketList}
          addBucketListEvent={addBucketListEvent}
          removeBucketListEvent={removeBucketListEvent}
        />
      </div>
    </div>
  );
}
