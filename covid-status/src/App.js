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
    <BrowserRouter>
        <Header/>

      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/country">Country</Link> </li>
          <li><Link to="/world">World</Link></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/"><Country/></Route>
        <Route path="/country"><Country/></Route>
        <Route path="/world"><World/></Route>
      </Switch>
    </BrowserRouter>

    
  );
}

export default App;
