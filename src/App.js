import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Home} from './components/Home/Home.jsx';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
          <Switch>
              <Route path="/" component={Home}/>
          </Switch>
        </Router>
    </div>
  );
}
export default App;
