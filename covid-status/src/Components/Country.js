import React from 'react';

import State from './State';

import {Card, Button} from 'react-bootstrap';

import axios from 'axios';


class Country extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            countryData: {}
        }
    }
    componentDidMount(){
        axios.get('https://corona.lmao.ninja/v2/countries/india').then(response=>{
            this.setState({
                countryData: response.data
            })
        })
    }

    render(){
    return (
        <div className="row"> 
            <div className="col-md-12">
                <h3>Your Location : India</h3>
            </div>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-3">
                    <Card className="badge badge-warning" style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                            <Card.Title>Total Reported Cases</Card.Title>
                            <h3>{this.state.countryData.cases}</h3>
                            <Card.Text>
                                    [Today : {this.state.countryData.todayCases}]
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col-md-3">
                    <Card className="badge badge-secondary" style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                            <Card.Title>Total Active Cases</Card.Title>
                                <h3>{this.state.countryData.active}</h3>
                            <Card.Text>
                                    [Today : {this.state.countryData.critical}]
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col-md-3">
                    <Card className="badge badge-success" style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                            <Card.Title>Total Recovered Cases</Card.Title>
                                 <h3>{this.state.countryData.recovered}</h3>
                            <Card.Text>
                                   [Today : {this.state.countryData.todayRecovered} ]
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col-md-3">
                    <Card className="badge badge-danger" style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                            <Card.Title>Total Deaths</Card.Title>
                                 <h3>{this.state.countryData.deaths}</h3>
                            <Card.Text>
                                    [Today : {this.state.countryData.todayDeaths}]
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <State/>
            </div>
        
        </div>
    )
}
}

export default Country;
