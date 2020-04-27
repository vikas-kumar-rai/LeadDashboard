import React, { Component } from 'react';
import { Row,Col} from 'react-bootstrap';


const comment_url = "http://127.0.0.1:8000/comment";
class ResponseGenerated extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }

    }

    componentDidMount() {
        fetch(comment_url, {
            headers: {
                    'Authorization': "JWT " + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                    }
            })
          .then((Response) =>
            Response.json())
          .then((findresponse) => {
            console.log(findresponse)
            this.setState({
              data: findresponse,
            })
          })
      }

    render(){
        return(
            <div>
                {
                this.state.data.map((dynamicData,key)=>
                {
                   if (dynamicData.accounts == this.props.id){
                return(
                <div>
                <Row>
                    <Col>{dynamicData.comment} </Col>
                    <Col>{dynamicData.created_date}</Col>
                </Row>
                </div>)}
               }
               )
               }

            </div>
        )
    }
}
export default ResponseGenerated;