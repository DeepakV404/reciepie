import React, { Component } from 'react';
// import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './menu';
import './App.css';


class App extends Component{
  render(){
    return (
      <div>
        <Navbar dark color="primary" >
          <div className="container">
            <NavbarBrand href="/">Reciepies by Deepak</NavbarBrand>
          </div>
        </Navbar>
        <Menu/>
      </div>
    )
  }
}
export default App;