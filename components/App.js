import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Destination from "./Destination";
import Main from "./Main";
import Crew from "./Crew";
import Technology from "./Technology";
import NotFound from "./NotFound";

export default function App() {
  return (
    <Switch>
      <Route exact path="/space-tourism">
        <Navbar />
        <Main />
      </Route>

      <Route exact path="/space-tourism/destination">
        <Navbar />
        <Destination />
      </Route>

      <Route exact path="/space-tourism/crew">
        <Navbar />
        <Crew />
      </Route>

      <Route exact path="/space-tourism/technology">
        <Navbar />
        <Technology />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
