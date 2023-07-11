import React from "react";
type SearchResultItemProps = {
  title: string;
  price: number;
  picture: string;
};

function SearchResultItem(props: SearchResultItemProps) {
  const { title, price, picture } = props;
  return (
    <div className="search-result-item">
      <img src={picture} className="search-result-item__picture" />
      <div className="search-result-item__data">
        <h2>{title}</h2>
        <h3>${price}</h3>
      </div>
    </div>
  );
}

export { SearchResultItem };
