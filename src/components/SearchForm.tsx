import React, { useState, useEffect } from "react";
import "./SearchForm.css";
import SearchResultsDisplay from "./SearchResultsDisplay";
import { fetchAllEvents, fetchEventByZipCode, fetchEventById, fetchEventByKeyword } from "../services/events.services";
import { Event } from "../types";

export default function SearchForm() {
	const [zipCode, setZipCode] = useState("");
	const [eventDate, setEventDate] = useState<string>("2022-08-24");
	const [familyFriendly, setFamilyFriendly] = useState<boolean>(false);
	const [events, setEvents] = useState();
  	const [eventId, setEventId] = useState('');

  	useEffect(() => {
		// getEvents();
		// getEventById();
		// filterEventsByKeyword();
		filterEventsByZipCode();
  	}, []);

	// function getEvents() {
	// 	fetchAllEvents().then((response) => console.log(response));
	// }

	// function getEventById() {
	// 	fetchEventById(eventId).then((response) => console.log(response.data))
	// }

	// function filterEventsByKeyword() {
	// 	fetchEventByKeyword().then(response => console.log(response.data._embedded.events))
	// }

	function filterEventsByZipCode() {
		fetchEventByZipCode(zipCode).then(response => console.log(response))
	}

	function handleZipCodeChange(e: React.ChangeEvent<HTMLInputElement>) {
		setZipCode(e.target.value);
		console.log(zipCode)
	}

	function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
		setEventDate(e.target.value);
	}

	function handleSubmitButton(e: React.FormEvent) {
		e.preventDefault();
		clearFormValues();
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
		</div>
	);
}

// Dates, venue
