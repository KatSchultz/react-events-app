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
  events: Event[];
}

export default function SearchForm({ events, changeEvents }: Props) {
  const [userInput, setUserInput] = useState({
    zipCode: "",
    classificationName: "",
    keyword: "",
  });
  const [eventDate, setEventDate] = useState<string>("");
  const [searchDate, setSearchDate] = useState<string>("");
  const [familyFriendlyValue, setFamilyFriendlyValue] =
    useState<boolean>(false);

  useEffect(() => {
    getEvents();
  }, []);

  function getEvents() {
    fetchAllEvents().then((response) => {
      console.log(response.data);
      changeEvents(response.data._embedded.events);
    });
  }

  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    // setUserInput({
    //   ...userInput,
    //   eventDate: e.target.value,
    //   searchDate: e.target.value + "T00:00:01Z",
    // });
    setEventDate(e.target.value);
    setSearchDate(e.target.value + "T00:00:01Z");
  }

  function handleGenreChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setUserInput({
      ...userInput,
      classificationName: e.target.value,
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, ...{ [e.target.name]: e.target.value } });
    // console.log(userInput.zipCode);
  }

  function handleSubmitButton(e: React.FormEvent) {
    e.preventDefault();
    filterEvents({
      postalCode: userInput.zipCode,
      classificationName: userInput.classificationName,
      keyword: userInput.keyword,
      date: searchDate,
    }).then((response) => {
      changeEvents(response.data?._embedded?.events || []);
    });
  }

  function clearFormValues() {
    setUserInput({
      zipCode: userInput.zipCode,
      classificationName: "",
      keyword: userInput.keyword,
    });
  }

  return (
    <div className="search-form-container flex-col justify-center align-center border-b-4  border-[#184d47] m-[8px]">
      <form action="" className="bg-white">
        <div className="criteriaSection">
          <label htmlFor="zipcode" className="font-info">
            Enter zip code to find events near you
          </label>
          <input
            type="text"
            maxLength={5}
            className="zip-code font-info"
            name="zipCode"
            id="zipcode"
            placeholder="48226"
            onChange={handleChange}
            value={userInput.zipCode}
          />
        </div>

        <div className="criteriaSection">
          <label htmlFor="eventdate" className="font-info">
            Select date
          </label>
          <input
            type="date"
            name="eventDate"
            id="eventdate"
            value={eventDate}
            onChange={handleDateChange}
            className="font-info"
          />
        </div>

        <div className="criteriaSection">
          <label className="font-info">Categories</label>
          <select
            id="classificationName"
            className="text-center font-info border-solid border-[#184d47]"
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
          <label className="p-2 font-info" htmlFor="keywordSearch">
            Enter a keyword
          </label>
          <input
            className="keyword-text font-info"
            type="text"
            name="keyword"
            id="keyword"
            value={userInput.keyword}
            onChange={handleChange}
          />
        </div>
      </form>

      <button
        className="p-2 mb-2 bg-[#96bb7c] hover:bg-[#184d47] hover:text-white font-info"
        type="submit"
        onClick={handleSubmitButton}
      >
        Search
      </button>
    </div>
  );
}
