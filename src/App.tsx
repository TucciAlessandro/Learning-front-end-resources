import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Resource from "./screens/Resource";
import styled from "styled-components";
import { MyThemeContextsProvider } from "./context/ThemeContexts";
import { MyDataContextProvider, useDataContext } from "./context/DataContext";
import { Form } from "./screens/Form";

const AppContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  ${(props) => props.theme.gradient}
  /* 
  &::-webkit-scrollbar {
  width: 20px;
}
&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
  z-index: 10;
} */

  overflow: auto;
`;

function AppContent() {
  const { loading } = useDataContext();
  return (
    <>
      {!loading ? (
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/resource/:id" component={Resource} />
          <Route exact path='/post'  component={Form} />
        </Switch>
      ) : (
        <div>loading!</div>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MyDataContextProvider>
        <MyThemeContextsProvider>
          <AppContainer>
            <AppContent />
          </AppContainer>
        </MyThemeContextsProvider>
      </MyDataContextProvider>
    </BrowserRouter>
  );
}

export default App;
