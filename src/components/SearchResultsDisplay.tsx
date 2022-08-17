import React from "react";
import { Event } from "../types";

import SingleEvent from "./SingleEvent";

interface Props {
	events: Event[];
	bucketList: Event[];
	addBucketListEvent: (event: Event) => void;
}

export default function SearchResultsDisplay({
	events,
	bucketList,
	addBucketListEvent,
}: Props) {
	const displayEvents = [...events];
	displayEvents.sort(
		(a, b) =>
			new Date(a.dates.start.dateTime).getTime() -
			new Date(b.dates.start.dateTime).getTime()
	);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			{events.length === 0 && (
				<h2 className="pb-3 text-xl">No results found</h2>
			)}
			{displayEvents.map((event) => (
				<SingleEvent
					event={event}
					bucketList={bucketList}
					key={event.id}
					addBucketListEvent={addBucketListEvent}
				/>
			))}
		</div>
	);
}
