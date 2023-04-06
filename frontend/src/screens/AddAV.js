import React, { Component } from "react";
import { Button} from "react-bootstrap";
import { Container } from "react-bootstrap";
import Axios from "axios";

export default class AddAV extends Component {

    constructor(props) {
        super(props);
        // props.addExperience(data, history);
        this.state = {
            fields: {},
            errors: {},
            message: "",
            isSafe: false,
            profile: {}
        };

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
            profile_id: JSON.parse(localStorage.getItem('auth')).profile_id,
            vehicle_type:this.state.vehicle_type,
            vehicle_number:this.state.vehicle_number,
            capacity:this.state.capacity,
            pickup_location:"San Jose"
        };

        // console.log(data);

        Axios.post("http://ec2-54-226-153-212.compute-1.amazonaws.com:8081/vehicle/new", data).then((response) => {
            if (response.data) {
                alert(
                    "Vehicle Registered!"
                );
            }
        });
        // history.push("/user/profile");
    };


 
  render() {
    
        
    return (
        <>
      <div className="Register">
      <Container className="C">
          <div>
            <form onSubmit={this.onSubmit}>
              <h3>Register your AV</h3>
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
                <label>Vehcile Type</label>
                <input
                  name = "vehicle_type"
                  onChange={this.onChange}
                  type="text"
                  className="form-control"
                  placeholder="Enter Vehicle Type"
                  required
                />
              </div>
              <div className="form-group">
                <label>Vehicle Number</label>
                <input
                  name = "vehicle_number"
                  onChange={this.onChange}
                  type="text"
                  className="form-control"
                  placeholder="Enter Vehicle Number"
                  required
                />
              </div>
              <div className="form-group">
                <label>Capacity</label>
                <input
                  name = "capacity"
                  onChange={this.onChange}
                  type="text"
                  className="form-control"
                  placeholder="Enter Capacity"
                  required
                />
              </div>
     
                  
              <div className="registerButton">
                <Button type="submit">
                  Register
                </Button>
              </div>
             
            </form>
        
                <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
                <a href="/owner">
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