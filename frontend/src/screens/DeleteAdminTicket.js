
import React, { Component } from "react";
import { Button} from "react-bootstrap";
import { Container } from "react-bootstrap";
import Axios from "axios";

export default class DeleteAdminTicket extends Component {

    constructor(props) {
        super(props);
        // props.addExperience(data, history);
        this.state = {
            url:"",
            fields: {},
            errors: {},
            ticket_id:"",
            message: "",
            isSafe: false,
            ticket: {},
            tickets: []
        };

    }


    onChange = (e) => {
        // console.log("in on change method");
        // console.log(e.target.name);
        // console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value,
        });
    };


    onSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.hotelNumber);
        // let data = {
        let ticket_id =  this.state.ticket_id;
        // };

        // console.log(data);

        Axios.delete("http://ec2-54-226-153-212.compute-1.amazonaws.com:8081/ticket/"+ticket_id).then((response) => {
            if (response.data) {
                alert(
                    "Ticket Updated!"
                );
            }
        });
        // history.push("/user/profile");
    };

    onClick = (e) => {
        e.preventDefault();
        // console.log(this.state.hotelNumber);
        let id = this.state.ticket_id;

        Axios.get("http://ec2-54-226-153-212.compute-1.amazonaws.com:8081/ticket/"+id)
            .then(res => {
                this.setState({
                    ticket: res.data
                });
            })
        console.log(this.state.ticket.comments);

    };

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


        Axios.get("http://ec2-54-226-153-212.compute-1.amazonaws.com:8081/ticket")
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
                <div className="Register">
                    <Container className="C">
                        <div>
                            <h3>Delete Service Ticket</h3>
                            <br/>
                            <form>
                                {/*<h3>Register your AV</h3>*/}
                                <div className="form-group">
                                    <label style={{margin: `5px`}}>Ticket ID</label>
                                    <select style={{width: `150px`, margin: `5px`}}
                                            name='ticket_id'
                                            onChange={this.onChange}
                                            value={this.state.fields["ticket_id"]}
                                            required>
                                        <option value="please select" key="please select">
                                            Please Select
                                        </option>
                                        {this.state.tickets.map((i) => {
                                            return (
                                                <option value={i.ticket_id} key={i.ticket_id}>
                                                    {i.ticket_id}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    {/*<div className="registerButton">*/}
                                    <Button type="submit" style={{margin: `5px`}} onClick={this.onClick}>
                                        Show
                                    </Button>
                                    {/*</div>*/}

                                </div>
                            </form>



                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>Ticket ID</label>
                                    <input
                                        name='ticket_id'
                                        value={this.state.ticket.ticket_id}
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Ticket Id"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Reporter ID</label>
                                    <input
                                        name='reporter_id'
                                        value={this.state.ticket.reporter_id}
                                        onChange={this.onChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Reporter ID"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Time Created</label>
                                    <input
                                        name='time_created'
                                        value={this.state.ticket.time_created}
                                        onChange={this.onChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Ticket Creation Time"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Time Closed</label>
                                    <input
                                        name = "time_closed"
                                        value={this.state.ticket.time_closed}
                                        onChange={this.onChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Ticket Closure Time"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <input
                                        name = "description"
                                        value={this.state.ticket.description}
                                        onChange={this.onChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Ticket Description"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Comments</label>
                                    <input
                                        name = "comments"
                                        value={this.state.ticket.comments}
                                        onChange={this.onChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Ticket Comments"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Status</label>
                                    <input
                                        name = "status"
                                        value={this.state.ticket.status}
                                        onChange={this.onChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Ticket Status"
                                        required
                                    />
                                </div>


                                <div className="registerButton">
                                    <Button type="submit">
                                        Delete
                                    </Button>
                                </div>

                            </form>

                            <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
                                <a href={this.state.url}>
                                    <Button
                                        lassName="registerButton">
                                        Back
                                    </Button>
                                </a>
                            </div>
                        </div>


                    </Container>

                </div>

            </>
        );

    }
}