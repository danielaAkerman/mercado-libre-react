import React from "react";
import { Outlet } from "react-router-dom";
import { SearchForm } from "./SearchForm";

function Layout() {
  return (
    <div>
      <header style={{ backgroundColor: "yellow" }}>
        <SearchForm />
      </header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}

export { Layout };
