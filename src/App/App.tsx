import React, { useEffect } from "react";
import "./App.scss";
import { fetch } from "../store/count/action";
import { useDispatch, useSelector } from "react-redux";
import { getCount } from "../store/count/selectors";

function App() {
  const dispatch = useDispatch();
  dispatch(fetch());
  const count = useSelector(getCount);

  return (
    <div className="App">
      <header className="App-header">
        <div>{count}</div>
      </header>
    </div>
  );
}

export default App;
