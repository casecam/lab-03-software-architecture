import React from 'react';
import { Switch, Route, Link } from "react-router-dom";

import { About } from './pages/About';
import { Articles } from './pages/Articles';
import { Home } from "./pages/Home";
import styled from "styled-components";

const GreenHeading = styled.h1`
  color: green;
  font-size: 36px;
`;

const App = () => {
	return (
    <>
      <GreenHeading>Server-Side Rendering Example</GreenHeading>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
      </Switch>
    </>
  );
}

export default App;
