import React from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends React.Component {
    render() {
        return(
            <Navbar style={{ backgroundColor: 'darkorange', justifyContent:"space-evenly" , display: 'flex'}}>
  <Navbar.Brand href="#">My Todo List</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <div style={{display: 'flex', justifyContent: 'center ',alignItems: 'center'}}>
      {/* <Nav.Link  href="https://www.youtube.com">Home</Nav.Link> */}
      {/* <Nav.Link href="https://www.youtube.com">About</Nav.Link> */}
      {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown> */}
      {/* <Nav.Link href="https://www.youtube.com">
        Add Todo
      </Nav.Link> */}
      </div>
    </Nav>
    {/* <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>
        )
    }
}
 export default Header;