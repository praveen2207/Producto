import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="dark">
          <NavbarBrand href="/" className="mr-auto" style = {{color:"white",fontWeight:"bold"}}>Producto</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}