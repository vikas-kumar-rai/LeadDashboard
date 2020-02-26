import React,{Component} from 'react';
//import Attachment from './Attachment';
// import {table} from 'react-bootstrape';
import 'bootstrap/dist/css/bootstrap.css';
import './Comments.css';
import Pitched from './Pitched';
 

class Comments extends Component{
    constructor(props) {
        super(props);
        this.state = {
           
          toggle7:false
        };
        this.toggle8=this.toggle8.bind(this);
      }
      

      
      toggle8(e){
        this.setState({toggle7:!this.state.toggle7});
      }
    render(){
      let  PitchedModalClose=()=>this.setState({toggle7:false})
        return(
            <div className="bord" >
                 
                <fieldset>
                <legend >Comment</legend>
                    <h6>This is my first comment </h6>    
                   
                   <h6> This is my second comment  </h6>
                   
                   <button type="submit" onClick={this.toggle8}> ADD </button>
                  <Pitched show={this.state.toggle7} onHide={PitchedModalClose}/>
                   <p></p>
                </fieldset>
                
            </div>
        )
    }
}
export default Comments;