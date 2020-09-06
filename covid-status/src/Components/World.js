import React, { Component } from 'react';
import axios from 'axios';
import {Card, Accordion, Button,Table} from 'react-bootstrap';



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
                globalData: response.data,
            })
            
        })
    }

    handleSearch= (event)=> {
        let list = this.state.globalData;
        console.log('list os');
        
        console.log(list);
        
        let {value}= event.target;
        list = list.filter(function(item){
            return item.country.toString().toLowerCase().search(value.toLowerCase()) !==-1;
        });

        this.setState({
            globalData: list
        })

    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <td>Search by Country :  <input type="text" name="search" onClick={this.handleSearch}/>
                                {/* <p>{this.state.searchValue}</p> */}
                                </td>
                                {/* <td></td> */}
                            </tr>
                            <tr>
                                <td><b>Country</b></td>
                                <td><b>Total Cases</b></td>
                                <td><b>Recovered</b></td>
                                <td><b>Death</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.globalData.map((item, key)=>{
                                    return (
                                        <tr key={key}>
                                            <td>{item.country}</td>
                                            <td>{item.cases}</td>
                                            <td>{item.recovered}</td>
                                            <td>{item.deaths}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default World;