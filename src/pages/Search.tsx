import SearchForm from "../components/SearchForm";
import SearchResultsDisplay from "../components/SearchResultsDisplay";
import { Event } from "../types";

interface Props {
  addBucketListEvent: (event: Event) => void;
  bucketList: Event[];
  changeEvents: (events: Event[]) => void;
  events: Event[];
}

export default function SearchPage({
  addBucketListEvent,
  events,
  bucketList,
  changeEvents,
}: Props) {
  return (
    <div>
      <SearchForm changeEvents={changeEvents} />
      <SearchResultsDisplay
        events={events}
        bucketList={bucketList}
        addBucketListEvent={addBucketListEvent}
      />
    </div>
  );
}
