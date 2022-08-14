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

interface Props {
  changeEvents: (events: Event[]) => void;
}

export default function SearchForm({ changeEvents }: Props) {
  const [zipCode, setZipCode] = useState("");
  const [eventDate, setEventDate] = useState<string>("");
  const [searchDate, setSearchDate] = useState<string>("");
  const [familyFriendlyValue, setFamilyFriendlyValue] =
    useState<boolean>(false);
  const [familyFriendly, setFamilyFriendly] = useState("");
  const [eventId, setEventId] = useState("");

  useEffect(() => {
    getEvents();
    // getEventById();
    // filterEventsByKeyword();
    // filterEventsByZipCode();
    console.log(familyFriendly);
    console.log(familyFriendlyValue);
  }, [familyFriendly, familyFriendlyValue]);

  function getEvents() {
    fetchAllEvents().then((response) => {
      // console.log(response.data);
      changeEvents(response.data._embedded.events);
    });
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
  }

  function handleFamilyFriendlyChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFamilyFriendlyValue(e.target.checked);
    e.target.checked ? setFamilyFriendly("only") : setFamilyFriendly("no");
  }

  function handleSubmitButton(e: React.FormEvent) {
    e.preventDefault();
    filterEvents({
      postalCode: zipCode,
      date: searchDate,
      includeFamily: familyFriendly,
    }).then((response) => {
      changeEvents(response.data._embedded.events);
    });
    // clearFormValues();
  }

  function clearFormValues() {
    setZipCode("");
    setEventDate("");
    setFamilyFriendlyValue(false);
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
            checked={familyFriendlyValue}
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
