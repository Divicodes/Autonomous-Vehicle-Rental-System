import React, {useState} from 'react';
import axios from "axios";
// import {toast} from "react-toastify";
import Axios from "axios";
import {Button} from "react-bootstrap";


let searchResult=false;

export default class Profile extends React.Component {


    constructor(props) {
        super(props);
        // props.addExperience(data, history);
        this.state = {
            url:"",
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
            firstname:(this.state.firstname)?this.state.firstname:JSON.parse(localStorage.getItem('auth')).firstname,
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
        };

        // console.log(data);

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
        // history.push("/user/profile");
    };

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
        let id = JSON.parse(localStorage.getItem('auth')).profile_id

        Axios.get("http://ec2-54-226-153-212.compute-1.amazonaws.com:8081/profile/"+id)
            .then(res => {
                this.setState({
                    profile: res.data
                });
            })
        console.log(this.state.profile.firstname);
    }


    render() {

        console.log(this.props);

        return (
            <>
                <div style={{ backgroundImage:'url(https://wallpaperaccess.com/full/5394799.jpg)', backgroundRepeat:'no-repeat', backgroundSize:'cover', height: "100vh"}}>
                    <br/>
                    <center><label className="form-label">My Profile</label></center>
                    {/*<br/>*/}
                    <form onSubmit={this.onSubmit} className="mt-3">
                    <center>
                        <table >
                            <tr>
                                <div className="form-group mb-3">
                                    <td style={{width: '250px'}}>
                                        <label className="form-label">Name</label>
                                    </td>
                                    <td style={{width: `400px`}}>
                                        <input
                                            name='firstname'
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Profile Name"
                                            defaultValue={this.state.profile.firstname}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div className="form-group mb-3">
                                    <td style={{width: '250px'}}>
                                        <label className="form-label">Lastname</label>
                                    </td>
                                    <td style={{width: `400px`}}>
                                        <input
                                            name='lastname'
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Email Address"
                                            defaultValue={this.state.profile.lastname}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div className="form-group mb-3">
                                    <td style={{width: '250px'}}>
                                        <label className="form-label">Email</label>
                                    </td>
                                    <td style={{width: `400px`}}>
                                        <input
                                            name = "email"
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Email"
                                            defaultValue={this.state.profile.email}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div className="form-group mb-3">
                                    <td style={{width: '250px'}}>
                                        <label className="form-label">Password</label>
                                    </td>
                                    <td style={{width: `400px`}}>
                                        <input
                                            name = "password"
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Password"
                                            defaultValue={this.state.profile.password}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div className="form-group mb-3">
                                    <td style={{width: '250px'}}>
                                        <label className="form-label">Date Of Birth</label>
                                    </td>
                                    <td style={{width: `400px`}}>
                                        <input
                                            name = "dob"
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter DOB"
                                            defaultValue={this.state.profile.dob}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div className="form-group mb-3">
                                    <td style={{width: '250px'}}>
                                        <label className="form-label">Address</label>
                                    </td>
                                    <td style={{width: `400px`}}>
                                        <input
                                            name = "address"
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Address"
                                            defaultValue={this.state.profile.address}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div className="form-group mb-3">
                                    <td style={{width: '250px'}}>
                                        <label className="form-label">Phone</label>
                                    </td>
                                    <td style={{width: `400px`}}>
                                        <input
                                            name = "phone"
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Phone"
                                            defaultValue={this.state.profile.phone}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div className="form-group mb-3">
                                    <td style={{width: '250px'}}>
                                        <label className="form-label">Profile Type</label>
                                    </td>
                                    <td style={{width: `400px`}}>
                                        <input
                                            name = "profile_type"
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Profile Type"
                                            defaultValue={this.state.profile.profile_type}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div className="form-group mb-3">
                                    <td style={{width: '250px'}}>
                                        <label className="form-label">Membership</label>
                                    </td>
                                    <td style={{width: `400px`}}>
                                        <input
                                            name = "membership"
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Membership"
                                            defaultValue={this.state.profile.membership}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div className="form-group mb-3">
                                    <td style={{width: '250px'}}>
                                        <label className="form-label">Payment Card</label>
                                    </td>
                                    <td style={{width: `400px`}}>
                                        <input
                                            name = "payment_card"
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Payment Card"
                                            defaultValue={this.state.profile.payment_card}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div className="form-group mb-3">
                                    <td style={{width: '250px'}}>
                                        <label className="form-label">Wallet</label>
                                    </td>
                                    <td style={{width: `400px`}}>
                                        <input
                                            name = "payment_card"
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Wallet"
                                            defaultValue={this.state.profile.wallet}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                </div>
                            </tr>



                        </table>

                        <div style={{display:'flex', justifyContent:'center' }}>
                            {/*<Button className="landingButton">*/}
                            <button className="btn btn-primary" style={{margin: `5px`}}>
                                Update
                            </button>

                        </div>
                    </center>
                </form>
                    <a href={this.state.url} style={{margin: `5px`}}>
                        <button className="btn btn-primary">
                            Back
                        </button>
                    </a>

                </div>



            </>
        )
    }
}