import React, { Component } from "react";
import "./App.css";
import CreateCardLayout from "./containers/CreateCardLayout/CreateCardLayout";
import ViewCardLayout from "./containers/ViewCardLayout/ViewCardLayout";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/view-card/:cardId" component={ViewCardLayout} />
            <Route path="/create-card" component={CreateCardLayout} /> 
            <Route path="/" component={ViewCardLayout} exact />
          </Switch>
          {/* <CreateCardLayout /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
