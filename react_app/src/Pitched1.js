import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import LMSSystem1 from './LMSSystem1';

class Pitched1 extends React.Component{
     
    render(){
        return(
            <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                         
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
        </Modal.Dialog>

        )
    }
}
export default Pitched1;