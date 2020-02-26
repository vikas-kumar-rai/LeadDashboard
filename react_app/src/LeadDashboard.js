import React from 'react';
 
import 'bootstrap/dist/css/bootstrap.css';
import {Container,Row,Col ,ListGroup, ListGroupItem} from 'reactstrap';
import './LeadDashboard.css';
import AddDepModal from './AddDepModel';
class LeadDashboard extends React.Component{
  constructor(props){
    super(props);
    this.state={
      toggle1 : false
    }
    this.toggle=this.toggle.bind(this);
  }
  toggle(e){
    this.setState({ toggle1:!this.toggle1  });
    
  }
   render(){
    let addModalClose=()=>this.setState({toggle1:false})
   return(
   <div>
     <br></br>
      <br></br>
    <Container className="themed-container" fluid="md">
    <div className="block-example border border-dark">
        <h1 class="text-center">Lead Dashboard</h1>
      <br></br>

    <Row>
        <Col>

         <ListGroup>
      <ListGroupItem color='success'> New</ListGroupItem>
      <ListGroupItem ><label for="lms">LMS System </label><input type="radio" value="medium" onClick={this.toggle} className="lmssystem" name = "radio1" id="lms"/></ListGroupItem>
      <AddDepModal show={this.state.toggle1} onHide={addModalClose} />
      <ListGroupItem><label for="elearning">eLearning</label><input type="radio" value="medium" className="elearning" onClick={this.toggle} name = "radio1" id="elearning"/></ListGroupItem>
      <AddDepModal show={this.state.toggle1} onHide={addModalClose} />
      <ListGroupItem><label for="MarketPlace">MarketPlace</label><input type="radio" value="medium" className="marketplace" onClick={this.toggle} name = "radio1" id="MarketPlace"/></ListGroupItem>
      <AddDepModal show={this.state.toggle1} onHide={addModalClose} />
    </ListGroup>

        </Col>
        <Col>   <ListGroup>
      <ListGroupItem color='success'>Accepted</ListGroupItem>
      <ListGroupItem><label for="lms1">LMS System </label><input type="radio" value="medium" className="lmssystem" onClick={this.toggle} name = "radio1" id="lms1"/></ListGroupItem>
      <AddDepModal show={this.state.toggle1} onHide={addModalClose} />
      <ListGroupItem><label for="elearning1">eLearning</label> <input type="radio" value="medium" className="elearning" onClick={this.toggle} name = "radio1"id="elearning1"/></ListGroupItem>
      <AddDepModal show={this.state.toggle1} onHide={addModalClose} />
      <ListGroupItem><label for="MarketPlace1">MarketPlace</label> <input type="radio" value="medium" className="marketplace" onClick={this.toggle} name = "radio1" id="MarketPlace1"/></ListGroupItem>
      <AddDepModal show={this.state.toggle1} onHide={addModalClose} />
    </ListGroup>   </Col>
        <Col> <ListGroup>
      <ListGroupItem color='success'>Pitched</ListGroupItem>
      <ListGroupItem><label for="lms2">LMS System </label><input type="radio" value="medium" className="lmssystem" onClick={this.toggle} name = "radio1" id="lms2"/></ListGroupItem>
      <AddDepModal show={this.state.toggle1} onHide={addModalClose} />
      <ListGroupItem><label for="elearning2">eLearning</label> <input type="radio" value="medium" className="elearning" onClick={this.toggle} name = "radio1" id="elearning2"/></ListGroupItem>
      <AddDepModal show={this.state.toggle1} onHide={addModalClose} />
      <ListGroupItem><label for="MarketPlace2">MarketPlace</label> <input type="radio" value="medium" className="marketplace" onClick={this.toggle} name = "radio1" id="MarketPlace2"/></ListGroupItem>
      <AddDepModal show={this.state.toggle1} onHide={addModalClose} />
    </ListGroup>    </Col>
        <Col>  <ListGroup>
      <ListGroupItem color='success'>Response Generated</ListGroupItem>
      <ListGroupItem><label for="lms3">LMS System </label><input type="radio" value="medium" className="lmssystem" onClick={this.toggle} name = "radio1" id="lms3"/></ListGroupItem>
      <AddDepModal show={this.state.toggle1} onHide={addModalClose} />
      <ListGroupItem><label for="elearning3">eLearning</label> <input type="radio" value="medium" className="elearning" onClick={this.toggle} name = "radio1" id="elearning3"/></ListGroupItem>
      <AddDepModal show={this.state.toggle1} onHide={addModalClose} />
      <ListGroupItem><label for="MarketPlace3">MarketPlace</label> <input type="radio" value="medium" className="marketplace" onClick={this.toggle} name = "radio1" id="MarketPlace3"/></ListGroupItem>
      <AddDepModal show={this.state.toggle1} onHide={addModalClose} />
    </ListGroup>  </Col>
      </Row>
       <br></br>

      </div>
   </Container>



   </div>


   )}



}
export default LeadDashboard;