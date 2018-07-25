import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CreateCardLayout from "./containers/CreateCardLayout/CreateCardLayout";
import ViewCardLayout from "./containers/ViewCardLayout/ViewCardLayout";
import HomePage from "./containers/HomePage/HomePage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/view-card/:cardId" component={ViewCardLayout} />
            <Route path="/create-card" component={CreateCardLayout} />
            <Route path="/" component={HomePage} exact />
          </Switch>
          {/* <CreateCardLayout /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
