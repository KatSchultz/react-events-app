import React, { useState, useEffect, ReactHTML } from "react";
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
  const [userInput, setUserInput] = useState({
    zipCode: "",
    eventDate: "",
    searchDate: "",
    classificationName: "",
    keyword: "",
  });
  // const [zipCode, setZipCode] = useState("");
  // const [eventDate, setEventDate] = useState<string>("");
  // const [searchDate, setSearchDate] = useState<string>("");
  const [familyFriendlyValue, setFamilyFriendlyValue] =
    useState<boolean>(false);
  const [familyFriendly, setFamilyFriendly] = useState("");
  // const [classificationName, setClassificationName] = useState("");
  // const [eventId, setEventId] = useState("");
  // const [keyword, setKeyword] = useState("");

  useEffect(() => {
    getEvents();
    // getEventById();
    // filterEventsByKeyword();
    // filterEventsByZipCode();
    // console.log(familyFriendly);
    // console.log(familyFriendlyValue);
  }, [familyFriendly, familyFriendlyValue]);

  function getEvents() {
    fetchAllEvents().then((response) => {
      console.log(response.data);
      changeEvents(response.data._embedded.events);
    });
  }

  // function getEventById() {
  // 	fetchEventById(eventId).then((response) => console.log(response.data))
  // }

  // function filterEventsByKeyword() {
  // 	fetchEventByKeyword().then(response => console.log(response.data._embedded.events))
  // }

  // function filterEventsByZipCode() {
  //   fetchEventByZipCode(zipCode).then((response) => console.log(response));
  // }

  // function handleZipCodeChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setUserInput({
  //     ...userInput,
  //     zipCode: e.target.value,
  //   });
  //   // setZipCode(e.target.value);
  // }

  // function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setUserInput({
  //     ...userInput,
  //     eventDate: e.target.value,
  //     searchDate: e.target.value + "T00:00:01Z",
  //   });
  //   // setEventDate(e.target.value);
  //   // setSearchDate(e.target.value + "T00:00:01Z");
  // }

  // function handleFamilyFriendlyChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setFamilyFriendlyValue(e.target.checked);
  //   e.target.checked ? setFamilyFriendly("only") : setFamilyFriendly("no");
  // }

  function handleGenreChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setUserInput({
      ...userInput,
      classificationName: e.target.value,
    });
    // setClassificationName(e.target.value);
  }

  // function handleKeywordChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setUserInput({
  //     ...userInput,
  //     keyword: e.target.value,
  //   });
  //   // setKeyword(e.target.value);
  // }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, ...{ [e.target.name]: e.target.value } });
    // console.log(userInput.zipCode);
  }

  function handleSubmitButton(e: React.FormEvent) {
    e.preventDefault();
    filterEvents({
      postalCode: userInput.zipCode,
      date: userInput.searchDate,
      // includeFamily:  userInput.familyFriendly,
      classificationName: userInput.classificationName,
      keyword: userInput.keyword,
    }).then((response) => {
      changeEvents(response.data._embedded.events);
      // console.log(events);
      console.log(response);
    });
    // clearFormValues();
  }

  function clearFormValues() {
    setUserInput({
      zipCode: "",
      eventDate: "",
      searchDate: "",
      classificationName: "",
      keyword: "",
    });

    // setZipCode("");
    // setEventDate("");
    // setFamilyFriendlyValue(false);
  }

  return (
    <div className="search-form-container flex-col justify-center align-center border-double border-4 border-[#184d47] m-[8px]">
      <form action="" className="bg-white">
        <div className="criteriaSection">
          <label htmlFor="zipcode">
            Enter zip code to find events near you
          </label>
          <input
            className="zip-code"
            type="number"
            name="zipCode"
            id="zipcode"
            placeholder="48082"
            onChange={handleChange}
            value={userInput.zipCode}
          />
        </div>

        <div className="criteriaSection">
          <label htmlFor="eventdate">Select date</label>
          <input
            type="date"
            name="eventDate"
            id="eventdate"
            value={userInput.eventDate}
            onChange={handleChange}
          />
        </div>

        <div className="criteriaSection">
          <label htmlFor="familyFriendly" className="p-2">
            Family friendly only
          </label>
          <input
            type="checkbox"
            name="familyFriendly"
            id="familyFriendly"
            checked={familyFriendlyValue}
            onChange={handleChange}
          />
        </div>
        <div className="criteriaSection">
          <label>Categories</label>
          <select
            id="classificationName"
            className="text-center"
            name="classificationName"
            onChange={handleGenreChange}
          >
            <option value="">Any</option>
            <option value="sports">Sports</option>
            <option value="music">Music</option>
            <option value="comedy">Comedy</option>
          </select>
        </div>

        <div className="criteriaSection">
          <label className="p-2" htmlFor="keywordSearch">
            Enter a keyword
          </label>
          <input
            className="keyword-text"
            type="text"
            name="keyword"
            id="keyword"
            value={userInput.keyword}
            onChange={handleChange}
          />
        </div>
      </form>

      <button
        className="p-1 mb-2 hover:bg-[#184d47] hover:text-white"
        type="submit"
        onClick={handleSubmitButton}
      >
        Search
      </button>
    </div>
  );
}

// Dates, venue
