import React from 'react';
 
import './App.css';
import Newlead from './Newlead';
import LeadDashboard from './LeadDashboard';
import Login from "./Login";
import {BrowserRouter as Router ,Route,Link} from "react-router-dom";
import ApiGet from "./ApiGet";



class App extends React.Component {
       

render(){
  return (
    <div>
       <Router>
         <div>
            <ul>
                < Link to="/"></Link>
            </ul>
            <switch>
                 <Route exact path ='/' component = {Login}/>
                 <Route path ='/LeadDashboard' component = {LeadDashboard}/>
                 <Route path ='/Newlead' component = {Newlead}/>
                 <Route path ='/ApiGet' component = {ApiGet}/>
            </switch>
          </div>
        </Router>

     </div>
  );
}
}
export default App;
