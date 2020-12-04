import React, { Component } from 'react';
import axios from "axios"
import { Header, Segment, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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
      
    goBack = ()=>{
        this.props.history.goBack();
    }
    render() {
        if (this.state.contractor.length !== 0 && this.state.results.length !== 0){
            return (
                <div>
                    <Segment inverted color='grey'> <Icon name="backward" size="large"onClick={this.goBack}></Icon> 
                        <Button onClick={this.goBack} color='grey'>Previous Page</Button></Segment>
                    <div className="ContractorDetail">
                    
                        <Segment.Group raised>
							<Header as="h3" attached="top" block>
								Contractor
							</Header>
							<Segment attached color='blue'>
								Name: {this.state.contractor.conFirstName.charAt(0).toUpperCase()+this.state.contractor.conFirstName.slice(1).toLowerCase()} {this.state.contractor.conLastName.charAt(0).toUpperCase()+this.state.contractor.conLastName.slice(1).toLowerCase()}
							</Segment>
							<Segment attached>ID: {this.state.id}</Segment>
                            </Segment.Group>
                    
                            <Header as='h2'>Jobs:</Header>
            {this.state.results.map((item, index)=>(<div key={index}>
                
                <Segment.Group raised>
                            <Header as="h4" attached="top" block>
								Job #{item.jobId}
							</Header>
							<Segment attached color='blue' raised>Address: {item.address}</Segment>
							<Segment attached>City: {item.city}</Segment>
							<Segment attached><Link to={'/job/' + item.jobId}>More Details</Link></Segment>
							{/* <Segment attached>Property Description: {item.jobDescr}</Segment> */}
                            </Segment.Group>
                
                </div>))}
                </div>
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