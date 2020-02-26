import React from 'react';
import {Modal,Button ,Col,Row} from 'react-bootstrap';
import './Attechments.css';
class Pitched extends React.Component{
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
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div> 
      <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <h3>Attechments</h3>
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
                        <label for="http">http://</label>
                            <input type="text" id="http" className="http"/><br></br>
                            <br></br>
                            <button type="submit" className="add">Add</button>
                    </Col>

                </Row>
                </div>     
         
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
            
</div>
  

        )
    }
} 
export default Pitched;