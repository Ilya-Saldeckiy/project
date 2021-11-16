import React from 'react';
import {
    Route,
    Switch,
} from "react-router-dom"
import {useHistory} from "react-router";
import HomePage from "./components/HomePage/HomePage";

import "./styles/main.scss"

function App() {

    const history = useHistory();

  return (
      <div className="container">
          <Switch>
              <Route exact history={history} path='/' component={HomePage}/>
          </Switch>
      </div>
  );
}

export default App;
