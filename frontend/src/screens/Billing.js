import React, { Component } from "react";
import {Button, Container} from "react-bootstrap";
import Axios from "axios";
import {Link} from "react-router-dom";

export default class Billings extends Component {
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
        let id=JSON.parse(localStorage.getItem('auth')).profile_id;
        let type=JSON.parse(localStorage.getItem('auth')).profile_type;

        if(type==='rider') {

            Axios.get("http://ec2-54-226-153-212.compute-1.amazonaws.com:8081/booking/" + type + "/" + id).then((response) => {
                if (response.data) {
                    const result = response.data;
                    this.setState({result});
                    this.setState({
                        message: "ok",
                    });
                }
            });
        }
    }

    render() {


        return (
            <>
                <div style={{backgroundImage:'url(https://www.geico.com/living/wp-content/uploads/e6Kaz0a-Imgur.gif)', backgroundRepeat:'no-repeat', backgroundSize:'cover', height: "100vh", display:'flex', justifyContent:'center', flexDirection:'column'}}>
                    <Container className='rideC'>
                        <div style={{textAlign:'center'}}>
                            <h4 style={{textAlign:'center', color:'black', marginBottom:'20px'}}>Your Billing Info</h4>
                            <div style={{margin:'auto 0',textAlign:'center', display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'}} >
                            <table>
                                <tr>
                                    <th style={{width: '150px', color:'black'}}>Booking ID</th>
                                    <th style={{width: '150px', color:'black'}}>Pickup Location</th>
                                    <th style={{width: '150px', color:'black'}}>Drop Location</th>
                                    <th style={{width: '150px', color:'black'}}>Cost</th>
                                    <th style={{width: '150px', color:'black'}}>Status</th>
                                    <th style={{width: '150px', color:'black'}}></th>
                                </tr>
                                {this.state.result.map(item => {
                                    return (
                                        <tr>
                                            <td style={{width: '150px', color:'black'}}>{item.booking_id}</td>
                                            <td style={{width: '150px', color:'black'}}>{item.pickup_location}</td>
                                            <td style={{width: '150px', color:'black'}}>{item.dropoff_location}</td>
                                            <td style={{width: '150px', color:'black'}}>{item.cost}</td>
                                            <td style={{width: '150px', color:'black'}}>{item.ride_status}</td>
                                        </tr>
                                    );
                                })}

                            </table>
                            </div>
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