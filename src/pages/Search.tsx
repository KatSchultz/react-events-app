import React from "react";
import SearchForm from "../components/SearchForm";
import SearchResultsDisplay from "../components/SearchResultsDisplay";
import { Event } from "../types";

interface Props {
  addBucketListEvent: (event: Event) => void;
}

export default function SearchPage({ addBucketListEvent }: Props) {
  return (
    <div>
      <SearchForm addBucketListEvent={addBucketListEvent} />
    </div>
  );
}
