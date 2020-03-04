import React,{Component} from 'react';
//import Attachment from './Attachment';
 
import 'bootstrap/dist/css/bootstrap.css';
import './Comments.css';
import Comment  from './Comment';
 

class Comments extends Component{
    constructor(props) {
        super(props);
        this.state = {
           
          toggle13:false,
          toggle15:false
        };
        this.toggle14=this.toggle14.bind(this);
      }
      

      
      toggle14(e){
        this.setState({toggle13:!this.state.toggle13});
      }
    render(){
       
   
        return(
            <div className="bord" >
                 
                <fieldset>
                <legend >Comment</legend>
                    <h6>This is my first comment </h6>    
                   
                   <h6> This is my second comment  </h6>
                   
                   <button type="submit"  onClick={this.toggle14} >ADD</button>
                     {this.state.toggle13 ?  (<Comment onHide={this.toggle14}/>) : ""}
                   
                    
                </fieldset>
                
                
            </div>
        )
    }
}
export default Comments;