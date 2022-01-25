import React, { Component } from 'react';
import { Button, Divider, Image, Transition, List } from 'semantic-ui-react'
import Logo from "./icons8-new-york-48.png"
import {Link} from "react-router-dom"
import 'semantic-ui-css/semantic.min.css'
import Modal from "../../Component/Modal/CreateContractor"

class Navigation extends Component {
  state = { visible: false }

  toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }))

  changeStyle(){
    console.log("click")
   
  }
  render() {
    const { visible } = this.state
    return (
      <div className="NavigationBar">
        <Button content={visible ? 'Hide' : 'Show'} className="NavigationMobile" 
          onClick={this.toggleVisibility}><svg viewBox="0 0 100 80" width="40" height="20">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg> </Button>  
        <Link to="/" ><img src={Logo}/><span className="Logo">NYC CONTRACTING</span></Link>
        
        <List className="NavigationDesktop" bulleted horizontal>
        <List.Item><List.Item></List.Item><Link to="/" >Home</Link></List.Item>
        <List.Item><Link to="/about">About</Link></List.Item>
        <List.Item><Link to="/contractors" >Contractors</Link></List.Item>
        <List.Item><Link to="/jobs" >Jobs</Link></List.Item>
        <Modal className="curserChange"></Modal>
        </List>
        
        <Transition visible={visible} animation='slide right' duration={500}>
        <section className="MenuButton">
          <ul>
            <li><Link to="/" onClick={this.toggleVisibility}>Home</Link></li>
            <li><Link to="/about" onClick={this.toggleVisibility}>About</Link></li> 
            <li><Link to="/contractors" onClick={this.toggleVisibility}>Contractors</Link></li> 
            <li><Link to="/jobs" onClick={this.toggleVisibility}>Jobs</Link></li>
          <li><Button content={visible ? 'Hide' : 'Show'}
          onClick={this.toggleVisibility}>close</Button></li>
          </ul>
          
        </section>
        </Transition>
      </div>
    );
  }
}

export default Navigation;