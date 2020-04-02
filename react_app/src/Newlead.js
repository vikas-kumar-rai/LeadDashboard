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
    constructor(state) {
        super(state)
        //        this.state = {
        //          fields: {},
        //          errors: {},
        //
        //        }
        this.state = {
            data:[],
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
            skype_id: '',
            street_address: '',
            city: '',
            state: '',
            country: '',
            phone: '',
            status: 'New',
            secondary_email1: '',
            secondary_email2: [],
            secondary_phone1: '',
            secondary_phone2: [],

        }
 /*
                this.handleChange = this.handleChange.bind(this);
                this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
          
        */

        this.handleSubmit=this.handleSubmit.bind(this);
//        this.refreshPage=this.refreshPage.bind(this);
//        this.submitted=this.submitted.bind(this);
    }
    getData()
    {
    fetch("http://localhost:8000")
    .then((Response)=>
    Response.json())
    .then((findresponse)=>{
        console.log(findresponse )
        // this.setState({data:findresponse})
        })
    }
    refreshPage() {
        window.location.reload(false);
    }
    createUI(){
     return this.state.secondary_email2.map((el, i) =>
         <div key={i}>
            <input type="text" value={el||''} onChange={this.handleChange.bind(this, i)} className="emailplus"/>
            <input type='button' value='-' onClick={this.removeClick.bind(this, i)} className="add-icon"/>
         </div>          
     )
    }

    createUIPhone(){
     return this.state.secondary_phone2.map((q, r) =>
         <div key={r}>
            <input type="text" value={q||''} onChange={this.handleChangePhone.bind(this, r)} className="phoneplus"/>
            <input type='button' value='-' onClick={this.removeClickPhone.bind(this, r)} className="add-icon"/>
         </div>          
     )
    }


    handleChangePhone(r, event) {
     let secondary_phone2 = [...this.state.secondary_phone2];
     secondary_phone2[r] = event.target.value;
     this.setState({ secondary_phone2 });
    }

    handleChange(i, event) {
     let secondary_email2 = [...this.state.secondary_email2];
     secondary_email2[i] = event.target.value;
     this.setState({ secondary_email2 });
    }
  
    addClick(){
        this.setState(prevState => ({ secondary_email2: [...prevState.secondary_email2, '']}))
    }
    addClickPhone(){
        this.setState(prevState => ({ secondary_phone2: [...prevState.secondary_phone2, '']}))
    }
  
    removeClick(i){
     let secondary_email2 = [...this.state.secondary_email2];
     secondary_email2.splice(i,1);
     this.setState({ secondary_email2 });
     }


    removeClickPhone(r){
     let secondary_phone2 = [...this.state.secondary_phone2];
     secondary_phone2.splice(r,1);
     this.setState({ secondary_phone2 });
     }

//    submitted(){
//        alert("Form submitted ");
//        window.location.reload(false);
//    }
//    refreshPage() {
//        window.location.reload(false);
//    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    fileChangedHandler = (e) => {
    console.log(e.target.files[0])
    this.setState({ attachment: e.target.files[0] });
    };

    submitHandler = e => {
        e.preventDefault();
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
        window.location.reload(false);
    }

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

    render() {
        const { title, description, source, url, domain, tags, technology, assign_to, estimated_budget, referred_by, attachment, full_name, email, company, designation, skype_id, street_address, city, state, country, phone } = this.state
        return (
            <div>
                {
                this.state.data.map((dynamicData,key)=>
                {
                if (dynamicData.email === this.refs.email.value) {
                return (
                     <div> 
                        {
                            this.refs.full_name.value=dynamicData.full_name,
                            this.refs.street_address.value=dynamicData.street_address,
                            this.refs.email.value=dynamicData.email,
                            this.refs.city.value=dynamicData.city,
                            this.refs.company.value=dynamicData.company,
                            this.refs.state.value=dynamicData.state,
                            this.refs.designation.value=dynamicData.designation,
                            this.refs.country.value=dynamicData.country,
                            this.refs.skype_id.value=dynamicData.skype_id,
                            this.refs.phone.value=dynamicData.phone
                        }
                                                   
                    </div>
                         )
                }})
                }
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <div>
                            <h4>New Lead</h4>
                        </div>
                    </Col>
                </Row>
                <form action="" method="post" name="form" enctype="multipart/form-data" onSubmit={this.submitHandler} id="create-course-form" required={this.required}>
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
                                <input type="file" id="file" onChange={this.fileChangedHandler} className="attachment"/>
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
                            <button type="button" class="btn btn-link" onClick={this.getData}>Existing?</button>
                        </Col>
                    </Row>
                    <div className="prospectus"><br></br>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="full_name">Full Name</Label>
                                <input type="text" id="full_name" name="full_name" ref="full_name" value={full_name} onChange={this.changeHandler} className="full_name" />
                            </Col>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="streetaddress">Street Address</Label>
                                <input type="text" id="streetaddress" name="street_address" ref="street_address" value={street_address} onChange={this.changeHandler} className="Sreetaddress" />
                            </Col>
                        </Row><br></br>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="email" >Email</Label>
                                <input type="text" name="email" ref="email" value={email} onChange={this.changeHandler} id="email" className="email" />
                                <Button className="add-icon" onClick={this.addClick.bind(this)}><p className="plussign">+</p></Button>
                                {this.createUI()}
                                {/* <div style={{color: "red",fontSize: "14px"}} className="errorMsg"></div> */}
                            </Col>
                            <Col >
                                <Label for="city" className="city">City</Label>
                                <input type="text" name="city" ref="city" value={city} onChange={this.changeHandler} id="city" className="city1" />
                            </Col>
                        </Row><br></br>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="company">Company</Label>
                                <input type="text" name="company" ref="company" value={company} onChange={this.changeHandler} id="company" className="company" />
                            </Col>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="state">State</Label>
                                <input type="text" name="state" ref="state" value={state} onChange={this.changeHandler} id="state" className="state" />
                            </Col>
                        </Row><br></br>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="designation">Designation</Label>
                                <input type="text" name="designation" ref="designation" value={designation} onChange={this.changeHandler} id="designation" className="designation" />
                            </Col>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="country">Country</Label>
                                <input type="text" name="country" ref="country" value={country} onChange={this.changeHandler} id="country" className="country" />
                            </Col>
                        </Row><br></br>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="skypeid">Skype ID</Label>
                                <input type="text" name="skype_id" ref="skype_id" value={skype_id} onChange={this.changeHandler} id="skypeid" className="Skypeid" />
                            </Col>
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <Label for="phone">Phone</Label>
                                <input type="text" name="phone" ref="phone" value={phone} onChange={this.changeHandler} id="phone" className="mobileno" />
                                <Button className="add-icon"  onClick={this.addClickPhone.bind(this)}><p className="plussign">+</p></Button>
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
                                <button type="submit" value="submit" className="btn btn-primary" >Submit</button>
                            </div>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 2 }}>
                            <div>
                                <button type="reset" name="cancel" className="btn btn-danger" onClick={this.handleSubmit} value="cancel" >Cancel</button>
                            </div>
                        </Col>
                    </Row>
                </form>
            </div>
        )
    }
}

export default Newlead;