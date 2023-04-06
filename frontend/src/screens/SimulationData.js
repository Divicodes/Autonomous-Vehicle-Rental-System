import React, { Component } from "react";
import {Button, Container} from "react-bootstrap";
import Axios from "axios";
import {Link} from "react-router-dom";

export default class SimulationData extends Component {
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

    componentDidMount() {
        this.BackLogic();
            Axios.get("http://ec2-54-226-153-212.compute-1.amazonaws.com:8081/avsimulation/all").then((response) => {
                if (response.data) {
                    const result = response.data;
                    this.setState({result});
                    this.setState({
                        message: "ok",
                    });
                }
            });
        }

    render() {


        return (
            <>
                <div style={{backgroundImage:'url(https://www.geico.com/living/wp-content/uploads/e6Kaz0a-Imgur.gif)', backgroundRepeat:'no-repeat', backgroundSize:'cover', height: "100vh", display:'flex', justifyContent:'center', flexDirection:'column'}}>
                    <Container className='rideC'>
                        <div>
                            <h4 style={{textAlign:'center', color:'black', marginBottom:'20px'}}>Simulation Data</h4>
                            <table>
                                <tr>

                                    <th style={{width: '150px', color:'black'}}>Simulation ID</th>
                                    <th style={{width: '150px', color:'black'}}>Booking ID</th>
                                    <th style={{width: '150px', color:'black'}}>xLocation</th>
                                    <th style={{width: '150px', color:'black'}}>yLocation</th>
                                    <th style={{width: '150px', color:'black'}}>temperature</th>
                                    <th style={{width: '150px', color:'black'}}>latitude</th>
                                    <th style={{width: '150px', color:'black'}}>longitude</th>
                                    <th style={{width: '150px', color:'black'}}>map</th>
                                    <th style={{width: '150px', color:'black'}}>weather</th>
                                    <th style={{width: '150px', color:'black'}}>simulation_time</th>
                                    <th style={{width: '150px', color:'black'}}>speed</th>
                                    <th style={{width: '150px', color:'black'}}>direction</th>
                                    <th style={{width: '150px', color:'black'}}>lane_violations</th>
                                    <th style={{width: '150px', color:'black'}}>vbreak</th>
                                </tr>
                                {this.state.result.map(item => {
                                    return (
                                        <tr>
                                            <td style={{width: '150px', color:'black'}}>{item.avsimulation_id}</td>
                                            <td style={{width: '150px', color:'black'}}>{item.booking_id}</td>
                                            <td style={{width: '150px', color:'black'}}>{item.xLocation}</td>
                                            <td style={{width: '150px', color:'black'}}>{item.yLocation}</td>
                                            <td style={{width: '150px', color:'black'}}>{item.temperature}</td>
                                            <td style={{width: '150px', color:'black'}}>{item.latitude}</td>
                                            <td style={{width: '150px', color:'black'}}>{item.longitude}</td>
                                            <td style={{width: '150px', color:'black'}}>{item.map}</td>
                                            <td style={{width: '150px', color:'black'}}>{item.weather}</td>
                                            <td style={{width: '150px', color:'black'}}>{item.simulation_time}</td>
                                            <td style={{width: '150px', color:'black'}}>{item.speed}</td>
                                            <td style={{width: '150px', color:'black'}}>{item.direction}</td>
                                            <td style={{width: '150px', color:'black'}}>{item.lane_violations}</td>
                                            <td style={{width: '150px', color:'black'}}>{item.traffic_lights}</td>
                                            <td style={{width: '150px', color:'black'}}>{item.vbreak}</td>
                                            <Link to={{
                                                pathname: "/deleteBooking",
                                                state: item.booking_id
                                            }}>
                                                Delete
                                            </Link>
                                        </tr>
                                    );
                                })}

                            </table>
                        </div>
                    </Container>


                    <div style={{textAlign:'center',margin:'auto 0'}}>
                        <a href="/">
                            <Button
                                className="landingButton">
                                Logout
                            </Button>
                        </a>
                    </div>
                    <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>


                        <a href={this.state.url}>
                            <Button
                                lassName="registerButton">
                                Back
                            </Button>
                        </a>
                    </div>
                </div>

            </>
        );
    }


}
