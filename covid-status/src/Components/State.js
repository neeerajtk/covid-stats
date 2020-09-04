import React, { Component } from 'react';
import axios from 'axios';
import {Card, Accordion, Button, Table} from 'react-bootstrap';

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
            this.setState({stateData: response.data})
        })
    }

    render() {

        let keys = Object.keys(this.state.stateData);
        console.log(keys);
        
        return (
            <div className="row">
                <div className="col-md-12">
                <Accordion>

                    {
                        keys.filter(item => item!='State Unassigned').map((item,key)=>{
                            let districts = this.state.stateData[item].districtData;
                            let district_keys = Object.keys(districts);

                            let total_active = 0;
                            let total_confirmed = 0;
                            let total_deaths = 0;
                            let total_recover = 0;


                            let district_list = [];
                            for(let x in districts){
                                total_active += districts[x].active;
                                total_confirmed += districts[x].confirmed;
                                total_deaths += districts[x].deceased;
                                total_recover += districts[x].recovered;
                                let ob = districts[x];
                                ob["district_name"] = x;
                                district_list.push(ob);
                             }
                             console.log(district_list);
                             

                            return(
                                <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey={key}>
                                  <span className="btn-dark p-1 mr-2">{item}</span>   - Total cases - {total_confirmed} Active - {total_active} Recovered - {total_recover} Death - {total_deaths}
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={key}>
                                <Card.Body>
                                    {/* <table className="table table-striped table-bordered">   */}
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <td>District Name</td>
                                                <td>Total Reported Cases</td>
                                                <td>Total Active Cases</td>
                                                <td>Total Recovered Cases</td>
                                                <td>Total Deaths</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                district_list.filter(item => item!='State Unassigned').map((item,key)=> {
                                                    return(
                                                        <tr key={key}>
                                                            <td>{item.district_name}</td>
                                                            <td>{item.confirmed}</td>
                                                            <td>{item.active}</td>
                                                            <td>{item.recovered}</td>
                                                            <td>{item.deceased}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    {/* </table> */}
                                    </Table>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            )
                        }) 
                    }

                    

                </Accordion>
                </div>
                
            </div>
        )
    }
}
export default State;