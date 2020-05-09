import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Resource from "./screens/Resource";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/resource/:id" component={Resource} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
