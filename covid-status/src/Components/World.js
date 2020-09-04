import React, { Component } from 'react';
import axios from 'axios';
import {Card, Accordion, Button} from 'react-bootstrap';



class World extends Component {
    constructor(props){
        super(props);
        this.state= {
            globalData:[]        }

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
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <td>Country</td>
                                <td>Total Cases</td>
                                <td>Recovered</td>
                                <td>Death</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.globalData.map((item, key)=>{
                                    return (
                                        <tr>
                                            <td>{item.country}</td>
                                            <td>{item.cases}</td>
                                            <td>{item.recovered}</td>
                                            <td>{item.deaths}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default World;