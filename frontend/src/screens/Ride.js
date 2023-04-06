import React, { Component } from "react";
import {Button, Container} from "react-bootstrap";
import Header from "../Components/Header/Header";
import Axios from "axios";
import {Link} from "react-router-dom";
import "./Ride.css";

let searchResult=false;
export default class Ride extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      message: "",
      result: [],
    };

  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  onSubmit = (e) => {
    e.preventDefault();

    Axios.get("http://ec2-54-226-153-212.compute-1.amazonaws.com:8081/vehicle/available").then((response) => {
      console.log(response.data);
      if (response.data) {
        searchResult=true;
        this.setState({
          message: "ok",
        });
        const result = response.data;
        this.setState({result});
      }
    });
  };

  componentDidMount() {
    searchResult=false;
  }

  render() {
    return (
        <>
          <Header />
          <div style={{backgroundImage:'url(https://i.pinimg.com/736x/f4/75/be/f475beb348fadcded647f74872577c59.jpg', backgroundRepeat:'no-repeat', backgroundSize:'cover', height: "100vh", display:'flex',  flexDirection:'column', justifyContent:'center'}}>

            <div>
              <form onSubmit={this.onSubmit}>
                <h4 style={{textAlign:'center'}}>Select Pickup and Drop Locations</h4>

                <div className="form-group" style={{width:'300px',margin : '0 auto', padding:'10px'}}>
                  <input
                      style={{textAlign:'center'}}
                      type="text"
                      className="form-control"
                      placeholder="Enter Pickup Location"
                      name="pickup"
                      onChange={this.onChange}
                      value={this.state.fields["pickup"]}
                      required
                  />
                </div>
                <div className="form-group" style={{width:'300px',margin : '0 auto',padding:'10px'}}>
                  <input
                      style={{textAlign:'center'}}
                      type="text"
                      className="form-control"
                      placeholder="Enter Drop Location"
                      name="drop"
                      onChange={this.onChange}
                      value={this.state.fields["pickup"]}
                      required
                  />
                </div>

                <div className="registerButton" style={{padding:'20px'}}>
                  <Button type="submit">
                    List All Vehicles
                  </Button>

                </div>
              </form>
            </div>

            {(searchResult)?
                <Container className='rideC'>
                  <div className="App">
                    <table>
                      <tr>
                        <th style={{width: '150px', color:'black'}}>Vehicle ID</th> <br></br>
                        <th style={{width: '150px', color:'black'}}>Vehicle Type</th><br></br>
                        <th style={{width: '150px', color:'black'}}>Vehicle Number</th><br></br>
                        <th style={{width: '150px', color:'black'}}>Capacity</th><br></br>
                        <th style={{width: '150px', color:'black'}}>Owner ID</th><br></br>
                        <th style={{width: '150px', color:'black'}}></th>
                      </tr>
                      {this.state.result.map((val, key) => {
                        return (

                            <tr>
                              <td style={{width: '150px', color:'black'}}>{val.vehicle_id}</td><br></br>
                              <td style={{width: '150px', color:'black'}}>{val.vehicle_type}</td><br></br>
                              <td style={{width: '150px', color:'black'}}>{val.vehicle_number}</td><br></br>
                              <td style={{width: '150px', color:'black'}}>{val.capacity}</td><br></br>
                              <td style={{width: '150px', color:'black'}}>{val.profile_id}</td><br></br>
                              <td>

                                <Link to={{
                                  pathname: "/payment",
                                  state: {
                                    vehicle_id: val.vehicle_id,
                                    owner_id: val.profile_id,
                                    rider_id: JSON.parse(localStorage.getItem('auth')).profile_id,
                                    pickup_location:this.state.pickup,
                                    dropoff_location:this.state.drop,
                                    start_time:Date.now(),
                                    vehicle_type:val.vehicle_type,
                                    capacity:val.capacity,
                                    vehicle_number:val.vehicle_number
                                  }

                                }}>
                                  Select Vehicle
                                </Link>

                              </td>
                            </tr>
                        )
                      })}
                    </table>

                  </div>
                </Container>: <p></p> }

          </div>
        </>

    );
  }


}
