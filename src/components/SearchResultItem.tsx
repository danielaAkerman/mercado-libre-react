import React from "react";
import css from "./searchResultItem.css";

type SearchResultItemProps = {
  title: string;
  price: number;
  picture: string;
};

function SearchResultItem(props: SearchResultItemProps) {
  const { title, price, picture } = props;
  return (
    <div className={css.root}>
      <img src={picture} className={css.root__picture}/>
      <div className={css.root__data}>
        <h2>{title}</h2>
        <h3>${price}</h3>
      </div>
    </div>
  );
}

export { SearchResultItem };
