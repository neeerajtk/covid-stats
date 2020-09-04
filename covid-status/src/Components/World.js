import React, { Component } from 'react';
import axios from 'axios';
import {Card, Accordion, Button} from 'react-bootstrap';



class World extends Component {
    constructor(props){
        super(props);
        this.state= {
            globalData:{},
            data: []
        }

    }

    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries")
        .then(response => {
            console.log(response);
            this.setState({
                globalData: response.data
            })
            
        })
    }

    render() {
        return (
            
        )
    }
}

export default World;