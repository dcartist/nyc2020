
import './App.css';
import axios from "axios"
import Navigation from "./Component/Navigation/Navigation"
import Contractor from "./Page/Contractor/Contractors"
import ContractorInfo from "./Page/Contractor/Contact_Detail"
import Job from "./Page/Job/Jobs"
import {Route, Link, Switch, Redirect} from "react-router-dom";
import React, { Component } from 'react';
import Home from "./Page/Home/Home"
import About from "./Page/About/About"
import Contractors from "./Page/Contractor/Contractors"

class App extends Component {
  constructor(){
    super()
    this.state={
      contractorId: "",
      jobId: ""

    }
  }
  componentDidMount(){
    // https://whispering-bayou-30290.herokuapp.com
    axios.get("https://whispering-bayou-30290.herokuapp.com").then(console.log("loading Heroku"))
  }
  setjobId = (jobId) => {
    this.setState({jobId: jobId});
  }
  setContractInfo = (id) => {
    this.setState({contractorId: id});
  }

  render() {
    return (
      <div className="AppBase">
        <Navigation></Navigation>
        <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contractors" exact component={Contractors}/>
      <Route path="/jobs" exact component={Job}/>
      <Route path="/contractor/:id" render={(props)=> <ContractorInfo  setContractInfo={this.id} {...props} {...this.state}/>}/>
      </div>
    );
  }
}

export default App;