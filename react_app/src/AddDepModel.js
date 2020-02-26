import React,{Component} from 'react';
import {Modal,Button} from 'react-bootstrap';
import Reject from './Reject';
import LMSSystem from './LMSSystem';
import Comments from './Comments';
class AddDepModal extends Component{
    constructor(props){
        super(props);
       
        this.state={
          toggle2 :false,
          toggle4:false,
          toggle9:false
        }
         
       this.toggle3=this.toggle3.bind(this);
       this.toggle5=this.toggle5.bind(this);
       this.toggle10=this.toggle10.bind(this);
    }
     
    toggle3(e){
         
        this.setState({ toggle2: !this.state.toggle2});
    }
    toggle5(e){
      this.setState({toggle4:!this.state.toggle4})
    }
    toggle10(e){
      this.setState({toggle9:!this.state.toggle9})
    }
    render(){
      
      
      return( 
        
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Modal heading
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
          <div>  


            <LMSSystem />



                  {  
                      this.state.toggle4  ? (   
                          <div>  
                              <Comments/>       
             .         <Button  variant="primary" onClick={this.toggle10}>{this.state.toggle9 ? 'Response Generated':'Pitched'}</Button>
                               
                        </div>  
                          ) : (  
                              <div>  
                                   <Button  variant="primary" onClick={this.toggle5}>Accept</Button>
                              </div>  
                          )  
                  }
    
                    <Reject show={this.state.toggle2} onHide={this.props.onHide}/>
                
                    <Button variant="danger" onClick={this.toggle3} >Reject</Button> 
          </div>
            </Modal.Body>
            <Modal.Footer>
            
            </Modal.Footer>
            </Modal>

        )
    }
}
export default AddDepModal;