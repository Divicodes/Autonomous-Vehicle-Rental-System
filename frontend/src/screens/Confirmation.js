import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import Axios from "axios";
import {Redirect} from "react-router-dom";

export default class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      message: "",
      result: [],
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

  handleClick = (e) => {
    e.preventDefault();
    let data = {
      booking_id: this.props.location.state.booking_id,
      vehicle_id: this.props.location.state.vehicle_id,
      ride_status: 'in_progress',
    };
    console.log(data);
    Axios.post("http://ec2-54-226-153-212.compute-1.amazonaws.com:8081/booking/update",data).then((response) => {
      console.log(response.data);
      if (response.data) {
        const result = response.data;
        this.setState({result});
        this.setState({
          message: "ok",
        });
      }
    });
  };

  render() {
    console.log(this.props.location.state);
    let redirectVar = null;
    if (this.state.message === "ok") {
      redirectVar =
          <Redirect
              to={{
                pathname: "/finalmessage",
                state: {
                  booking_id: this.state.result.booking_id,
                },
              }}
          />

    }
    return (
        <>
        {redirectVar}
    <div style={{backgroundColor: "azure", height: "100vh"}}>
        <Container className="C">
          <form>
          <h5 style={{color:'black', textAlign:'center'}}>Booked Ride</h5>
          <p style={{color:'black',textAlign:'center'}}>
          Booking Id: {this.props.location.state.booking_id} <br></br>
          Cost: {this.props.location.state.cost}<br></br>
          Dropoff Location: {this.props.location.state.dropoff_location}<br></br>
          Owner Id: {this.props.location.state.owner_id}<br></br>
          Pickup Location: {this.props.location.state.pickup_location}<br></br>
          Ride Status: {this.props.location.state.ride_status}<br></br>
          Rider Id: {this.props.location.state.rider_id}<br></br>
          Vehicle Id: {this.props.location.state.vehicle_id}<br></br>
          </p>


          <div style={{display:'flex', justifyContent:'center' }}>
            <div className="registerButton" style={{padding:'20px'}}>
              <Button onClick={this.handleClick}>
                Start Ride
              </Button>
            </div>
          </div>
            <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>


              <a href={this.state.url}>
                <Button
                    lassName="registerButton">
                  Back
                </Button>
              </a>
            </div>
          </form>

        </Container>
      </div>
        </>
    );
}


}
