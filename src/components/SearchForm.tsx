import React from "react";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const query = e.target.query.value;
    navigate("/search/" + query, { replace: true });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="query" />
      <button>Buscar</button>
    </form>
  );
}

export { SearchForm };
