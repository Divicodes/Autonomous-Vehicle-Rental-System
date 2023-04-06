import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import Axios from "axios";
import {Redirect} from "react-router-dom";

export default class DeleteBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
            message: "",
            hotels: [],
            rooms: [],
            result: [],
            booking_id: "",
        };
        this.state.booking_id=props.location.state;
    }

    handleDelete = (e) => {
        e.preventDefault();

        Axios.delete("http://ec2-54-226-153-212.compute-1.amazonaws.com:8081/booking/"+this.state.booking_id).then((response) => {
            console.log(response.data);
            if (response.data) {
                this.setState({
                    message: response.data,
                });
            }
        });
    };

    render() {
        console.log(this.state.message);
        let redirect=null;
        if(this.state.message === "Booking Deleted"){
            alert("Booking Deleted");
            redirect= <Redirect to="/bookings"/>
        }
        return (
            <>
            {redirect}

                <div style={{backgroundColor: "azure", height: "100vh", display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    <Container className="C">
                        <p style={{color:'black',textAlign:'center'}}>
                            Are you sure you want to delete the booking?
                        </p>
                        <div style={{textAlign:'center',margin:'auto 0'}}>
                            <a href="/bookings">
                                <Button>
                                    No
                                </Button>
                            </a>
                            <Button onClick={this.handleDelete}>
                                Yes
                            </Button>
                        </div>

                    </Container>
                </div>
            </>
        );
    }


}