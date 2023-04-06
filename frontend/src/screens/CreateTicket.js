import React, { Component } from "react";
import { Button} from "react-bootstrap";
import { Container } from "react-bootstrap";
import Axios from "axios";

export default class CreateTicket extends Component {

    constructor(props) {
        super(props);
        // props.addExperience(data, history);
        this.state = {
            url:"",
            fields: {},
            errors: {},
            message: "",
            isSafe: false,
            ticket: {}
        };

    }

    BackLogic(){
        let type = JSON.parse(localStorage.getItem('auth')).profile_type;
        if(type === `owner`){
            this.setState({
                url: "/owner"
            });
        }
        if(type === `rider`){
            this.setState({
                url: "/rider"
            });
        }
        if(type === `admin`){
            this.setState({
                url: "/admin"
            });
        }
    }

    componentDidMount(){
        this.BackLogic();
    }

    onChange = (e) => {
        // console.log("in on change method");
        // console.log(e.target.name);
        // console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value,
        });
    };


    onSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.hotelNumber);
        let data = {
            reporter_id: JSON.parse(localStorage.getItem('auth')).profile_id,
            description:this.state.description,
            comments:this.state.comments
        };

        // console.log(data);

        Axios.post("http://ec2-54-226-153-212.compute-1.amazonaws.com:8081/ticket/new", data).then((response) => {
            if (response.data) {
                alert(
                    "Ticket Created!"
                );
            }
        });
        // history.push("/user/profile");
    };


 
  render() {
      let redirect = JSON.parse(localStorage.getItem('auth')).profile_type;
        
    return (
        <>
      <div className="Register">
      <Container className="C">
          <div>
            <form onSubmit={this.onSubmit}>
              <h3>Create a Service Ticket</h3>
              {/*<div className="form-group">*/}
              {/*  <label>Vehicle Name</label>*/}
              {/*  <input*/}
              {/*    type="text"*/}
              {/*    className="form-control"*/}
              {/*    placeholder="Enter Vehicle Name"*/}
              {/*    required*/}
              {/*  />*/}
              {/*</div>*/}

              <div className="form-group">
                <label>Description</label>
                <input
                  name = "description"
                  onChange={this.onChange}
                  type="text"
                  className="form-control"
                  placeholder="Enter Ticket Description"
                  required
                />
              </div>
              <div className="form-group">
                <label>Comments</label>
                <input
                  name = "comments"
                  onChange={this.onChange}
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Comment"
                  required
                />
              </div>

     
                  
              <div className="registerButton">
                <Button type="submit">
                  Create
                </Button>
              </div>
             
            </form>
        
                <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>


                <a href={this.state.url}>
                <Button
                lassName="registerButton">
                Back
                </Button>
                </a>
                </div>
            </div>

          
          </Container>
          
      </div>
      
      </>
    );
            
    }
}