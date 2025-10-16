import React, { Component } from 'react';
import axios from 'axios';
import Map from '../../Component/Map/Map';
import { Dimmer, Loader, Header, Segment, Icon, Button } from 'semantic-ui-react';
class Job_Detail extends Component {
	constructor() {
		super();
		this.state = {
			job: [],
			results: [],
		};
	}
	componentDidMount() {
		
		const url = `https://whispering-bayou-30290.herokuapp.com/api/job/id/` + this.props.match.params.jobId;
		axios.get(url).then((results) => {
			this.setState({ results: results.data });
			console.log(results.data);
		});
    }
    
    goBack = ()=>{
        this.props.history.goBack();
    }
	render() {
		if (this.state.results.length !== 0 && this.state.results[0].contractor && this.state.results[0].owner && this.state.results[0].property) {
			return (
				<div>
                    <Segment inverted color='grey'> <Icon name="backward" size="large"onClick={this.goBack}></Icon> 
                        <Button onClick={this.goBack} color='grey'>Previous Page</Button></Segment>

					{ this.state.results.length !== 0 && this.state.results.map((item, index) => (
						<div key={index} className="JobDetail">

                            <Segment.Group raised>
							<Header as="h3" attached="top" block>
								Contractor
							</Header>
							<Segment attached color='blue'>
								Name: {item.contractor.conFirstName ?? item.contractor.conFirstName.charAt(0).toUpperCase()+item.contractor.conFirstName.slice(1).toLowerCase()} {item.contractor.conLastName.charAt(0).toUpperCase()+item.contractor.conLastName.slice(1).toLowerCase() || 'n/a'}
							</Segment>
							<Segment attached>ID: {item.contractor.conLicense}</Segment>
                            </Segment.Group>
                            <Segment.Group raised>
                            <Header as="h3" attached="top" block>
								Owner
							</Header>
							<Segment attached color='blue'>Owner Name: {item.owner.ownFirstName} {item.owner.ownLastName}</Segment>
							<Segment attached >Business Name: {item.owner.ownBusinessName}</Segment>
							<Segment attached>Owner Type: {item.owner.ownType}</Segment>
                            </Segment.Group>
                            <Segment.Group raised>
                            <Header as="h3" attached="top" block>
								Property
							</Header>
							<Segment attached color='blue' raised>Address: {item.property.address}</Segment>
							<Segment attached>City: {item.property.city}</Segment>
							<Segment attached>Borough: {item.property.borough}</Segment>
							<Segment attached>Property Type: {item.property.propType}</Segment>
							<Segment attached>Property Description: {item.property.jobDescr}</Segment>
                            {/* <Segment><Map newLocation={item.property.address} className="Map" /></Segment> */}
                            </Segment.Group>
							
						</div>
					))}
				</div>
			);
		} else {
			return <Dimmer active inverted>
			<Loader size='big' inverted>Loading</Loader>
		  </Dimmer>;
		}
	}
}

export default Job_Detail;
