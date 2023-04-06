import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./Login.css";
import Axios from "axios";
import { Redirect } from "react-router";
import Header from '../../Components/Header/Header';

let redirectVar = null;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      message: "",
      slot: "",
      date: "",
      time: "",
    };
  }


  onChange = (e) => {
    console.log("e.target.name" + e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let data = {
      email: this.state.Email,
      password: this.state.Password,
    };
    // Axios.post("http://ec2-54-226-153-212.compute-1.amazonaws.com:5001/login", data).then((response) => {
      Axios.post("http://ec2-54-226-153-212.compute-1.amazonaws.com:8081/profile/login", data).then((response) => {

        console.log(response.data);
      if (response.data) {
        this.setState({
          message: "ok",
        });
        window.localStorage.setItem("auth", JSON.stringify(response.data));
        console.log(window.localStorage.getItem(`auth`));


        // JSON.parse(localStorage.getItem('auth')).profile_id
        // if (this.state.message === "ok") {
        if (this.state.message === "ok") {
          localStorage.removeItem("login_status");
          localStorage.setItem(
              "login_status",
              JSON.stringify({
                status: "true",
                emailId: JSON.parse(localStorage.getItem('auth')).email,
              })
          );

          // this.setState({
          //   message: JSON.parse(localStorage.getItem('auth')).profile_type,
          // });
        }

        if (this.state.message != "ok") {
          alert("Log in failed");
          redirectVar = <Redirect to="/" />;
          // } else if (JSON.parse(localStorage.getItem('auth')).profile_type === "admin") {
        }

        if (JSON.parse(localStorage.getItem('auth')).profile_type === "admin") {
          console.log("I am in admin if block");
          localStorage.removeItem("loginEmail");
          localStorage.setItem(
              "loginEmail",
              JSON.stringify({
                emailId: JSON.parse(localStorage.getItem('auth')).email,
              })
          );
          redirectVar = (
              <Redirect
                  to={{
                    pathname: "/admin",
                    state: {
                      slotId: this.state.slot,
                      slotDate: this.state.date,
                      slotTime: this.state.time,
                    },
                  }}
              />
          );
        }

        if (JSON.parse(localStorage.getItem('auth')).profile_type === "owner") {
          console.log("I am in owner if block");
          redirectVar = <Redirect to="/owner" />;

          // history.push('/owner')

          // this.render()

          // return <Redirect to='/owner' />

        }
        if (JSON.parse(localStorage.getItem('auth')).profile_type === "rider") {
          console.log("I am in rider if block");

          redirectVar = <Redirect to="/rider" />;
        }

      }
    });
  };

  render() {
    console.log(this.props);
    // let redirectVar = null;
    // // JSON.parse(localStorage.getItem('auth')).profile_id
    // // if (this.state.message === "ok") {
    //   if (this.state.message === "ok") {
    //   localStorage.removeItem("login_status");
    //   localStorage.setItem(
    //       "login_status",
    //       JSON.stringify({
    //         status: "true",
    //         emailId: this.state.email,
    //       })
    //   );
    //   alert("Logged in successfully");
    //     this.setState({
    //       message: JSON.parse(localStorage.getItem('auth')).profile_type,
    //     });
    // } else if (this.state.message === "notok") {
    //   alert("Log in failed");
    //   redirectVar = <Redirect to="/" />;
    // // } else if (JSON.parse(localStorage.getItem('auth')).profile_type === "admin") {
    //   } else if (this.state.message === "admin") {
    //   localStorage.removeItem("loginEmail");
    //   localStorage.setItem(
    //       "loginEmail",
    //       JSON.stringify({
    //         emailId: this.state.email,
    //       })
    //   );
    //   alert("admin");
    //   redirectVar = (
    //       <Redirect
    //           to={{
    //             pathname: "/admin",
    //             state: {
    //               slotId: this.state.slot,
    //               slotDate: this.state.date,
    //               slotTime: this.state.time,
    //             },
    //           }}
    //       />
    //   );
    // } else if (this.state.message === "owner") {
    //   alert(
    //       "owner"
    //   );
    //   redirectVar = <Redirect to="/owner" />;
    // }
    // else if (this.state.message === "rider") {
    //   alert(
    //       "rider"
    //   );
    //   redirectVar = <Redirect to="/rider" />;
    // }

    return (
        <>
          <Header />
          <div className="Login">
            {redirectVar}
            <Container className="C">
              <div>
                <form className="f" onSubmit={this.onSubmit}>
                  <h3>Sign In</h3>
                  <div className="form-group"></div>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        name="Email"
                        onChange={this.onChange}
                        value={this.state.fields["Email"]}
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
                    />
                  </div>

                  <div className="buttonContainer">
                    <button type="submit" className="btn btn-primary btn-block">
                      Log In
                    </button>
                  </div>
                </form>
              </div>
            </Container>
          </div>
        </>
    );
  }
}