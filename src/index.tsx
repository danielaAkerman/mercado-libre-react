import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { AppRoutes } from "./router";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <RecoilRoot>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </RecoilRoot>
  </Suspense>,
  document.querySelector(".example")
);
