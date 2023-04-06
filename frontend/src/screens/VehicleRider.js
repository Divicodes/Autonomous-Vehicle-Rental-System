import React, { Component } from "react";
import { Button} from "react-bootstrap";
import { Card } from "react-bootstrap";
import {Link} from "react-router-dom";

export default class VehicleRider extends Component {
    handleOnLogout = e =>{
        localStorage.removeItem("login_status");
        localStorage.setItem(
            "login_status",
            JSON.stringify({
              status: "false",
              emailId: this.state.Email,
            })
          );
          alert("Logged in successfully")
      }
    render(){
    return(
      <>
      <div style={{backgroundImage:'url(https://wallpaperaccess.com/full/5394799.jpg)', backgroundRepeat:'no-repeat', backgroundSize:'cover', height: "100vh"}}>
      
      <div style={{display: 'flex', flexDirection: 'row', padding:"10px"}} >
      <Card style={{ width: '20rem', flex: 1, padding:"10px",marginRight:"20px",opacity:'80%'}}>
      <Card.Body>
      <Card.Title>Profile</Card.Title>
      <Card.Text>
      Go to your profile
      </Card.Text>
      <Link to= "/profile" >View Profile</Link>
      </Card.Body>
      </Card>

      <Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px",opacity:'80%'}}>
      <Card.Body>
      <Card.Title>Billing</Card.Title>
      <Card.Text>
      Go to billing
      </Card.Text>
      <Link to= "/billing" >View Billing Information</Link>
      </Card.Body>
      </Card>
      </div>

      <div style={{display: 'flex', flexDirection: 'row', padding:"10px"}} >
      <Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px",opacity:'80%'}}>
      <Card.Body>
      <Card.Title>Rides</Card.Title>
      <Card.Text>
      Book your ride
      </Card.Text>
      <Link to= "/ride">Ride</Link>
      </Card.Body>
      </Card>



        <Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px",opacity:'80%'}}>
      <Card.Body>
      <Card.Title>Bookings</Card.Title>
      <Card.Text>
      Go to all the bookings
      </Card.Text>
      <Link to= "/bookings">View Bookings</Link>
      </Card.Body>
      </Card>
      </div>

        <div style={{display: 'flex', flexDirection: 'row', padding:"10px"}} >

          <div style={{display: 'flex', flexDirection: 'row', padding:"10px"}} >
            <Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px",opacity:'80%'}}>
              <Card.Body>
                <Card.Title>Create Ticket</Card.Title>
                <Card.Text>
                  Create a new service ticket
                </Card.Text>
                <Link to= "/createTicket">Create Ticket Form</Link>
              </Card.Body>
            </Card>

            <Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px",opacity:'80%'}}>
              <Card.Body>
                <Card.Title>View Tickets</Card.Title>
                <Card.Text>
                  View your tickets
                </Card.Text>
                <Link to= "/viewTicket">View Tickets</Link>
              </Card.Body>
            </Card>

            <Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px",opacity:'80%'}}>
              <Card.Body>
                <Card.Title>Update Ticket</Card.Title>
                <Card.Text>
                  Update your service ticket
                </Card.Text>
                <Link to= "/updateTicket">Update Ticket</Link>
              </Card.Body>
            </Card>

            <Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px",opacity:'80%'}}>
              <Card.Body>
                <Card.Title>Delete Ticket</Card.Title>
                <Card.Text>
                  Delete your service ticket
                </Card.Text>
                <Link to= "/deleteTicket">Delete Ticket</Link>
              </Card.Body>
            </Card>

          </div>


        </div>






      <div style={{display:'flex', justifyContent:'center' }}>
      <a href="/">
      <Button
      className="landingButton"
      onClick = {this.handleOnLogout}>
      Logout
      </Button>
      </a>
      </div>
      
      </div>
      </>
    );
    
}
}

