import "./SingleEvent.css";
import { Event } from "../types";
import { useNavigate } from "react-router-dom";

interface Props {
	event: Event;
	bucketList: Event[];
	addBucketListEvent: (event: Event) => void;
}

export default function SingleEvent({
	event,
	bucketList,
	addBucketListEvent,
}: Props) {
	const navigate = useNavigate();

	const onBucketList = bucketList.find((item) => item.id === event.id);

	function bucketClickHandler(event: Event) {
		addBucketListEvent(event);
	}

	function goToEventDetails() {
		navigate(`/event/${event.id}`);
	}

	const date = new Date(event.dates.start.dateTime);
	const time = date.toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "2-digit",
	});
	const day = date.getDate();
	const month = date.toLocaleString("en-US", { month: "short" });
	const year = date.getFullYear();
	const venue = event._embedded.venues[0];

	return (
		<div className="single-event">
			<div className="date-details-container">
				<div className="date font-info">
					<div>
						{month} {day}, {year},
					</div>
					<div>{time}</div>
				</div>
				<div className="event-details">
					<div className="event-name font-titles" onClick={goToEventDetails}>
						{event.name}
					</div>
					<div className="font-info">
						Location: {venue.name} <br /> {venue.address.line1} <br />{" "}
						{venue.city.name}, {venue.state.name}
					</div>
					<a
						href={event.url}
						target="blank"
						className="font-info hover:text-[#96bb7c]"
					>
						See Tickets
					</a>
				</div>
			</div>
			{onBucketList === undefined ? (
				<div
					className="button font-titles"
					onClick={() => bucketClickHandler(event)}
				>
					<div>
						Add to <br />
						Bucket List
					</div>
				</div>
			) : (
				<div
					className="button font-titles"
					style={{ backgroundColor: "#184d47", color: "#fad586" }}
				>
					<div>
						On Your <br />
						Bucket List
					</div>
				</div>
			)}
		</div>
	);
}
