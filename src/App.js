// import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = ()=>{

  let apiKey = process.env.REACT_APP_NEWS_API;

    return (
      <div>
        <Router>

        <Navbar/>
        <Switch>
        <Route exact path='/'><News key="general" apiKey={apiKey} pageSize={6} country="in" category="general"/></Route>
        <Route exact path='/business'><News key="business" apiKey={apiKey} pageSize={6} country="in" category="business"/></Route>
        <Route exact path='/entertainement'><News key="entertainment" apiKey={apiKey} pageSize={6} country="in" category="entertainment"/></Route>
        <Route exact path='/general'><News key="general" apiKey={apiKey} pageSize={6} country="in" category="general"/></Route>
        <Route exact path='/health'><News key="health" apiKey={apiKey} pageSize={6} country="in" category="health"/></Route>
        <Route exact path='/sports'><News key="sports" apiKey={apiKey} pageSize={6} country="in" category="sports"/></Route>
        <Route exact path='/science'><News key="science" apiKey={apiKey} pageSize={6} country="in" category="science"/></Route>
        <Route exact path='/sports'><News key="sports" apiKey={apiKey} pageSize={6} country="in" category="sports"/></Route>
        <Route exact path='/technology'><News key="technology" apiKey={apiKey} pageSize={6} country="in" category="technology"/></Route>
        </Switch>

        </Router>
        {/* <News key="" apiKey={apiKey} pageSize={6} country="in" category="business"/> */}
      </div>
    )
  
}

export default App;
