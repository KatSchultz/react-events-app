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
			<div className="flex flex-col justify-center items-center">
				<div className="font-titles text-xl">{detailEvent.name}</div>
				<div className="time font-info">
					<div>
						{month} {day}, {year}
					</div>
					<div>{time}</div>
				</div>

				<div>
					{onBucketList ? (
						<button
							className="p-1 mb-2 bg-[#96bb7c] hover:bg-[#184d47] hover:text-white font-info"
							onClick={() => removeBucketListEvent(detailEvent.id)}
						>
							Remove From
							<br />
							Bucket List
						</button>
					) : (
						<button
							className="p-1 mb-2 bg-[#96bb7c] hover:bg-[#184d47] hover:text-white font-info"
							onClick={() => addBucketListEvent(detailEvent)}
						>
							Add To
							<br />
							Bucket List
						</button>
					)}
				</div>

				<div className="font-info">Info: {detailEvent.info}</div>
				<div className="font-info hover:text-[#96bb7c]">
					<a href={detailEvent.url} target="blank">
						See Tickets
					</a>
				</div>
				<img className="p-2" src={detailEvent?.images[0].url} alt="" />
			</div>
		);
	} else {
		return <div>Event not found</div>;
	}
}
