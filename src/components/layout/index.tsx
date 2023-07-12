import React from "react";
import { Outlet } from "react-router-dom";
import { SearchForm } from "../searchForm";

function Layout() {
  return (
    <div>
      <header>
        <SearchForm />
      </header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}

export { Layout };
