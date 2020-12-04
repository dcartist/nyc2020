import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Jobs extends Component {
	constructor() {
		super();
		this.state = {
			jobs: [],
			results: [],
			borough: [],
		};
	}
	componentDidMount() {
		const url = `https://whispering-bayou-30290.herokuapp.com/api/property`;
		axios.get(url).then((results) => {
			// console.log(results.data)
			let arrayUniqueByKey = [...new Map(results.data.map((item) => [item['borough'], item])).values()];
			// console.log(arrayUniqueByKey)
			arrayUniqueByKey.push({ borough: 'CLEAR ALL' });
			// this.setState({jobs:results.data, results:results.data})
			this.setState({ jobs: results.data, results: results.data, borough: arrayUniqueByKey });
		});
	}

	byName = (event) => {
		event.preventDefault();
		let changedArr = this.state.results.sort((a, b) => (a.conLastName > b.conLastName ? 1 : -1));
		this.setState({ jobs: changedArr });
	};
	byId = (event) => {
		event.preventDefault();
		let changedArr = this.state.results.sort((a, b) => (a.conLicense > b.conLicense ? 1 : -1));
		this.setState({ jobs: changedArr });
	};
	byBorough = (boroughName) => {
		// console.log(boroughName)
		if (boroughName === 'CLEAR ALL') {
			this.setState({ results: this.state.jobs });
		} else {
			let newFiltered = this.state.jobs.filter((item) => item.borough === boroughName);
			this.setState({ results: newFiltered });
		}
	};
	searchByName = (event) => {
		event.preventDefault();
		if (event.target.value.length === 0) {
			this.setState({ results: this.state.jobs });
		} else {
			let newFiltered = this.state.jobs.filter(
				(item) =>
					item.address.toLowerCase().includes(event.target.value.toLowerCase()) ||
					item.conLicense.includes(event.target.value) ||
					item.borough.toLowerCase().includes(event.target.value.toLowerCase())
			);
			this.setState({ results: newFiltered });
		}
	};
	render() {
		if (this.state.jobs.length !== 0) {
			return (
				<div>
					<button onClick={this.byName}>Change to order</button>
					<button onClick={this.byId}>Change to ID</button>
					<ul className="boroughListing">
						{this.state.borough.map((item, index) => (
							<li key={index}>
								<button onClick={() => this.byBorough(item.borough)}>{item.borough}</button>
							</li>
						))}
					</ul>
					<input type="text" onChange={this.searchByName} />
					<div className="ContractorListing">
						{this.state.results.map((item, index) => (
							<div key={index}>
								<ul>
									<li>
										{item.address} {item.city}
									</li>
									<li>{item.borough}</li>
									<li>{item.conLicense}</li>
									<li>
										<Link to={'/job/' + item.jobId}>More Details</Link>
									</li>
								</ul>
							</div>
						))}
					</div>
				</div>
			);
		} else {
			return <div>Not Loaded</div>;
		}
	}
}

export default Jobs;
