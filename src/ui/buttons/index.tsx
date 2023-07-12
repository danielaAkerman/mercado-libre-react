import React from "react";
import css from "./index.css";

function MainButton({ children }) {
  return <button className={css.root}>{children}</button>;
}

export { MainButton };
