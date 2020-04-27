import React,{ useState } from 'react';
//import Attachment from './Attachment';
//import {Row,Col} from 'reactstrap';
import { Modal,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Comments.css';
import './Comment.css';
//import Comment  from './Comment';
import axios from 'axios';

const comment_url="http://127.0.0.1:8000/comment";
class Comments extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           data:[],
          toggle13:false,
          toggle15:false
        };
        this.toggle14=this.toggle14.bind(this);
      }
      
        componentDidMount(){
                fetch(comment_url).
                then((Response)=>
                Response.json()).
                then((findresponse)=>
                {
                console.log(findresponse)
                this.setState({
                data:findresponse
                })
                })
                }
      
      toggle14(e){
        this.setState({toggle13:!this.state.toggle13});
      }
    render(){

        let  CommentsModalClose=()=>this.setState({toggle13:false})
        return(
            <div className="bord" >

                <fieldset>
                <legend >Comment</legend>
                {
                this.state.data.map((dynamicData,key)=>
                {
                   if (dynamicData.accounts == this.props.id){
                return(
                <div>
                <Row>
                    <Col>{dynamicData.comment} </Col>
                    <Col>{dynamicData.created_date}</Col>
                </Row>
                </div>
                )
               }
               }
               )
               }

                   <button type="submit" onClick={this.toggle14} >ADD</button>
                     <div>

                    <Comment show={this.state.toggle13} onHide={CommentsModalClose} id={this.props.id}/>
                    </div>
               </fieldset>
                
                
            </div>
        )
    }
}

class Comment extends React.Component{
        constructor(props) {
        super(props)
            this.state = {
            accounts:"",
            comment: ""
            }
         }

        changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
		this.setState({accounts:this.props.id})
		}


        submitHandler = e => {
		e.preventDefault()

		axios.post(comment_url, this.state)
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			})
        }

  render(){

       const {comment} = this.state
    return (

      <Modal {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Comment
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <form onSubmit={this.submitHandler}>
           <Row>
                <textarea type='text' name='comment' value={comment} onChange={this.changeHandler} className="ne" placeholder="Write Comment....."/>
            </Row>
            <div>
            <button type="submit" className="submit" value="submit" onClick={this.props.onHide} >Submit</button>
            </div>
           </form>
      </Modal.Body>

    </Modal>
     );
  }
}

export default Comments;