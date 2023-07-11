import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { atom, useRecoilState, useRecoilValue, selector } from "recoil";

const query = atom({
  key: "query",
  default: "",
});
const currentUserNameQuery = selector({
  key: "searchResults",
  get: async ({ get }) => {
    const valorDeQuery = get(query);
    console.log({valorDeQuery})
  },
});

function useSearchResults() {
  const params = useParams();
  const query = params.query;
  const [results, setResults] = useState([]);

  async function pullResults() {
    const response = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=" + query
    );
    const json = await response.json();
    setResults(json.results);
  }

  useEffect(() => {
    if (query) {
      console.log("custom hook", query);
      pullResults();
    }
  }, [query]);
  return results;
}

export { useSearchResults };
