import React from 'react';
import {Card, Button} from 'react-bootstrap';


export default function Country() {
    return (
        <div className="row"> 
            <div className="col-md-12">
                <h3>India</h3>
            </div>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        
        </div>
    )
}
