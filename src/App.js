import React from "react";
import Home from "./Components/Home/Home";
import Auth from "./Components/Auth/Auth";

import { HashRouter, Routes, Route, Switch } from "react-router-dom";
import Protected from "./Components/Protected/Protected";

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/dashboard" >
            <Protected cmp={Home}/>
          </Route>
          
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
