import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Resource from "./components/DisplayResource";

import styled from "styled-components";

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: auto;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/resource/:id" component={Resource} />
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
