import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import './App.css';
import Header from './Components/Header';
import Country from './Components/Country';
import World from './Components/World';

function App() {
  return (
    <div className="container-fluid">
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/"><Country/></Route>
        <Route path="/country"><Country/></Route>
        <Route path="/world"><World/></Route>
      </Switch>
    </BrowserRouter>
    </div>    
  );
}

export default App;
