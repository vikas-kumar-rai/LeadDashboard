import React,{Component} from 'react';
import {button, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Comment.css';
class Comment extends Component{
    render(){
        return(
            <div>
                <h3>Comment</h3>
                <textarea className="ne">
                </textarea><br></br>
                <Row >
                    <Col>
                        <button type="button" className="addtocalender">Add To Calender?</button>
                    </Col>
                    <Col>
                        <button type="submit" className="sub">Submit</button>
                    </Col>
                </Row>
                
            </div>
        )
    }
}
export default Comment;