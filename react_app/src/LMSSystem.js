import React,{Component} from 'react';
 
// import {table} from 'react-bootstrape';
import 'bootstrap/dist/css/bootstrap.css';
import './LMSSystem.css';
import { Row ,Col, Label} from 'reactstrap';

class LMSSystem extends Component{
    render(){
        return(
            <div>
                <div>
                    <Col>
                        <Row>
                            <Col  >
                            <h3>LMS System  </h3>
                            </Col>
                            <Col><p>(https://upwork.com/asdazdasdjh/sad?sd=65211ages)</p></Col><br></br>
                        </Row><br></br>
                        <Row>
                            <Col>
                                <p>LMS System required for an accounting firm with more than 250</p>
                                <p>employees.The System should enable users to learn at their own</p>
                                <p>pace. The system shouldhave the ability to take the .......more</p>
                                <br></br>
                                <Row className="prospect">
                                Prospect Details
                                </Row>
                                <Row className="details">
                                    <Col><p>Brian M.Campbell</p>
                                    <p>brianc@xyz.com</p>
                                    <p>XYZ Corporation LLC</p>
                                    <p>brianc@live.com</p>
                                    </Col>
                                    <Col>
                                        <p className="live">+1 514 273 5436</p>
                                    </Col>
                                </Row><br></br>
                                <Row>
                                    <Col>
                                        <Label for="attch">Attechments</Label>
                                        <input type="file" id="attch"></input>
                                    </Col>
                                    <Col >
                                        <p className="projectscope">ProjectScope.opt</p>
                                    </Col>
                                    
                                </Row><br></br>
                                <br></br>
                                <Row>
                                    <Col >
                                        <button type="submit" varient="primary">ACCEPT</button>
                                    </Col>
                                    <Col >
                                        <button type="submit" varient="primary">REJECT</button>
                                    </Col>
                                </Row>
                            </Col>
                    
                        </Row>
                    </Col>
                    <Col sm={{ size: 'auto', offset: 9 }} className="new">
                            <div className="New"><br></br><h6 className="nw">New</h6></div><br></br>
                            <p>Tags</p>
                            <p>LMS Training System</p>
                            <p>eLearning</p>
                            <b>Domain</b>
                            <p>LMS</p>
                            <b>Technology</b>
                            <p>RoR PostgreSQL</p>
                            <p>Heroku</p>
                    </Col>
                    
                    
                </div>
            </div>
        )
    }
}
export default LMSSystem;