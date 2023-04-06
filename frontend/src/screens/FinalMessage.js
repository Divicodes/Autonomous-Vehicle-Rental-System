import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";

export default class FinalMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            message: "",
            result: [],
        };
    }


    render() {
        console.log(this.props.location.state);
        return (
            <>

                <div style={{backgroundColor: "azure", height: "100vh", display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    <Container className="C">
                       <p style={{color:'black',textAlign:'center'}}>
                           Your ride has started.
                           <br></br>
                           Please go to bookings to track ride status.
                       </p>
                        <div style={{textAlign:'center',margin:'auto 0'}}>
                        <a href="/bookings">
                            <Button>
                                Bookings
                            </Button>
                        </a>
                        </div>

                    </Container>
                </div>
            </>
        );
    }


}