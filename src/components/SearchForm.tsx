import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearchResults } from "../hooks";
import css from "./searchForm.css";

function SearchForm() {
  const navigate = useNavigate();
  const results = useSearchResults();
  function handleSubmit(e) {
    e.preventDefault();
    const query = e.target.query.value;
    navigate("/search/" + query, { replace: true });
  }
  return (
    <form onSubmit={handleSubmit} className={css.root}>
      <input name="query" />
      <button>Buscar</button>
      <h4>Resultados: {results.length}</h4>
    </form>
  );
}

export { SearchForm };
