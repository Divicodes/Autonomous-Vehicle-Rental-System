import React, { Component } from "react";
import Axios from "axios";
import {Link} from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button} from "react-bootstrap";

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stats: [],
            firstname:"",
            lastname: "",
            email: "",
            password: "",
            dob: "",
            address: "",
            phone: "",
            profile_type: "",
            membership:"",
            payment_card:"",
            wallet:"",
            disable:true,
        };
    }

    updateProfile() {
        //update profile and update local storage
        console.log("update profile "+this.state.firstname);

        let data = {
            profile_id: JSON.parse(localStorage.getItem('auth')).profile_id,
            firstname:this.state.firstname,
            // firstname:(this.state.firstname)?this.state.firstname:JSON.parse(localStorage.getItem('auth')).firstname,
            lastname: (this.state.lastname)?this.state.lastname:JSON.parse(localStorage.getItem('auth')).lastname,
            email: (this.state.email)?this.state.email:JSON.parse(localStorage.getItem('auth')).email,
            password: (this.state.password)?this.state.password:JSON.parse(localStorage.getItem('auth')).password,
            dob: (this.state.dob)?this.state.dob:JSON.parse(localStorage.getItem('auth')).dob,
            address: (this.state.address)?this.state.address:JSON.parse(localStorage.getItem('auth')).address,
            phone: (this.state.phone)?this.state.phone:JSON.parse(localStorage.getItem('auth')).phone,
            profile_type: (this.state.profile_type)?this.state.profile_type:JSON.parse(localStorage.getItem('auth')).profile_type,
            membership:(this.state.membership)?this.state.membership:JSON.parse(localStorage.getItem('auth')).membership,
            payment_card:(this.state.payment_card)?this.state.payment_card:JSON.parse(localStorage.getItem('auth')).payment_card,
            wallet:(this.state.wallet)?this.state.wallet:JSON.parse(localStorage.getItem('auth')).wallet
        }

        Axios.post("http://ec2-54-226-153-212.compute-1.amazonaws.com:8081/profile/update", data).then((response) => {
            if (response.data) {
                alert(
                    "Profile Updated!"
                );
                let id = JSON.parse(localStorage.getItem('auth')).profile_id;

                Axios.get("http://ec2-54-226-153-212.compute-1.amazonaws.com:8081/profile/"+id).then((response) => {
                    if (response.data) {
                        window.localStorage.setItem("auth", JSON.stringify(response.data));
                    }
                })

            }
        });

    }

    onChange = (e) => {
        // console.log("in on change method");
        // console.log(e.target.name);
        // console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value,

        });
        console.log(e.target.name);
        console.log(e.target.value);
    };

    componentDidMount(){
        let user = JSON.parse(localStorage.getItem('auth')).email;
        let id = JSON.parse(localStorage.getItem('auth')).profile_id;

        // Axios.post("http://ec2-54-226-153-212.compute-1.amazonaws.com:5001/profile", newdata).then((response) => {
        Axios.get("http://ec2-54-226-153-212.compute-1.amazonaws.com:8081/profile/"+id).then((response) => {
            if (response.data) {
                this.setState({
                    stats: response.data,
                    firstname:response.data.firstname,
                    lastname: response.data.lastname,
                    email: response.data.email,
                    password: response.data.password,
                    dob: response.data.dob,
                    address: response.data.address,
                    phone: response.data.phone,
                    profile_type: response.data.profile_type,
                    membership:response.data.membership,
                    payment_card:response.data.payment_card,
                    wallet:response.data.wallet,
                });
            }
        });
    }
    render(){
        console.log(this.state.firstname)
        return(
            // <div style={{backgroundImage:'url(https://3xlxrp3lxcs32b9i6i2un183-wpengine.netdna-ssl.com/wp-content/uploads/modeling-and-simulation-pic-640x302.jpg', backgroundRepeat:'no-repeat', backgroundSize:'cover', height: "100vh", display:'flex', justifyContent:'center', flexDirection:'column', justifyContent:'center', flexDirection:'column'}}>
            // <div style={{backgroundColor: "azure", height: "100vh"}}>
            // <div style={{display:'flex', justifyContent:'center', backgroundImage:'url(https://wallpaperaccess.com/full/5394799.jpg)', backgroundRepeat:'no-repeat', backgroundSize:'cover', height: "100vh"}}>
            <div style={{ backgroundImage:'url(https://wallpaperaccess.com/full/5394799.jpg)', backgroundRepeat:'no-repeat', backgroundSize:'cover', height: "100vh"}}>
                <section style={{ backgroundImage:'url(https://wallpaperaccess.com/full/5394799.jpg)', backgroundRepeat:'no-repeat', backgroundSize:'cover', height: "100vh"}}>

                    <form onSubmit={this.onSubmit} >
                        <Card style={{ backgroundImage:'url(https://ak.picdn.net/shutterstock/videos/1033270808/thumb/12.jpg)', backgroundRepeat:'no-repeat', backgroundSize:'cover', height: "100vh"}}>
                            <Card.Body>
                                <Card.Title>Your Profile</Card.Title>
                                <Card.Text>
                                    <table>
                                        <tr>
                                            <td>
                                                <b>First Name: </b>
                                            </td>
                                            <td>
                                                <input
                                                    name='firstname'
                                                    type="text"
                                                    className="form-control"
                                                    // placeholder="Enter Hotel Number For Reference"
                                                    defaultValue={this.state.firstname}
                                                    onChange={this.onChange}
                                                />
                                            </td>
                                        </tr>
                                        <br/>
                                        <tr>
                                            <td>
                                                <b>Last Name: </b>
                                            </td>
                                            <td>
                                                <input
                                                    name='lastname'
                                                    type="text"
                                                    className="form-control"
                                                    // placeholder="Enter Hotel Number For Reference"
                                                    defaultValue={this.state.lastname}
                                                    onChange={this.onChange}
                                                />
                                            </td>
                                        </tr>
                                        <br/>
                                        <tr>
                                            <td>
                                                <b>Address: </b>
                                            </td>
                                            <td>
                                                <input
                                                    name='address'
                                                    type="text"
                                                    className="form-control"
                                                    // placeholder="Enter Hotel Number For Reference"
                                                    defaultValue={this.state.address}
                                                    onChange={this.onChange}
                                                />
                                            </td>
                                        </tr>
                                        <br/>
                                        <tr>
                                            <td>
                                                <b>Phone: </b>
                                            </td>
                                            <td>
                                                <input
                                                    name='phone'
                                                    type="text"
                                                    className="form-control"
                                                    // placeholder="Enter Hotel Number For Reference"
                                                    defaultValue={this.state.phone}
                                                    onChange={this.onChange}
                                                />
                                            </td>
                                        </tr>
                                        <br/>
                                        <tr>
                                            <td>
                                                <b>Email: </b>
                                            </td>
                                            <td>
                                                <input
                                                    name='email'
                                                    type="text"
                                                    className="form-control"
                                                    // placeholder="Enter Hotel Number For Reference"
                                                    defaultValue={this.state.email}
                                                    onChange={this.onChange}
                                                />
                                            </td>
                                        </tr>
                                        <br/>
                                        <tr>
                                            <td>
                                                <b>Password: </b>
                                            </td>
                                            <td>
                                                <input
                                                    name='password'
                                                    type="text"
                                                    className="form-control"
                                                    // placeholder="Enter Hotel Number For Reference"
                                                    defaultValue={this.state.password}
                                                    onChange={this.onChange}
                                                />
                                            </td>
                                        </tr>
                                        <br/>
                                        <tr>
                                            <td>
                                                <b>DOB: </b>
                                            </td>
                                            <td>
                                                <input
                                                    name='dob'
                                                    type="text"
                                                    className="form-control"
                                                    // placeholder="Enter Hotel Number For Reference"
                                                    defaultValue={this.state.dob}
                                                    onChange={this.onChange}
                                                />
                                            </td>
                                        </tr>
                                        <br/>
                                        <tr>
                                            <td>
                                                <b>Membership: </b>
                                            </td>
                                            <td>
                                                <input
                                                    name='membership'
                                                    type="text"
                                                    className="form-control"
                                                    // placeholder="Enter Hotel Number For Reference"
                                                    defaultValue={this.state.membership}
                                                    onChange={this.onChange}
                                                />
                                            </td>
                                        </tr>
                                        <br/>
                                        <tr>
                                            <td>
                                                <b>Profile Type: </b>
                                            </td>
                                            <td>
                                                <input
                                                    name='profile_type'
                                                    type="text"
                                                    className="form-control"
                                                    // placeholder="Enter Hotel Number For Reference"
                                                    defaultValue={this.state.profile_type}
                                                    onChange={this.onChange}
                                                />
                                            </td>
                                        </tr>
                                        <br/>
                                        <tr>
                                            <td>
                                                <b>Payment Card: </b>
                                            </td>
                                            <td>
                                                <input
                                                    name='payment_card'
                                                    type="text"
                                                    className="form-control"
                                                    // placeholder="Enter Hotel Number For Reference"
                                                    defaultValue={this.state.payment_card}
                                                    onChange={this.onChange}
                                                />
                                            </td>
                                        </tr>
                                        <br/>
                                        <tr>
                                            <td>
                                                <b>Wallet Balance: </b>
                                            </td>
                                            <td>
                                                <input
                                                    name='wallet'
                                                    type="text"
                                                    className="form-control"
                                                    // placeholder="Enter Hotel Number For Reference"
                                                    defaultValue={this.state.wallet}
                                                    onChange={this.onChange}
                                                />
                                            </td>
                                        </tr>
                                        <br/>
                                    </table>


                                </Card.Text>
                                <Button
                                    className="landingButton"
                                    onClick = {this.updateProfile}>
                                    Update Profile
                                </Button>
                            </Card.Body>
                        </Card>
                        <div style={{display:'flex', justifyContent:'center' }}>
                            <a href="/">
                                <Button className="landingButton">
                                    Logout
                                </Button>
                            </a>
                        </div>
                    </form>
                </section>
                {/*<div style={{display:'flex', justifyContent:'center' }}>*/}
                {/*    <a href="/">*/}
                {/*        <Button*/}
                {/*            className="landingButton"*/}
                {/*            onClick = {this.handleOnLogout}>*/}
                {/*            Logout*/}
                {/*        </Button>*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>
        );
    }
}