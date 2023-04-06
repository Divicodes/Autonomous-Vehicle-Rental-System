import React, { Component } from "react";
import {Button, Container} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import "./Ride.css";
import Axios from "axios";


export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      message: "",
      result: [],
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    let data = {
      vehicle_id: this.props.location.state.vehicle_id,
      owner_id: this.props.location.state.owner_id,
      rider_id: this.props.location.state.rider_id,
      pickup_location: this.props.location.state.pickup_location,
      dropoff_location: this.props.location.state.dropoff_location,
      start_time: this.props.location.state.start_time,
    };
    console.log(data);
    Axios.post("http://ec2-54-226-153-212.compute-1.amazonaws.com:8081/booking/new",data).then((response) => {
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
    let redirectVar = null;
    if (this.state.message === "ok") {
      redirectVar =
          <Redirect
              to={{
                pathname: "/confirmation",
                state: {
                  booking_id: this.state.result.booking_id,
                  cost: this.state.result.cost,
                  dropoff_location: this.state.result.dropoff_location,
                  end_time:this.state.result.end_time,
                  owner_id: this.state.result.owner_id,
                  pickup_location: this.state.result.pickup_location,
                  ride_status: this.state.result.ride_status,
                  rider_id: this.state.result.rider_id,
                  start_time: this.state.result.start_time,
                  vehicle_id: this.state.result.vehicle_id,
                },
              }}
          />

    }
    return (
        <>
          {redirectVar}
          <div style={{backgroundImage:'url(https://www.lodgify.com/wp-content/uploads/2021/02/payment-gateway-780x520.jpeg', backgroundRepeat:'no-repeat', backgroundSize:'cover', height: "100vh"}}>
            <Container className='rideC'>
              <div>
                <h4 style={{textAlign:'center', color:'black', marginBottom:'20px'}}>Your Ride Details</h4>
                <table>
                  <tr>
                    <th style={{width: '150px', color:'black'}}>Vehicle ID</th>
                    <th style={{width: '150px', color:'black'}}>Vehicle Type</th>
                    <th style={{width: '150px', color:'black'}}>Vehicle Number</th>
                    <th style={{width: '150px', color:'black'}}>Capacity</th>
                    <th style={{width: '150px', color:'black'}}>Owner ID</th>
                    <th style={{width: '150px', color:'black'}}>Your ID</th>
                    <th style={{width: '150px', color:'black'}}>Pickup Location</th>
                    <th style={{width: '150px', color:'black'}}>Drop Location</th>
                  </tr>

                  <tr>
                    <td style={{width: '150px', color:'black'}}>{this.props.location.state.vehicle_id}</td>
                    <td style={{width: '150px', color:'black'}}>{this.props.location.state.vehicle_type}</td>
                    <td style={{width: '150px', color:'black'}}>{this.props.location.state.vehicle_number}</td>
                    <td style={{width: '150px', color:'black'}}>{this.props.location.state.capacity}</td>
                    <td style={{width: '150px', color:'black'}}>{this.props.location.state.owner_id}</td>
                    <td style={{width: '150px', color:'black'}}>{this.props.location.state.rider_id}</td>
                    <td style={{width: '150px', color:'black'}}>{this.props.location.state.pickup_location}</td>
                    <td style={{width: '150px', color:'black'}}>{this.props.location.state.dropoff_location}</td>
                  </tr>

                </table>
              </div>
            </Container>

            <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
              <form onSubmit={this.onSubmit} style={{width:'200px',display:'flex', flexDirection:'column', justifyContent:'center',margin:'0 auto'}}>
                <label style={{width:'200px', margin:'20px'}}> Select Payment Option</label>
                <select style={{width:'200px', margin:'10px'}}>
                  <option value='credit'>
                    Credit Card
                  </option>
                  <option value='debit'>
                    Debit Card
                  </option>
                  <option value='cash'>
                    Cash
                  </option>
                  <option value='wallet'>
                    Wallet
                  </option>
                </select>

                <div style={{display:'flex', justifyContent:'center' }}>
                  <div className="registerButton" style={{padding:'20px'}}>
                    <Button type="submit">
                      Pay
                    </Button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </>

    );
  }
}
