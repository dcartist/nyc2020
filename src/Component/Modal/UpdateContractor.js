import React, { Component } from 'react';
import { Button, Header, Icon, Modal, Form, Message, List } from 'semantic-ui-react';
import axios from 'axios';
class UpdateContractor extends Component {
	constructor(props) {
		super();
		this.state = {
			open: false,
			conLicense: props.conLicense,
			conFirstName: props.conFirstName,
			conLastName: props.conLastName,
		};
	}

	show = () => this.setState({ open: true });
	handleConfirm = () => this.setState({ open: false });
	handleCancel = () => this.setState({ open: false });
	setOpen = (newState) => this.setState({ open: newState });

	handleConFirstName = (evt) => {
		evt.preventDefault();
		this.setState({
			conFirstName: evt.target.value,
		});
	};
	handleConLastName = (evt) => {
		evt.preventDefault();
		this.setState({
			conLastName: evt.target.value,
		});
	};
	handleconLicense = (evt) => {
		evt.preventDefault();
		this.setState({
			conLicense: evt.target.value,
		});
	};

	handleSubmit = (evt) => {
		evt.preventDefault();
		console.log(this.state.conLicense);
		console.log(this.state.conLicense);
		axios
			.put(`${process.env.REACT_APP_API_PUT}${this.props._id}`, {
				conLicense: this.state.conLicense,
				conFirstName: this.state.conFirstName,
				conLastName: this.state.conLastName,
			})
			.then((results) => {
				this.setState({ open: false });
				window.location.reload(false);
			});
	};

	render() {
		return (
			<Modal
				onClose={() => this.setOpen(false)}
				onOpen={() => this.setOpen(true)}
				open={this.state.open}
				size="tiny"
				trigger={
					<Button fluid color="grey">
						Update Contractor Info
					</Button>
				}
			>
				<Modal.Header>Update Contractor Info</Modal.Header>
				<Modal.Content>
					<Modal.Description>
						<Form onSubmit={(evt) => this.handleSubmit(evt)}>
							<Form.Field>
								<label>Contractor First Name: </label>
								<input
									focus
									name="conFirstName"
									type="text"
									placeholder={this.props.conFirstName}
									onChange={(evt) => this.handleConFirstName(evt)}
								/>
							</Form.Field>
							<Form.Field>
								<label>Contractor Last Name: </label>
								<input
									focus
									name="conLastName"
									type="text"
									placeholder={this.props.conLastName}
									onChange={(evt) => this.handleConLastName(evt)}
								/>
							</Form.Field>
							<Form.Field>
								<label>Contractor License: </label>
								<p>
									{this.props.conLicense}
									<br />
									<Message info compact size="tiny">
										Contractor License cannot be changed
									</Message>
								</p>
								<input
									transparent
									disabled
									hidden
									name="conLicense"
									type="text"
									placeholder={this.props.conLicense}
									value={this.props.conLicense}
									onChange={(evt) => this.handleconLicense(evt)}
								/>
							</Form.Field>
							<Button type="submit">Ok</Button>
							<Button onClick={() => this.setOpen(false)}>Cancel</Button>

							{/* <input name="" type="submit" onClick={() => this.setOpen(false)} /> */}
						</Form>
					</Modal.Description>
				</Modal.Content>
			
			</Modal>
		);
	}
}

export default UpdateContractor;
