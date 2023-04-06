import React, { Component } from "react";
import { Button} from "react-bootstrap";
import Axios from "axios";

export default class Stats extends Component {

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

                <iframe width="600" height="450"
                        src="https://datastudio.google.com/embed/reporting/adcea8bc-4ffb-46bf-9c76-95abe3ec487e/page/5P4sC"
                        frameBorder="0" style="border:0" allowFullScreen></iframe>


            </>
        );
    }


}
