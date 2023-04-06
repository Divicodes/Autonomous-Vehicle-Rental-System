import React, { Component } from "react";
import { Button} from "react-bootstrap";
import Axios from "axios";

export default class Vehicles extends Component {

    constructor(props) {
        super(props);
        // props.addExperience(data, history);
        this.state = {
            url:"",
            fields: {},
            errors: {},
            message: "",
            isSafe: false,
            tickets: [],
            ticket: {}
        }
        ;

    }

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

        Axios.get("http://ec2-54-226-153-212.compute-1.amazonaws.com:8081/ticket/reporter/"+id)
            .then(res => {
                this.setState({
                    tickets: res.data
                });
            })
        console.log(this.state.tickets[0]);
    }
 
  render() {
        
    return (
        <>
        <div style={{backgroundImage:'url(https://dxsherpa.com/wp-content/uploads/2022/04/How-to-create-a-ticket-from-an-email-in-ServiceNow.jpg)', backgroundRepeat:'no-repeat', backgroundSize:'cover', height: "100vh", display:'flex', justifyContent:'center', flexDirection:'column'}}>

            <center><h5 style={{color:'white'}}>My Service Tickets</h5></center>
            <br/>

            <table style={{ border: '1px solid black'}}>
                <thead style={{ border: '1px solid black'}}>
                <tr>
                    <th style={{color:'white'}}>Ticket ID</th>
                    <th style={{color:'white'}}>Reporter ID</th>
                    <th style={{color:'white'}}>Open Date</th>
                    <th style={{color:'white'}}>Close Date</th>
                    <th style={{color:'white'}}>Description</th>
                    <th style={{color:'white'}}>Comments</th>
                    <th style={{color:'white'}}>Status</th>
                </tr>
                </thead>
                <tbody>
                {this.state.tickets.map(item => {
                    return (
                        <tr style={{color:'white'}} key={item.ticket_id}>
                            <td style={{color:'white'}}>{ item.ticket_id }</td>
                            <td style={{color:'white'}}>{ item.reporter_id }</td>
                            <td style={{color:'white'}}>{ item.time_created }</td>
                            <td style={{color:'white'}}>{ item.time_closed }</td>
                            <td style={{color:'white'}}>{ item.description }</td>
                            <td style={{color:'white'}}>{ item.comments }</td>
                            <td style={{color:'white'}}>{ item.status }</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
      
      
   <br/>
            <a href={this.state.url}>
       <Button
       // className="landingButton"
       // onClick = {this.handleOnLogout}
       >
       Back
       </Button>
       </a>
       </div>
        {/*</Container>*/}
        {/*</div>*/}

       </>
    );
}


}
