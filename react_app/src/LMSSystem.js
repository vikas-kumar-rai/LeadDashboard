import React,{Component} from 'react';
 
// import {table} from 'react-bootstrape';
import 'bootstrap/dist/css/bootstrap.css';
import './LMSSystem.css';
import { Row ,Col, Label} from 'reactstrap';

class LMSSystem extends Component{
    constructor(){
        super();
        this.state={
                data:[],
        }
    }
    componentDidMount(){
        fetch("http://localhost:8000")
        .then((Response)=>
                Response.json())
                .then((findresponse)=>
                {
                    console.log(findresponse)
                    this.setState({
                        data:findresponse,
                    })
                })
    }
    render(){
        return(
            <div>
                 {
                        this.state.data.map((dynamicData,key)=>
                                            
                            {
                                if (dynamicData.Title == this.props.value2) {
                                    return (
                                        <div>
                    <Col>
                        <Row>
                         
                                           
                            <Col  >
                            <h3>{dynamicData.Title}  </h3>
                            </Col>
                            <Col sm={{ size: 'auto', offset: 0 }} className="urlss"><p><a href={dynamicData.Url} class="text-warning stretched-link">{dynamicData.Url}</a></p></Col><br></br>
                        </Row><br></br>
                        <Row>
                            <Col>
                                <Row className="descriptions">
                                    <p>{dynamicData.Description} </p>
                                </Row>
                                <br></br>
                                <Row className="prospect">
                                Prospect Details
                                </Row>
                                <Row className="details">
                                    <Col><p> {dynamicData.FullName}</p>
                                    <p>{dynamicData.Email} </p>
                                    <p>{dynamicData.Company} </p>
                                    <p>{dynamicData.SkypeID} </p>
                                    </Col>
                                    <Col>
                                    <p className="live">{dynamicData.Phone}</p>
                                    </Col>
                                </Row><br></br>
                                <Row>
                                    <Col>
                                        <Label for="attch">Attachments</Label>
                                        <input type="file" id="attch"></input>
                                    </Col>
                                    <Col >
                                            <p className="projectscope"><a href={dynamicData.Attachment} class="text-warning stretched-link">{dynamicData.Attachment} </a></p>
                                    </Col>
                                    
                                </Row><br></br>
                                <br></br>
                                
                            </Col>
                    
                        </Row>
                    </Col>
                    <Col sm={{ size: 'auto', offset: 9 }} className="new">
                                    <div><br></br><h6 className="nw">{dynamicData.Status}</h6></div><br></br>
                            <p>Tags</p>
                            <p>{dynamicData.Tags}</p>
                           
                            <b>Domain</b>
                                <p>{dynamicData.Domain}</p>
                            <b>Technology</b>
                             
                                <p>{dynamicData.Technology}</p>
                    </Col>
                    
                    
                </div>
                            )
                        }
                })
                    }
            </div>
        )}
                }
                                              
             
export default LMSSystem;