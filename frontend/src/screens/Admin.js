import React, { Component } from "react";
import { Button} from "react-bootstrap";
import { Card } from "react-bootstrap";
import {Link} from "react-router-dom";;

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailid:"",
      message:"",
    };

  }
handleOnLogout = e =>{
        localStorage.removeItem("loginEmail");
  localStorage.removeItem("auth");
  localStorage.removeItem("login_status");
          alert("Logged out successfully")
      }


    render(){
     
    return(
      <>
        <div style={{backgroundImage:'url(https://autobunny-docs.s3.ca-central-1.amazonaws.com/1233/web-content/site_slider_filename.jpg)', height: "100vh"}} >
      <div style={{display: 'flex', flexDirection: 'row', padding:"10px"}} >
      <Card style={{ width: '20rem', flex: 1, padding:"10px",marginRight:"20px",opacity:'80%'}}>
      <Card.Body>
      <Card.Title>Number of registered users</Card.Title>
      <Card.Text>
       23
      </Card.Text>
      </Card.Body>
      </Card>

      <Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px",opacity:'80%'}}>
      <Card.Body>
      <Card.Title>Number of registered AVs</Card.Title>
      <Card.Text>
      17
      </Card.Text>
      </Card.Body>
      </Card>

      <Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px",opacity:'80%'}}>
      <Card.Body>
      <Card.Title>Number of actively connected simulated AVs</Card.Title>
      <Card.Text>
      8
      </Card.Text>
      </Card.Body>
      </Card>
      </div>

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
      <Card.Title>Bookings</Card.Title>
      <Card.Text>
      Go to all the bookings
      </Card.Text>
      <Link to= "/bookings" >View Bookings</Link>
      </Card.Body>
      </Card>
      </div>

      <div style={{display: 'flex', flexDirection: 'row', padding:"10px"}} >
      <Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px",opacity:'80%'}}>
      <Card.Body>
      <Card.Title>Simulation Data</Card.Title>
      <Card.Text>
      Go to AV simulation data
      </Card.Text>
      <Link to= "/simulationData" >View Simulation Data</Link>
      </Card.Body>
      </Card>
      </div>

          <div style={{display: 'flex', flexDirection: 'row', padding:"10px"}} >


            <Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px",opacity:'80%'}}>
              <Card.Body>
                <Card.Title>View Tickets</Card.Title>
                <Card.Text>
                  View your tickets
                </Card.Text>
                <Link to= "/viewAdminTicket" >View Tickets</Link>
              </Card.Body>
            </Card>

            <Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px",opacity:'80%'}}>
              <Card.Body>
                <Card.Title>Update Ticket</Card.Title>
                <Card.Text>
                  Update service tickets
                </Card.Text>
                <Link to= "/updateAdminTicket" >Update Ticket</Link>
              </Card.Body>
            </Card>

            <Card style={{ width: '20rem', flex: 1, padding:"10px", marginRight:"20px",opacity:'80%'}}>
              <Card.Body>
                <Card.Title>Delete Ticket</Card.Title>
                <Card.Text>
                  Delete service tickets
                </Card.Text>
                <Link to= "/deleteAdminTicket" >Delete Ticket</Link>
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