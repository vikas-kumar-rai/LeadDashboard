import React from 'react';
 
import './App.css';

import LeadDashboard from './LeadDashboard';
import Login from "./Login"
import {BrowserRouter as Router ,Route,Link} from "react-router-dom";
 



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

            </switch>
          </div>
        </Router>

     </div>
  );
}
}
export default App;
