import React from "react";
import { useSelector } from "react-redux";
import "./App.scss";

function App() {
  const notes_data = useSelector((store) => store.Notes);
  return (
    <div className="App">
      <h1 className="h5">{notes_data.test}</h1>
    </div>
  );
}

export default App;
