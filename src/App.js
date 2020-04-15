import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SidePanel from "./components/SidePanel";
import AllNotes from "./components/MainPanels/AllNotes";
import RecentNotes from "./components/MainPanels/RecentNotes";
import Settings from "./components/MainPanels/settings/Settings";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App row m-0 p-0">
        <SidePanel />
        <Switch>
          <Route exact path="/">
            <AllNotes />
          </Route>
          <Route path="/all_notes">
            <AllNotes />
          </Route>
          <Route path="/recent_notes">
            <RecentNotes />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
