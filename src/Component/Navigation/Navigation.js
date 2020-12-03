import React, { Component } from 'react';
import { Button, Divider, Image, Transition } from 'semantic-ui-react'
import {Link} from "react-router-dom"
import 'semantic-ui-css/semantic.min.css'

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
        <Button content={visible ? 'Hide' : 'Show'}
          onClick={this.toggleVisibility}><svg viewBox="0 0 100 80" width="40" height="20">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg></Button> NYC CONTRACTOR

        <ul className="NavigationDesktop">
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about">About</Link></li> 
            <li><Link to="/contractors" >Contractors</Link></li>
          </ul>

        <Transition visible={visible} animation='slide right' duration={500}>
        <section className="MenuButton">
          <ul>
            <li><Link to="/about" onClick={this.toggleVisibility}>About</Link></li> 
            <li><Link to="/" onClick={this.toggleVisibility}>Home</Link></li>
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