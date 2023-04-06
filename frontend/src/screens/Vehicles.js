import React, { Component } from "react";
import { Button} from "react-bootstrap";
import { Container } from "react-bootstrap";
import Axios from "axios";

export default class Vehicles extends Component {

    constructor(props) {
        super(props);
        // props.addExperience(data, history);
        this.state = {
            fields: {},
            errors: {},
            message: "",
            isSafe: false,
            vehicles: [],
            vehicle: {}
        }
        ;

    }


    componentDidMount() {
        let id = JSON.parse(localStorage.getItem('auth')).profile_id

        Axios.get("http://ec2-54-226-153-212.compute-1.amazonaws.com:8081/vehicle/owner/"+id)
            .then(res => {
                this.setState({
                    vehicles: res.data
                });
            })
        console.log(this.state.vehicles[0]);
    }
 
  render() {
        
    return (
        <>
        <div className="Register">
        <Container  className="C">
        <div>
        {/*<div style={{backgroundColor: "azure", height: "100vh", display:'flex', justifyContent:'center', flexDirection:'column'}}>*/}
        {/*    <div style={{backgroundColor: "azure", height: "50vh", width: "100vh", display:'flex', justifyContent:'center', flexDirection:'column'}}>*/}
            <label><strong>My Registered Vehicles</strong></label>
            <br/>
        <table style={{ border: '1px solid black'}}>
        <thead style={{ border: '1px solid black'}}>
          <tr>
            <th style={{color:'black', width:`500px`}}>Vehicle ID</th>
            <th style={{color:'black', width:`500px`}}>Vehicle Type</th>
            <th style={{color:'black', width:`500px`}}>Vehicle Number</th>
            <th style={{color:'black', width:`500px`}}>Capacity</th>
            {/*<th style={{color:'black'}}>Profile ID</th>*/}
          </tr>
        </thead>
        <tbody>
          {this.state.vehicles.map(vehicle => {
            return (
               <tr style={{color:'black'}} key={vehicle.vehicle_id}>
                <td style={{color:'black'}}>{ vehicle.vehicle_id}</td>
                <td style={{color:'black'}}>{ vehicle.vehicle_type}</td>
                <td style={{color:'black'}}>{ vehicle.vehicle_number}</td>
                <td style={{color:'black'}}>{ vehicle.capacity}</td>
                {/*<td style={{color:'black'}}>{ item.profileid }</td>*/}
              </tr>
            );
          })}
        </tbody>
      </table>
      
      
   <br/>
       <a href="/owner">
       <Button
       // className="landingButton"
       // onClick = {this.handleOnLogout}
       >
       Back
       </Button>
       </a>
       </div>
        </Container>
        </div>

       </>
    );
}


}
