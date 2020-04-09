import App from "../App/App";
import * as React from "react";

const routes = [
  { path: `/`, action: () => <App></App> },
  { path: `/one`, action: () => <h1>Page One</h1> },
  { path: "/two", action: () => <h1>Page Two</h1> },
  { path: "(.*)", action: () => <h1>Not Found</h1> },
];

export default routes;
