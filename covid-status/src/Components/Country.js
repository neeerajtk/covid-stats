import React from 'react';

import State from './State';

import {Card, Button} from 'react-bootstrap';



class Country extends React.Component {
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
                            <h3>2000</h3>
                            <Card.Text>
                                    [Today : 234]
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col-md-3">
                    <Card className="badge badge-secondary" style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                            <Card.Title>Total Active Cases</Card.Title>
                            <h3>2000</h3>
                            <Card.Text>
                                    [Today : 234]
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col-md-3">
                    <Card className="badge badge-success" style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                            <Card.Title>Total Recovered Cases</Card.Title>
                            <h3>2000</h3>
                            <Card.Text>
                                    [Today : 234]
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col-md-3">
                    <Card className="badge badge-danger" style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                            <Card.Title>Total Deaths</Card.Title>
                            <h3>2000</h3>
                            <Card.Text>
                                    [Today : 234]
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
