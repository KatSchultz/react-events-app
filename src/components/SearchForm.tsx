import React, { useState } from "react";
import "./SearchForm.css";
import SearchResultsDisplay from "./SearchResultsDisplay";

export default function SearchForm() {
	const [zipCode, setZipCode] = useState<string>("48082");
	const [eventDate, setEventDate] = useState<string>("2022-08-24");
	const [familyFriendly, setFamilyFriendly] = useState<boolean>(false);

	function handleZipCodeChange(e: React.ChangeEvent<HTMLInputElement>) {
		setZipCode(e.target.value);
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
