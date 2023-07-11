import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchResultItem } from "../components/SearchResultItem";
import { useSearchResults } from "../hooks";

function SearchResults() {
  const results = useSearchResults();

  return (
    <ul>
      {results.map((r) => (
        <li key={r.id}>
          {
            <Link to={"/item/" + r.id}>
              <SearchResultItem
                title={r.title}
                price={r.price}
                picture={r.thumbnail}
              />
            </Link>
          }
        </li>
      ))}
    </ul>
  );
}

export { SearchResults };
