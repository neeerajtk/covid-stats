import React, { Component } from 'react';
import axios from 'axios';

class State extends Component {

    constructor(props){
        super(props);
        this.state = {
            stateData : {}
        }
    }
    componentDidMount(){
        axios.get('https://api.covid19india.org/state_district_wise.json')
        .then(response =>{
            console.log(response.data);
            this.setState(response.data)
        })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
export default State;