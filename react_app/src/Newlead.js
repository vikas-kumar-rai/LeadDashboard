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
import { Row, Col, Label,Button} from 'reactstrap';

const url1='http://127.0.0.1:8000/';
class Newlead extends Component {
    constructor(props) {
        super(props)
        //        this.state = {
        //          fields: {},
        //          errors: {},
        //
        //        }
        this.state = {
            title: '',
            description: '',
            source: '',
            url: '',
            domain: '',
            tags: '',
            technology: '',
            assign_to: '',
            estimated_budget: '',
            referred_by: '',
            attachment: '',
            full_name: '',
            email: '',
            company: '',
            designation: '',
            skypeid: '',
            streetaddress: '',
            city: '',
            state: '',
            country: '',
            phone: '',
            status: 'New',
            values: [],
            valuesphone: []
        }

        /*
                this.handleChange = this.handleChange.bind(this);
                this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
          
        */

        this.handleSubmit=this.handleSubmit.bind(this);
        this.refreshPage=this.refreshPage.bind(this);
        this.submitted=this.submitted.bind(this);
    }
    createUI(){
     return this.state.values.map((el, i) => 
         <div key={i}>
            <input type="text" value={el||''} onChange={this.handleChange.bind(this, i)} className="emailplus"/>
            <input type='button' value='-' onClick={this.removeClick.bind(this, i)} className="add-icon"/>
         </div>          
     )
    }

    createUIPhone(){
     return this.state.valuesphone.map((q, r) => 
         <div key={r}>
            <input type="text" value={q||''} onChange={this.handleChangePhone.bind(this, r)} className="phoneplus"/>
            <input type='button' value='-' onClick={this.removeClickPhone.bind(this, r)} className="add-icon"/>
         </div>          
     )
    }


    handleChangePhone(r, event) {
     let valuesphone = [...this.state.valuesphone];
     valuesphone[r] = event.target.value;
     this.setState({ valuesphone });
    }

    handleChange(i, event) {
     let values = [...this.state.values];
     values[i] = event.target.value;
     this.setState({ values });
    }
  
    addClick(){
        this.setState(prevState => ({ values: [...prevState.values, '']}))
    }
    addClickPhone(){
        this.setState(prevState => ({ valuesphone: [...prevState.valuesphone, '']}))
    }
  
    removeClick(i){
     let values = [...this.state.values];
     values.splice(i,1);
     this.setState({ values });
     }


    removeClickPhone(r){
     let valuesphone = [...this.state.valuesphone];
     valuesphone.splice(r,1);
     this.setState({ valuesphone });
     }

