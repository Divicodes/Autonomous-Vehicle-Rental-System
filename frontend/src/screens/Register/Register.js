import { Container, Button } from "react-bootstrap";
import "./Register.css";
import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router";
import moment from "moment";
import Header from '../../Components/Header/Header';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      message: "",
      isSafe: false,

    };
  
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // let data = {
    //   FirstName: this.state.FirstName,
    //   LastName: this.state.LastName,
    //   Email: this.state.Email,
    //   Password: this.state.Password,
    //   DOB: this.state.DOB,
    //   address: this.state.address,
    //   Mobile: this.state.mobile,
    //   types: this.state.types,
    // };
    let data = {
      firstname: this.state.FirstName,
      lastname: this.state.LastName,
      email: this.state.Email,
      password: this.state.Password,
      dob: this.state.DOB,
      address: this.state.address,
      phone: this.state.mobile,
      profile_type: this.state.types
      // membership: "yes"
    };

    // Axios.post("http://ec2-54-226-153-212.compute-1.amazonaws.com:5001/register", data).then((response) => {
      Axios.post("http://ec2-54-226-153-212.compute-1.amazonaws.com:8081/profile/new", data).then((response) => {
      console.log(response.data);
      if (response.data) {
        this.setState({
          message: JSON.stringify(response.data),
        });
        console.log(this.state.message.profile_id);
        console.log(JSON.parse(this.state.message).profile_id);
      }
    });
  };

  render() {
    console.log(this.props);
    let redirectVar = null;

    // JSON.parse(localStorage.getItem('auth')).profile_id
    // if (JSON.parse(this.state.message).profile_id != 0) {
    if (this.state.message != 0) {
      localStorage.setItem("register_status", "true");
      redirectVar = <Redirect to="/success" />;
      alert("Registered successfully");
    } else if (this.state.message === "notok") {
      alert("Registration failed");
      redirectVar = <Redirect to="/" />;
    }
    return (
      <>
      <Header />
      <div className="Register">
        {redirectVar}
        <Container className="C">
          <div>
            <form onSubmit={this.onSubmit}>
              <h3>Register</h3>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="Email"
                  onChange={this.onChange}
                  value={this.state.fields["Email"]}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="Password"
                  onChange={this.onChange}
                  value={this.state.fields["Password"]}
                  required
                />
              </div>
              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First name"
                  name="FirstName"
                  onChange={this.onChange}
                  value={this.state.fields["FirstName"]}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Last name"
                  name="LastName"
                  onChange={this.onChange}
                  value={this.state.fields["LastName"]}
                  required
                />
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Enter DOB"
                  name="DOB"
                  onChange={this.onChange}
                  value={this.state.fields["DOB"]}
                  max={moment().format("YYYY-MM-DD")}
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Address"
                  name="address"
                  onChange={this.onChange}
                  value={this.state.fields["address"]}
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Mobile Phone"
                  name="mobile"
                  onChange={this.onChange}
                  value={this.state.fields["mobile"]}
                  required
                />
              </div>


        <div>
        <label> Select Account Type</label>
  
        
          <select name='types'
                  onChange={this.onChange}
                  value={this.state.fields["types"]}
                  required>        
            <option value='admin'>
              Admin
            </option>
            <option value='owner'>
              Vehicle Owner
            </option>
            <option value='rider'>
              Vehicle Rider
            </option> 
          </select>
      
      </div>
                  
              <div className="registerButton">
                <Button type="submit">
                  Register
                </Button>
                <div>
                  <p className="AlreadyRegistered">
                    Already registered <a href="/login">log in?</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </Container>
      </div>

      </>
    );
  }
}
