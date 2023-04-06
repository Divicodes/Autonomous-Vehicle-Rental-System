import React, { Component } from "react";
import { Button} from "react-bootstrap";

export default class Tickets extends Component {
 
  render() {
    const data = [
        {
           "ticketid":"1",
           "reporterid":"AB4",
           "opendate":"03-03-2019",
           "closedate":"04-03-2019",
           "desc":"Damaged headlight",
           "comments":"Resolved",
           "status":"Complete",
        },
        {
            "ticketid":"2",
            "reporterid":"AB4",
            "opendate":"12-12-2019",
            "closedate":"12-12-2019",
            "desc":"Fare",
            "comments":"Not an issue",
            "status":"Complete",
        },
        {
            "ticketid":"3",
            "reporterid":"CD6",
            "opendate":"06-05-2020",
            "closedate":"07-03-2020",
            "desc":"Damaged seats",
            "comments":"Resolved",
            "status":"Complete",
        }
     ];
        
    return (
        <>
            <div style={{backgroundImage:'url(https://dxsherpa.com/wp-content/uploads/2022/04/How-to-create-a-ticket-from-an-email-in-ServiceNow.jpg)', backgroundRepeat:'no-repeat', backgroundSize:'cover', height: "100vh", display:'flex', justifyContent:'center', flexDirection:'column'}}>
  
        <table style={{ border: '1px solid black'}}>
        <thead style={{ border: '1px solid black'}}>
          <tr>
            <th style={{color:'black'}}>Ticket ID</th>
            <th style={{color:'black'}}>Reporter ID</th>
            <th style={{color:'black'}}>Open Date</th>
            <th style={{color:'black'}}>Close Date</th>
            <th style={{color:'black'}}>Description</th>
            <th style={{color:'black'}}>Comments</th>
            <th style={{color:'black'}}>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => {
            return (
               <tr style={{color:'black'}} key={item.ticketid}>
                <td style={{color:'black'}}>{ item.ticketid }</td>
                <td style={{color:'black'}}>{ item.reporterid }</td>
                <td style={{color:'black'}}>{ item.opendate }</td>
                <td style={{color:'black'}}>{ item.closedate }</td>
                <td style={{color:'black'}}>{ item.desc }</td>
                <td style={{color:'black'}}>{ item.comments }</td>
                <td style={{color:'black'}}>{ item.status }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
      
   
       <a href="/">
       <Button
       className="landingButton"
       onClick = {this.handleOnLogout}>
       Logout
       </Button>
       </a>
       </div>

       </>
    );
}


}
