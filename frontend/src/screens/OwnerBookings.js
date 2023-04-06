import React, { Component } from "react";
import { Button} from "react-bootstrap";
import Axios from "axios";

export default class OwnerBookings extends Component {

    constructor(props) {
        super(props);
        // props.addExperience(data, history);
        this.state = {
            fields: {},
            errors: {},
            message: "",
            isSafe: false,
            bookings: [],
            booking: {}
        }
        ;

    }


    componentDidMount() {
        let id = JSON.parse(localStorage.getItem('auth')).profile_id

        Axios.get("http://ec2-54-226-153-212.compute-1.amazonaws.com:8081/booking/owner/"+id)
            .then(res => {
                this.setState({
                    bookings: res.data
                });
            })
        console.log(this.state.bookings[0]);
    }
 
  render() {
        
    return (
        <>
            <div style={{backgroundImage:'url(https://www.geico.com/living/wp-content/uploads/e6Kaz0a-Imgur.gif)', backgroundRepeat:'no-repeat', backgroundSize:'cover', height: "100vh", display:'flex', justifyContent:'center', flexDirection:'column'}}>
  
        <table style={{ border: '1px solid black'}}>
        <thead style={{ border: '1px solid black'}}>
          <tr>
            <th style={{color:'black'}}>Booking ID</th>
            <th style={{color:'black'}}>Vehicle ID</th>
            <th style={{color:'black'}}>Owner ID</th>
            <th style={{color:'black'}}>Rider ID</th>
            <th style={{color:'black'}}>Pickup</th>
            <th style={{color:'black'}}>Dropoff</th>
             <th style={{color:'black'}}>Amount</th>
            <th style={{color:'black'}}>Ride Status</th>
          </tr>
        </thead>
        <tbody>
          {this.state.bookings.map(item => {
            return (
               <tr style={{color:'black'}} key={item.booking_id}>
                <td style={{color:'black'}}>{ item.booking_id}</td>
                <td style={{color:'black'}}>{ item.vehicle_id}</td>
                <td style={{color:'black'}}>{ item.owner_id}</td>
                <td style={{color:'black'}}>{ item.rider_id}</td>
                <td style={{color:'black'}}>{ item.pickup_location}</td>
                <td style={{color:'black'}}>{ item.dropoff_location}</td>
                <td style={{color:'black'}}>{ item.cost}</td>
                <td style={{color:'black'}}>{ item.ride_status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
      
   
       <a href="/owner">
       <Button
       className="landingButton"
       // onClick = {this.handleOnLogout}
       >
       Back
       </Button>
       </a>
       </div>

       </>
    );
}


}
