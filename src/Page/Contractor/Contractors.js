import React, { Component } from 'react';
import axios from "axios"
import {Dimmer, Loader, Form, Segment, Input, Button} from "semantic-ui-react"
import {Link} from "react-router-dom"
class Contractors extends Component {
    constructor(){
        super()
        this.state = {
            contractors:[],
            results:[]
        }
    }
    componentDidMount(){
        const url = `https://whispering-bayou-30290.herokuapp.com/api/contractor/`;
        axios
        .get(url)
        .then( results=>{
            let arrayUniqueByKey = [...new Map(results.data.map(item =>
                [item["conLicense"], item])).values()];
            this.setState({contractors:arrayUniqueByKey, results:arrayUniqueByKey})
    })
    }

    byName =(event) => {
        event.preventDefault()
        let changedArr = this.state.results.sort((a, b) => (a.conLastName > b.conLastName) ? 1 : -1)
        this.setState({contractors: changedArr})

    }
    byId =(event) => {
        event.preventDefault()
        let changedArr = this.state.results.sort((a, b) => (a.conLicense > b.conLicense) ? 1 : -1)
        this.setState({contractors: changedArr})

    }
    searchByName = (event) => {
        event.preventDefault()
        if (event.target.value.length == 0){
          this.setState({results: this.state.contractors})  
        } else{
            let newFiltered = this.state.contractors.filter(item => item.conFirstName.toLowerCase().includes(event.target.value.toLowerCase()) || item.conLastName.toLowerCase().includes(event.target.value.toLowerCase()) || item.conLicense.includes(event.target.value))
            this.setState({results: newFiltered}) 
        }
    }

    render() {
        if (this.state.contractors.length !== 0){
            return (<div className="ListingSection">
                <section>
                <Form>
               <Form.Field className="SearchBar" >
                   <lable>Search Contractor:</lable>
                   <Input type="text" onChange={this.searchByName} icon='search' placeholder='Enter Contractor Name or ID' size='large' className="JobSearchInput" />
                </Form.Field>
                </Form>
                <div>
                <Button onClick={this.byName}>Change to order</Button>
                <Button onClick={this.byId}>Change to ID</Button>
                </div>
                </section>
              
                <div className="ContractorListing">
                    {this.state.results.map(item=>(<Segment>
                        <ul>
                    <li className="ContractorListingName">{item.conFirstName} {item.conLastName}</li>
                    <li>ID: {item.conLicense}</li>
                    <li><Link to={"/contractor/"+item.conLicense}>More info</Link></li>
                        </ul>
                        </Segment>))}
                
                </div>
                </div>
            );
        }else {
            return (
                <Dimmer active inverted>
      <Loader size='big' inverted>Loading</Loader>
    </Dimmer>
                    
            );
        }
       
    }
}

export default Contractors;