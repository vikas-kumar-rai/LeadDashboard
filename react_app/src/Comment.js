import React,{Component} from 'react';
import { Button,Modal,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Comment.css';

class Comment extends Component{
  constructor(props){
    super(props);

    this.onHide = this.onHide.bind(this);
  }
  
  onHide(){
    this.props.onHide();
  }
   
    render(){
      return(
        <div>
        <Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
<Modal.Header closeButton>
<Modal.Title id="contained-modal-title-vcenter">
  
</Modal.Title>
</Modal.Header>
<Modal.Body>
  <div> 
<Row>
            <Col sm={{ size: 'auto', offset: 1 }}>
                <h3>Attachments</h3>
            </Col>
        </Row>
        <Row>
            <Col sm={{ size: 'auto', offset: 1 }}>
                <p>Computer</p>
            </Col>
            <Col sm={{ size: 'auto', offset: 1 }}>
                <p>Google Drive</p>
            </Col>
            <Col sm={{ size: 'auto', offset: 1 }}>
                <div className="externallinks">
                    <p>External Links</p>
                </div>
            </Col>
        </Row>
        <Row  >
            <Col sm={{ size: 'auto', offset: 1 }} className="lnk">
                <br></br>
                <br></br>
                <br></br>
                <label htmlFor="http">http://</label>
                    <input type="text" id="http" className="http"/><br></br>
                    <br></br>
                     
            </Col>

        </Row>
        </div>     
 
</Modal.Body>
<Modal.Footer>
<Button onClick={this.onHide}>Submit</Button>
</Modal.Footer>
</Modal>
    

       
      <Button variant="danger" onClick={this.onHide} >Close</Button>
      
 
      </div>        
       
      
       
        )
    }
}
export default Comment;