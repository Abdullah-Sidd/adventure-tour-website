import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";


function App() {
  return (
   <>
  <Router>
        <Nav/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/service">
            <Service/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </Switch>
        {/* <Footer/> */}
      </Router>
   </>
  );
}

export default App;