    submitted(){
        alert("Form submitted ");
        window.location.reload(false);
    }
    refreshPage() {
        window.location.reload(false);
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
        // alert('A name was submitted: ' + this.state.values.join(', '));
        e.preventDefault();
    }    
    handleSubmit(){
        this.setState({
            title: '',
            description: '',
            source: '',
            url: '',
            domain: '',
            tags: '',
            technology: '',
            assign_to: '',
            estimated_budget: '',
            referred_by: '',
            //attachment: '',
            full_name: '',
            email: '',
            company: '',
            designation: '',
            skypeid: '',
            streetaddress: '',
            city: '',
            state: '',
            country: '',
            phone: '',
            values: [],
            valuesphone: []
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
    //            fields["email"] = "";
    //            fields["mobileno"] = "";
    //            fields["source"] = "";
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
    //        if (!fields["email"]) {
    //          formIsValid = false;
    //          errors["email"] = "*Please enter your email-ID.";
    //        }
    //
    //        if (typeof fields["email"] !== "undefined") {
    //          //regular expression for email validation
    //          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //          if (!pattern.test(fields["email"])) {
    //            formIsValid = false;
    //            errors["email"] = "*Please enter valid email-ID.";
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
    //        if (!fields["source"]) {
    //            formIsValid = false;
    //            errors["source"] = "*Please select source";
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
        const { title, description, source, url, domain, tags, technology, assign_to, estimated_budget, referred_by, attachment, full_name, email, company, designation, skypeid, streetaddress, city, state, country, phone } = this.state
        return (
            <div>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <div>
                            <h4>New Lead</h4>
                        </div>
                    </Col>
                </Row>
                <form action="" method="post" name="form" encType="multipart/form-data" onSubmit={this.submitHandler} id="create-course-form" required={this.required}>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <Label for="myid">Title*</Label><br></br>
                            <input type="text" name="title" value={title} onChange={this.changeHandler} className="title" autoFocus/><br></br>
                            {/* <div style={{color: "red",fontSize: "14px"}} className="errorMsg"></div> */}
                        </Col><br></br>
                        <Col sm={{ size: 'auto', offset: 4 }} className="source">
                            <Label for="source" className="source">Source*</Label><br></br>
                            <select name="source" value={source} onChange={this.changeHandler} id="source" className="source">
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
                            <textarea type="text" name="description" value={description} onChange={this.changeHandler} className="description" /><br></br>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <Label for="url">URL</Label><br></br>
                            <input type="text" id="url" name="url" value={url} onChange={this.changeHandler} className="URL" /><br></br>
                            <Label for="domain">Domain</Label><br></br>
                            <select id="domain" name="domain" value={domain} onChange={this.changeHandler} className="domain">
                                <option >choose any one</option>
                                <option select>yahoo</option>
                                <option select>google</option>
                            </select><br></br>
                            <Label for="keywords">Keywords/tags</Label><br></br>
                            <input type="text" id="keywords" name="tags" value={tags} onChange={this.changeHandler} className="Keywords" /><br></br>
                        </Col>
                    </Row><br></br>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <div>
                                <Label for="attechment">Attachment</Label>
                                <input type="file" id="attechment" name="attachment" label='File' value={attachment} onChange={this.changeHandler} className="attachment" />
                            </div><br></br>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 4 }}>
                            <div className="technology">
                                <Label for="technology" className="technology">Technology</Label><br></br>
                                <select id="technology" name="technology" value={technology} onChange={this.changeHandler} className="technology">
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
                                <input type="text" id="estimated" name="estimated_budget" value={estimated_budget} onChange={this.changeHandler} className="Estimatedbudget" />
                            </div><br></br>
                            <div>
                                <Label for="referred">Referred By</Label>
                                <input type="text" name="referred_by" value={referred_by} onChange={this.changeHandler} id="referred" className="referred_by" />
                            </div><br></br>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 3 }} >
                            <Label for="Assigne" className="assignee" >Assignee*</Label><br></br>
                            <input type="radio" className="assignee" />
                            <Label for="Assignee" >Assign To</Label>
                            <select name="assign_to" value={assign_to} onChange={this.changeHandler} id="Assignee" className="assign_to">
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
                                <Label for="full_name">Full Name</Label>
                                <input type="text" id="full_name" name="full_name" value={full_name} onChange={this.changeHandler} className="full_name" />
                            </Col>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="streetaddress">Street Address</Label>
                                <input type="text" id="streetaddress" name="streetaddress" value={streetaddress} onChange={this.changeHandler} className="Sreetaddress" />
                            </Col>
                        </Row><br></br>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="email" >Email</Label>
                                <input type="text" name="email" value={email} onChange={this.changeHandler} id="email" className="email" />
                                <button className="add-icon" value="test" id="email" onClick={this.addClick.bind(this)}>+</button>
                                {this.createUI()}
                                {/* <div style={{color: "red",fontSize: "14px"}} className="errorMsg"></div> */}
                            </Col>
                            <Col >
                                <Label for="city" className="city">City</Label>
                                <input type="text" name="city" value={city} onChange={this.changeHandler} id="city" className="city1" />
                            </Col>
                        </Row><br></br>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="company">Company</Label>
                                <input type="text" name="company" value={company} onChange={this.changeHandler} id="company" className="company" />
                            </Col>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="state">State</Label>
                                <input type="text" name="state" value={state} onChange={this.changeHandler} id="state" className="state" />
                            </Col>
                        </Row><br></br>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="designation">Designation</Label>
                                <input type="text" name="designation" value={designation} onChange={this.changeHandler} id="designation" className="designation" />
                            </Col>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="country">Country</Label>
                                <input type="text" name="country" value={country} onChange={this.changeHandler} id="country" className="country" />
                            </Col>
                        </Row><br></br>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="skypeid">Skype ID</Label>
                                <input type="text" name="skypeid" value={skypeid} onChange={this.changeHandler} id="skypeid" className="Skypeid" />
                            </Col>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="phone">Phone</Label>
                                <input type="text" name="phone" value={phone} onChange={this.changeHandler} id="phone" className="mobileno" />
                                <button className="add-icon" id="phone" onClick={this.addClickPhone.bind(this)}>+</button>
                                {this.createUIPhone()}
                                {/* <div style={{color: "red",fontSize: "14px"}} className="errorMsg"></div> */}
                            </Col>
                        </Row>
                    </div><br></br>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <div>
                                <button type="submit" onClick={this.refreshPage} value="submit" className="btn btn-primary" >Submit and New</button>
                            </div>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 2 }}>
                            <div>
                                <button type="submit" onClick={this.submitted} value="submit" className="btn btn-primary" >Submit</button>
                            </div>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 2 }}>
                            <div>
                                <Button type="reset" name="cancel" className="btn btn-danger" onClick={this.handleSubmit} value="cancel" >Cancel</Button>
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