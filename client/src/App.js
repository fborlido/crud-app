import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Create from "./pages/Create";
import Landing from "./pages/Landing";
import Update from "./pages/Update";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/new">
            <Create />
          </Route>
          <Route exact path="/update/:id">
            <Update />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
