import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  selector,
  useSetRecoilState,
} from "recoil";

const queryState = atom({
  key: "query",
  default: "",
});
const resultsState = selector({
  key: "searchResults",
  get: async ({ get }) => {
    const valorDeQuery = get(queryState);
    if (valorDeQuery) {
      const response = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=" + valorDeQuery
      );
      const json = await response.json();
      return json.results;
    } else {
      return [];
    }
  },
});

function useSearchResults() {
  // 1 - Escuchar params url
  const params = useParams();
  const query = params.query;

  // 3 - 
  const setQueryValue = useSetRecoilState(queryState);
  const results = useRecoilValue(resultsState);

  // 2 - Avisarle a Recoil
  useEffect(() => {
    setQueryValue(query);
  }, [query]);
  return results;
}

export { useSearchResults };
