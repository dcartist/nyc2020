import React, { Component } from 'react';
import axios from "axios"
class Contact_Detail extends Component {
    constructor(){
        super()
        this.state={
            id: "",
            results:[],
            contractor:[]
        }
    }
    componentDidMount(){
        console.log(this.props.match.params.id)
        this.setState({id: this.props.match.params.id})
        const license = `https://whispering-bayou-30290.herokuapp.com/api/property/license/`+this.props.match.params.id
        console.log(license)
          axios.get(license).then(
              results=>{
                  console.log(results.data)
                  this.setState({results: results.data})
              }
          )
          axios.get(`https://whispering-bayou-30290.herokuapp.com/api/contractor/license/`+this.props.match.params.id).then(
              results => {
                  console.log(results.data[0])
                  this.setState({contractor: results.data[0]})
              }
          )
    }
    render() {
        if (this.state.contractor.length !== 0 && this.state.results.length !== 0){
            return (
                <div>
                    <h1>{this.state.contractor.conFirstName} {this.state.contractor.conLastName}</h1>
                    <h3>{this.state.id}</h3>
                    INFO
            {this.state.results.map((item, index)=>(<div key={index}><ul>
                <li>Job #{item.jobId} </li>
                <li>{item.address} </li>
                <li>{item.city}</li>
                <li>{item.jobDescr}</li>
            </ul>
                </div>))}
                </div>
            );
        } else{
            return (
                <div>
                  
                    
                </div>
            );
        }
        
    }
}

export default Contact_Detail;