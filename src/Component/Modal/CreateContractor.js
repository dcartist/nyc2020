import React, { Component } from 'react';
import { Button, Header, Icon, Modal, Form, Message } from 'semantic-ui-react';
import axios from 'axios';
class CreateContractor extends Component {
	constructor() {
		super();
		this.state = {
			open: false,
			conLicense: "",
			conFirstName: "",
			conLastName: "",
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
        console.log(this.state.conLicense)
		axios.post(`${process.env.REACT_APP_API_POST}`, {
			conLicense: this.state.conLicense,
			conFirstName: this.state.conFirstName,
			conLastName: this.state.conLastName,
		});
		this.setState({ open: false })
	};

	render() {
		return (
			<Modal
				onClose={() => this.setOpen(false)}
				onOpen={() => this.setOpen(true)}
				open={this.state.open}
				size = 'tiny'
				trigger={<Button>Create Contractor</Button>}
			>
				<Modal.Header>Create Contractor</Modal.Header>
				<Modal.Content>
					<Modal.Description>
						<Form onSubmit={(evt) => this.handleSubmit(evt)}>
							
                            <Form.Field>
								<label>Contractor First Name: </label>
								<input
									name="conFirstName"
									type="text"
									onChange={(evt) => this.handleConFirstName(evt)}
								/>
                                </Form.Field>
                                <Form.Field>
								<label>Contractor Last Name: </label>
								<input name="conLastName" type="text" onChange={(evt) => this.handleConLastName(evt)} />
                                </Form.Field>
                                <Form.Field>
								<label>Contractor License: </label>
								<input name="conLicense" type="text" onChange={(evt) => this.handleconLicense(evt)} />
                                </Form.Field>
                                <Button type="submit"  >
						Ok
					</Button>
                                <Button onClick={() => this.setOpen(false)} >
						Cancel
					</Button>
					
								{/* <input name="" type="submit" onClick={() => this.setOpen(false)} /> */}
						
						</Form>
					</Modal.Description>
				</Modal.Content>
				{/* <Modal.Actions>
					<Button onClick={() => this.setOpen(false)}>Cancel</Button>
					
				</Modal.Actions> */}
			</Modal>
		);
	}
}

export default CreateContractor;
