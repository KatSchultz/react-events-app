import React from "react";
import SearchForm from "../components/SearchForm";
import SearchResultsDisplay from "../components/SearchResultsDisplay";

export default function SearchPage() {
  return (
    <div>
      <SearchForm />
      <SearchResultsDisplay />
    </div>
  );
}
