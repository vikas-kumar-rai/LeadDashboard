import React from 'react';
import './App.css';
import Newlead from './Newlead';
//import  Test from './Test';
import Login from "./Login";
import Logout from "./Logout"
import LeadDashboard from './LeadDashboard';
import {BrowserRouter as Router ,Route,Link,Switch} from "react-router-dom";


class App extends React.Component {
render(){
  return (
    <Router> 

    <div>
      <ul>
        < Link to="/"></Link>
      </ul>
        <Switch>
            <Route exact path ='/' component = {Login}/>
            <Route path ='/Login' component = {Login}/>
            <Route path ='/LeadDashboard' component = {LeadDashboard}/>
            <Route path='/Newlead' component={Newlead}/>
            <Route exact exact path ='/Logout' component = {Logout}/>
        </Switch>
    </div>
    </Router>

   
  );
}
}
export default App;