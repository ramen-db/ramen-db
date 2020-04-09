import React from "react";
import * as serviceWorker from "./serviceWorker";
import UniversalRouter from "universal-router";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import routes from "./router/index";

const URL = `/${window.location.pathname.replace(/^\/([^\/]*).*$/, "$1")}`;
const router = new UniversalRouter(routes);

router
  .resolve({
    pathname: URL,
  })
  .then((component) => {
    // ReactDOM.render(
    //   <React.StrictMode>{component}</React.StrictMode>,
    //   document.getElementById("root")
    // );
    hydrate(
      <Provider store={store}>{component}</Provider>,
      document.getElementById("root")
    );
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
