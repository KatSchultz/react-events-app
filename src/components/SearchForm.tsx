import React, { useState, useEffect } from "react";
import "./SearchForm.css";
import SearchResultsDisplay from "./SearchResultsDisplay";
import {
	fetchAllEvents,
	fetchEventByZipCode,
	fetchEventById,
	filterEvents,
} from "../services/events.services";
import { Event } from "../types";

export default function SearchForm() {
	const [zipCode, setZipCode] = useState("");
	const [eventDate, setEventDate] = useState<string>("");
	const [searchDate, setSearchDate] = useState<string>("");
	const [familyFriendly, setFamilyFriendly] = useState<boolean>(false);
	const [events, setEvents] = useState([]);
	const [eventId, setEventId] = useState("");

	useEffect(() => {
		getEvents();
		// getEventById();
		// filterEventsByKeyword();
		// filterEventsByZipCode();
	}, []);

	function getEvents() {
		fetchAllEvents().then((response) => console.log(response.data));
	}

	// function getEventById() {
	// 	fetchEventById(eventId).then((response) => console.log(response.data))
	// }

	// function filterEventsByKeyword() {
	// 	fetchEventByKeyword().then(response => console.log(response.data._embedded.events))
	// }

	function filterEventsByZipCode() {
		fetchEventByZipCode(zipCode).then((response) => console.log(response));
	}

	function handleZipCodeChange(e: React.ChangeEvent<HTMLInputElement>) {
		setZipCode(e.target.value);
	}

	function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
		setEventDate(e.target.value);
		setSearchDate(e.target.value + "T00:00:01Z");
		console.log(`Value: ${e.target.value}`);
		console.log(`Event date: ${eventDate}`);
		console.log(`Search date: ${searchDate}`);
	}

	function handleSubmitButton(e: React.FormEvent) {
		e.preventDefault();
		console.log(searchDate);
		filterEvents({ postalCode: zipCode, date: searchDate }).then((response) => {
			console.log(response);
			setEvents(response.data._embedded.events);
		});
		// clearFormValues();
	}

	function handleFamilyFriendlyChange(e: React.ChangeEvent<HTMLInputElement>) {
		setFamilyFriendly(e.target.checked);
	}

	function clearFormValues() {
		setZipCode("");
		setEventDate("");
		setFamilyFriendly(false);
	}

	return (
		<div>
			SearchForm
			<form action="">
				<div className="criteriaSection">
					<label htmlFor="zipcode">
						Enter zip code to find events near you
					</label>
					<input
						type="number"
						name="zipCode"
						id="zipcode"
						placeholder="48082"
						onChange={handleZipCodeChange}
						value={zipCode}
					/>
				</div>

				<div className="criteriaSection">
					<label htmlFor="eventdate">Select date</label>
					<input
						type="date"
						name="eventDate"
						id="eventdate"
						value={eventDate}
						onChange={handleDateChange}
					/>
				</div>

				<div className="criteriaSection">
					<label htmlFor="familyFriendly">Family friendly only</label>
					<input
						type="checkbox"
						name="familyFriendly"
						id="familyFriendly"
						checked={familyFriendly}
						onChange={handleFamilyFriendlyChange}
					/>
				</div>

				<button type="submit" onClick={handleSubmitButton}>
					Search
				</button>
			</form>
			<SearchResultsDisplay events={events} />
		</div>
	);
}

// Dates, venue
