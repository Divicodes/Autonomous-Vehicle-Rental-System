import React, { Component } from "react";
import { Button} from "react-bootstrap";
import { Container } from "react-bootstrap";
import Axios from "axios";

export default class UpdateVehicle extends Component {

    constructor(props) {
        super(props);
        // props.addExperience(data, history);
        this.state = {
            fields: {},
            errors: {},
            message: "",
            isSafe: false,
            vehicle: {},
            vehicles: []
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
        let data = {
            vehicle_id: this.state.vehicle_id,
            vehicle_type:this.state.vehicle_type,
            vehicle_number:this.state.vehicle_number,
            capacity:this.state.capacity,
            // pickup_location:"San Jose"
        };

        // console.log(data);

        Axios.post("http://ec2-54-226-153-212.compute-1.amazonaws.com:8081/vehicle/update", data).then((response) => {
            if (response.data) {
                alert(
                    "Vehicle Updated!"
                );
            }
        });
        // history.push("/user/profile");
    };

    onClick = (e) => {
        e.preventDefault();
        // console.log(this.state.hotelNumber);
        let vehicle_id = this.state.vehicle_id;

        Axios.get("http://ec2-54-226-153-212.compute-1.amazonaws.com:8081/vehicle/"+vehicle_id)
            .then(res => {
                this.setState({
                    vehicle: res.data
                });
            })
        console.log(this.state.vehicle.vehicle_id);

    };

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
                    <Container className="C">
                        <div>
                            <h3>Update your AV</h3>
                            <br/>
                            <form>
                                {/*<h3>Register your AV</h3>*/}
                                <div className="form-group">
                                    <label style={{margin: `5px`}}>Vehicle ID</label>
                                    <select style={{width: `150px`, margin: `5px`}}
                                            name='vehicle_id'
                                            onChange={this.onChange}
                                            value={this.state.fields["vehicle_id"]}
                                            required>
                                        <option value="please select" key="please select">
                                            Please Select
                                        </option>
                                        {this.state.vehicles.map((i) => {
                                            return (
                                                <option value={i.vehicle_id} key={i.vehicle_id}>
                                                    {i.vehicle_id}
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
                                  <label>Vehicle ID</label>
                                  <input
                                    name='vehicle_id'
                                    value={this.state.vehicle.vehicle_id}
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Vehicle Id"
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                    <label>Vehcile Type</label>
                                    <input
                                        name='vehicle_type'
                                        defaultValue={this.state.vehicle.vehicle_type}
                                        onChange={this.onChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Vehicle Type"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Vehicle Number</label>
                                    <input
                                        name='vehicle_number'
                                        defaultValue={this.state.vehicle.vehicle_number}
                                        onChange={this.onChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Vehicle Number"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Capacity</label>
                                    <input
                                        name = "capacity"
                                        defaultValue={this.state.vehicle.capacity}
                                        onChange={this.onChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Capacity"
                                        required
                                    />
                                </div>


                                <div className="registerButton">
                                    <Button type="submit">
                                        Update
                                    </Button>
                                </div>

                            </form>

                            <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
                                <a href="/owner">
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