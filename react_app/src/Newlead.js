import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import {table} from 'react-bootstrape';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import './Newlead.css'
import { ListGroup, Row ,Col} from 'reactstrap';

class Newlead extends Component{
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
            Phone: ''
        }
  
/*
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  
*/
      };

        changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
		}

        submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios.post('http://127.0.0.1:8000/', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
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
    render(){
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
                <form method="post" onSubmit={this.submitHandler} >
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>/Newlead
                            
                            <label for="myid">Title*</label><br></br>
                            <input type="text" name="Title" value={Title} onChange={this.changeHandler} className="title"/><br></br>
                            <div style={{color: "red",fontSize: "14px"}} className="errorMsg"></div>
                    </Col><br></br>
                    <Col sm={{ size: 'auto', offset: 4 }} className="Source">
                            <label for="source">Source*</label><br></br>
                            <select  name="Source" value={Source} onChange={this.changeHandler} id="Source" className="Source">
                            <option>choose any one</option>
                            <option select>java</option>
                            <option select>php</option>
                            </select>
                            <div style={{color: "red",fontSize: "14px"}} className="errorMsg"></div>
                    </Col>
                </Row><br></br>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                            <lable>Description</lable><br></br>
                            <textarea type="text" name="Description" value={Description} onChange={this.changeHandler} className="Description" /><br></br>
                    </Col>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <label for="url">URL</label><br></br>
                        <input type="text" id="url" name="Url" value={Url} onChange={this.changeHandler} className="URL" /><br></br>
                        <label for="domain">Domain</label><br></br>
                        <select id="domain" className="Domain">
                            <option >choose any one</option>
                            <option select>yahoo</option>
                            <option select>google</option>
                        </select><br></br>
                        <label for="keywords">Keywords/Tags</label><br></br>
                        <input type="text" id="keywords" name="Tags" value={Tags} onChange={this.changeHandler} className="Keywords"/><br></br>
                    </Col>
                    
                </Row><br></br>
                <Row>  
                    <Col sm={{ size: 'auto', offset: 1 }}>    
                        <div>
                            <label for="attechment">Attechment</label>
                            <input type="file" id="attechment" name="Attachment" value={Attachment} onChange={this.changeHandler} className="Attechment"/>
                        </div><br></br>
                        
                    </Col>
                    <Col sm={{ size: 'auto', offset: 4 }}>
                            <div className="Technology">
                                <label for="technology">Technology</label><br></br>
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
                            <label for="estimated">Estimated Budget ($)</label> 
                            <input type="text" id="estimated" name="EstimatedBudget" value={EstimatedBudget} onChange={this.changeHandler} className="Estimatedbudget"/>
                        </div><br></br>
                        <div>
                            <label for="referred">Referred By</label>   
                            <input type="text" name="ReferredBy" value={ReferredBy} onChange={this.changeHandler} id="referred" className="Referredby"/>
                        </div><br></br>
                    </Col>
                    <Col sm={{ size: 'auto', offset: 3 }} >
                            <label for="Assigne" >Assignee*</label><br></br>
                            <input type="radio"/>
                            <label for="Assignee" >Assign To</label>
                            <select  name="AssignTo" value={AssignTo} onChange={this.changeHandler} id="Assignee" className="Assignto">
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
                            <label for="fullname">Full Name</label>
                            <input type="text" id="fullname" name="FullName" value={FullName} onChange={this.changeHandler} className="Fullname"/>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <label for="streetaddress">Street Address</label>
                            <input type="text" id="streetaddress"name="StreetAddress" value={StreetAddress} onChange={this.changeHandler} className="Sreetaddress"/>
                        </Col>
                    </Row><br></br>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <label for="email" >Email</label>
                            <input type="text" name="Email" value={Email} onChange={this.changeHandler} id="email" className="Email"/>
                            <span className="add-icon" id="email">+</span>
                            <div style={{color: "red",fontSize: "14px"}} className="errorMsg"></div>
                        </Col>
                        <Col className="City" >
                            <label for="city">City</label>
                            <input type="text" name="City" value={City} onChange={this.changeHandler} id="city" className="City"/>
                        </Col>
                    </Row><br></br>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <label for="company">Company</label>
                            <input type="text" name="Company" value={Company} onChange={this.changeHandler} id="company" className="Company"/>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <label for="state">State</label>
                            <input type="text" name="State" value={State} onChange={this.changeHandler} id="state" className="State"/>
                        </Col>
                    </Row><br></br>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <label for="designation">Designation</label>
                            <input type="text" name="Designation" value={Designation} onChange={this.changeHandler} id="designation" className="Designation"/>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <label for="country">Country</label>
                            <input type="text" name="Country" value={Country} onChange={this.changeHandler} id="country" className="Country"/>
                        </Col>
                    </Row><br></br>
                    <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                            <label for="skypeid">Skype ID</label>
                            <input type="text" name="SkypeID" value={SkypeID} onChange={this.changeHandler} id="skypeid" className="Skypeid"/>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <label for="phone">Phone</label>
                            <input type="text" name="Phone" value={Phone} onChange={this.changeHandler} id="phone" className="mobileno"/>
                            <span className="add-icon">+</span>
                            <div style={{color: "red",fontSize: "14px"}} className="errorMsg"></div>
                        </Col>
                    </Row>
                </div><br></br>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <div >
                            <button type="submit" value="submit">Submit and New</button>
                        </div>
                    </Col>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                    <   div >
                            <button type="submit" value="submit">Submit</button>
                        </div>
                    </Col>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <div >
                            <button type="submit"  className="Cancel" value="Cancel">Cancel</button>
                        </div>
                    </Col>
                </Row>
                </form>
            </div>
           
            
        )
        }
}

export default Newlead;