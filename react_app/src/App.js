import React from 'react';

import './App.css';
import Newlead from './Newlead';
// import Test from './Test';
import Login from "./Login"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LeadDashboard from './LeadDashboard';




class App extends React.Component {


  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              < Link to="/"></Link>
            </ul>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/LeadDashboard' component={LeadDashboard} />
              <Route path='/Newlead' component={Newlead} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
export default App;
