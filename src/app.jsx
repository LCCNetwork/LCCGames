import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

const loader = (
  <div
    style={{
      display: "flex",
      width: "100%",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <p>Loading...</p>
  </div>
);

const LoadableComponent = Component => {
  return () => (
    <Suspense fallback={loader}>
      <Component />
    </Suspense>
  );
};

const Home = LoadableComponent(lazy(() => import("./views/Home.jsx")));

render(
  <BrowserRouter>
    <Route path="/" exact component={Home} />
  </BrowserRouter>,
  document.getElementById("app")
);
