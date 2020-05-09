import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Resource from "./components/DisplayResource";

import styled from "styled-components";

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: #2c3e50; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #4ca1af,
    #2c3e50
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #4ca1af,
    #2c3e50
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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
