import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import {table} from 'react-bootstrape';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import './Newlead.css';
// import bootstrap from 'react-bootstrape';
// import main from './main';
// import 'jquery/dist/jquery.min.js'
// import { Form,Button, FormGroup, FormControl,} from "react-bootstrap";
import { Row, Col, Label } from 'reactstrap';

const url1='http://127..0.1:8000/';
class Newlead extends Component {
    constructor(props) {
        super(props)
        //        this.state = {
        //          fields: {},
        //          errors: {},
        //
        //        }
        this.state = {
            Title: '',
            Description: '',
            Source: '',
            Url: '',
            Domain: '',
            Tags: '',
            Technology: '',
            AssignTo: '',
            EstimatedBudget: '',
            ReferredBy: '',
            Attachment: '',
            FullName: '',
            Email: '',
            Company: '',
            Designation: '',
            SkypeID: '',
            StreetAddress: '',
            City: '',
            State: '',
            Country: '',
            Phone: '',
            Status: 'New'
        }

        /*
                this.handleChange = this.handleChange.bind(this);
                this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
          
        */

        this.handleSubmit=this.handleSubmit.bind(this);
    }
     
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post(url1 , this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    handleSubmit(){
        this.setState({
            Title: '',
            Description: '',
            Source: '',
            Url: '',
            Domain: '',
            Tags: '',
            Technology: '',
            AssignTo: '',
            EstimatedBudget: '',
            ReferredBy: '',
            //Attachment: '',
            FullName: '',
            Email: '',
            Company: '',
            Designation: '',
            SkypeID: '',
            StreetAddress: '',
            City: '',
            State: '',
            Country: '',
            Phone: '',
        })
    }
    //      handleChange(e) {
    //        let fields = this.state.fields;
    //        fields[e.target.name] = e.target.value;
    //        this.setState({
    //          fields
    //        });

    //   }

    //      submituserRegistrationForm(e) {
    //        e.preventDefault();
    //        if (this.validateForm()) {
    //            let fields = {};
    //            fields["title"] = "";
    //            fields["Email"] = "";
    //            fields["mobileno"] = "";
    //            fields["Source"] = "";
    //            // fields["password"] = "";
    //            this.setState({fields:fields});
    //            alert("Form submitted");
    //        }
    //
    //      }
    //
    //      validateForm() {
    //
    //        let fields = this.state.fields;
    //        let errors = {};
    //        let formIsValid = true;
    //
    //        if (!fields["title"]) {
    //          formIsValid = false;
    //          errors["title"] = "*Please enter your title.";
    //        }
    //
    //        if (typeof fields["title"] !== "undefined") {
    //          if (!fields["title"].match(/^[a-zA-Z ]*$/)) {
    //            formIsValid = false;
    //            errors["title"] = "*Please enter alphabet characters only.";
    //          }
    //        }
    //
    //        if (!fields["Email"]) {
    //          formIsValid = false;
    //          errors["Email"] = "*Please enter your email-ID.";
    //        }
    //
    //        if (typeof fields["Email"] !== "undefined") {
    //          //regular expression for email validation
    //          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //          if (!pattern.test(fields["Email"])) {
    //            formIsValid = false;
    //            errors["Email"] = "*Please enter valid email-ID.";
    //          }
    //        }
    //
    //        if (!fields["mobileno"]) {
    //          formIsValid = false;
    //          errors["mobileno"] = "*Please enter your mobile no.";
    //        }
    //
    //        if (typeof fields["mobileno"] !== "undefined") {
    //          if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
    //            formIsValid = false;
    //            errors["mobileno"] = "*Please enter valid mobile no.";
    //          }
    //        }
    //        if (!fields["Source"]) {
    //            formIsValid = false;
    //            errors["Source"] = "*Please select source";
    //          }

    // if (!fields["password"]) {
    //   formIsValid = false;
    //   errors["password"] = "*Please enter your password.";
    // }

    // if (typeof fields["password"] !== "undefined") {
    //   if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
    //     formIsValid = false;
    //     errors["password"] = "*Please enter secure and strong password.";
    //   }
    // }

    //        this.setState({
    //          errors: errors
    //        });
    //        return formIsValid;
    //
    //
    //      }
    render() {
        const { Title, Description, Source, Url, Domain, Tags, Technology, AssignTo, EstimatedBudget, ReferredBy, Attachment, FullName, Email, Company, Designation, SkypeID, StreetAddress, City, State, Country, Phone } = this.state
        return (
            <div>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <div>
                            <h4>New Lead</h4>
                        </div>
                    </Col>
                </Row>
                <form action="" method="post" encType="multipart/form-data" onSubmit={this.submitHandler} id="create-course-form">
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <Label for="myid">Title*</Label><br></br>
                            <input type="text" name="Title" value={Title} onChange={this.changeHandler} className="title" autoFocus/><br></br>
                            {/* <div style={{color: "red",fontSize: "14px"}} className="errorMsg"></div> */}
                        </Col><br></br>
                        <Col sm={{ size: 'auto', offset: 4 }} className="Source">
                            <Label for="source" className="Source">Source*</Label><br></br>
                            <select name="Source" value={Source} onChange={this.changeHandler} id="Source" className="Source">
                                <option>choose any one</option>
                                <option select>java</option>
                                <option select>php</option>
                            </select>
                            {/* <div style={{color: "red",fontSize: "14px"}} className="errorMsg"></div> */}
                        </Col>
                    </Row><br></br>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <lable>Description</lable><br></br>
                            <textarea type="text" name="Description" value={Description} onChange={this.changeHandler} className="Description" /><br></br>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <Label for="url">URL</Label><br></br>
                            <input type="text" id="url" name="Url" value={Url} onChange={this.changeHandler} className="URL" /><br></br>
                            <Label for="domain">Domain</Label><br></br>
                            <select id="domain" name="Domain" value={Domain} onChange={this.changeHandler} className="Domain">
                                <option >choose any one</option>
                                <option select>yahoo</option>
                                <option select>google</option>
                            </select><br></br>
                            <Label for="keywords">Keywords/Tags</Label><br></br>
                            <input type="text" id="keywords" name="Tags" value={Tags} onChange={this.changeHandler} className="Keywords" /><br></br>
                        </Col>
                    </Row><br></br>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <div>
                                <Label for="attechment">Attachment</Label>
                                <input type="file" id="attechment" name="Attachment" label='File' value={Attachment} onChange={this.changeHandler} className="Attechment" />
                            </div><br></br>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 4 }}>
                            <div className="Technology">
                                <Label for="technology" className="Technology">Technology</Label><br></br>
                                <select id="technology" name="Technology" value={Technology} onChange={this.changeHandler} className="Technology">
                                    <option >choose any one</option>
                                    <option select>python</option>
                                    <option select>nodejs</option>
                                </select>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <div>
                                <Label for="estimated">Estimated Budget ($)</Label>
                                <input type="text" id="estimated" name="EstimatedBudget" value={EstimatedBudget} onChange={this.changeHandler} className="Estimatedbudget" />
                            </div><br></br>
                            <div>
                                <Label for="referred">Referred By</Label>
                                <input type="text" name="ReferredBy" value={ReferredBy} onChange={this.changeHandler} id="referred" className="Referredby" />
                            </div><br></br>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 3 }} >
                            <Label for="Assigne" className="assignee" >Assignee*</Label><br></br>
                            <input type="radio" className="assignee" />
                            <Label for="Assignee" >Assign To</Label>
                            <select name="AssignTo" value={AssignTo} onChange={this.changeHandler} id="Assignee" className="Assignto">
                                <option >choose any one</option>
                                <option select>abc</option>
                                <option select>def</option>
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 2 }}>
                            <div className="prospectdetails">
                                <p>Prospect Details</p>
                            </div>
                        </Col>
                        <Col className="Existing">
                            Existing?
                        </Col>
                    </Row>
                    <div className="prospectus"><br></br>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="fullname">Full Name</Label>
                                <input type="text" id="fullname" name="FullName" value={FullName} onChange={this.changeHandler} className="Fullname" />
                            </Col>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="streetaddress">Street Address</Label>
                                <input type="text" id="streetaddress" name="StreetAddress" value={StreetAddress} onChange={this.changeHandler} className="Sreetaddress" />
                            </Col>
                        </Row><br></br>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="email" >Email</Label>
                                <input type="text" name="Email" value={Email} onChange={this.changeHandler} id="email" className="Email" />
                                <button className="add-icon" id="email">+</button>
                                {/* <div style={{color: "red",fontSize: "14px"}} className="errorMsg"></div> */}
                            </Col>
                            <Col className="City" >
                                <Label for="city">City</Label>
                                <input type="text" name="City" value={City} onChange={this.changeHandler} id="city" className="City" />
                            </Col>
                        </Row><br></br>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="company">Company</Label>
                                <input type="text" name="Company" value={Company} onChange={this.changeHandler} id="company" className="Company" />
                            </Col>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="state">State</Label>
                                <input type="text" name="State" value={State} onChange={this.changeHandler} id="state" className="State" />
                            </Col>
                        </Row><br></br>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="designation">Designation</Label>
                                <input type="text" name="Designation" value={Designation} onChange={this.changeHandler} id="designation" className="Designation" />
                            </Col>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="country">Country</Label>
                                <input type="text" name="Country" value={Country} onChange={this.changeHandler} id="country" className="Country" />
                            </Col>
                        </Row><br></br>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="skypeid">Skype ID</Label>
                                <input type="text" name="SkypeID" value={SkypeID} onChange={this.changeHandler} id="skypeid" className="Skypeid" />
                            </Col>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="phone">Phone</Label>
                                <input type="text" name="Phone" value={Phone} onChange={this.changeHandler} id="phone" className="mobileno" />
                                <button className="add-icon" id="phone">+</button>
                                {/* <div style={{color: "red",fontSize: "14px"}} className="errorMsg"></div> */}
                            </Col>
                        </Row>
                    </div><br></br>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <div >
                                <button type="submit" value="submit" className="btn btn-primary">Submit and New</button>
                            </div>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <   div >
                                <button type="submit" value="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <div >
                                <button type="reset" name="cancel" className="Cancel" onClick={this.handleSubmit} className="btn btn-danger" value="cancel" >Cancel</button>
                            </div>
                        </Col>
                    </Row>
                </form>
                {/* <script type="text/javascript" charSet="ytf-8" src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script> */}
                {/* <script type="text/javascript" charSet="ytf-8" src="static:{js/main.js}"></script> */}
            </div>
        )
    }
}

export default Newlead;