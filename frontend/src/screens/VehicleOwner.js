import React, { Component } from "react";
import { Button} from "react-bootstrap";
import { Card } from "react-bootstrap";
import {Link} from "react-router-dom";

export default class VehicleOwner extends Component {
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
        <div style={{backgroundImage:'url(https://inspektlabs.com/blog/content/images/2020/09/5b474b94a62d2.jpg)', backgroundRepeat:'no-repeat', backgroundSize:'cover', height: "100vh"}}>
      
      <div style={{display: 'flex', flexDirection: 'row', padding:"10px"}} >

          <Card style={{ width: '20rem', flex: 1, padding:"10px",marginRight:"20px",opacity:'80%'}}>
          <Card.Body>
          <Card.Title><center>Profile</center></Card.Title>
          <Card.Text>
            <center>Go to your profile</center>
          </Card.Text>
            <Link to= "/profile" ><center>View Profile</center></Link>
          </Card.Body>
          </Card>


      {/*<Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px",opacity:'80%'}}>*/}
      {/*<Card.Body>*/}
      {/*<Card.Title>Billing</Card.Title>*/}
      {/*<Card.Text>*/}
      {/*Go to billing*/}
      {/*</Card.Text>*/}
      {/*<Link to= "/billing" >View Billing Information</Link>*/}
      {/*</Card.Body>*/}
      {/*</Card>*/}
      </div>

      <div style={{display: 'flex', flexDirection: 'row', padding:"10px"}} >
      <Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px",opacity:'80%'}}>
      <Card.Body>
      <Card.Title>Add Vehicle</Card.Title>
      <Card.Text>
      Go to the add AV page
      </Card.Text>
      <Link to= "/addav" >View Add Vehicle Form</Link>
      </Card.Body>
      </Card>

      <Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px",opacity:'80%'}}>
      <Card.Body>
      <Card.Title>View Vehicles</Card.Title>
      <Card.Text>
      Go to your vehicles
      </Card.Text>
      <Link to= "/vehicles" >View Vehicles</Link>
      </Card.Body>
      </Card>

      <Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px",opacity:'80%'}}>
          <Card.Body>
              <Card.Title>Update Vehicle</Card.Title>
              <Card.Text>
                  Update your vehicle
              </Card.Text>
              <Link to= "/updateVehicle" >Update Vehicle</Link>
          </Card.Body>
      </Card>

      <Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px",opacity:'80%'}}>
          <Card.Body>
              <Card.Title>Delete Vehicle</Card.Title>
              <Card.Text>
                  Delete your vehicle
              </Card.Text>
              <Link to= "/deleteVehicle" >Delete Vehicle</Link>
          </Card.Body>
      </Card>

      </div>

      <div style={{display: 'flex', flexDirection: 'row', padding:"10px",opacity:'80%'}} >

      <Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px"}}>
      <Card.Body>
      <Card.Title><center>Bookings</center></Card.Title>
      <Card.Text>
          <center>Go to all the bookings</center>
      </Card.Text>
          <Link to= "/ownerBookings" ><center>View Bookings</center></Link>
      </Card.Body>
      </Card>
      </div>

    <div style={{display: 'flex', flexDirection: 'row', padding:"10px"}} >
        <Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px",opacity:'80%'}}>
            <Card.Body>
                <Card.Title>Create Ticket</Card.Title>
                <Card.Text>
                    Create a new service ticket
                </Card.Text>
                <Link to= "/createTicket" >Create Ticket Form</Link>
            </Card.Body>
        </Card>

        <Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px",opacity:'80%'}}>
            <Card.Body>
                <Card.Title>View Tickets</Card.Title>
                <Card.Text>
                    View your tickets
                </Card.Text>
                <Link to= "/viewTicket" >View Tickets</Link>
            </Card.Body>
        </Card>

        <Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px",opacity:'80%'}}>
            <Card.Body>
                <Card.Title>Update Ticket</Card.Title>
                <Card.Text>
                    Update your service ticket
                </Card.Text>
                <Link to= "/updateTicket" >Update Ticket</Link>
            </Card.Body>
        </Card>

        <Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px",opacity:'80%'}}>
            <Card.Body>
                <Card.Title>Delete Ticket</Card.Title>
                <Card.Text>
                    Delete your service ticket
                </Card.Text>
                <Link to= "/deleteTicket" >Delete Ticket</Link>
            </Card.Body>
        </Card>

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