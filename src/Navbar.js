import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdownl from './Dropdown'

import { Outlet, Link ,useLocation} from "react-router-dom";

function Lnavbar() {
  const {state} = useLocation();
  const { id, color } = state; // Read values passed on state
  console.log(state)

    return (<>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand><Link   style={{ textDecoration: 'none', color:"black" }}to="/">Tourism.Co</Link></Navbar.Brand>

          {/* navs */}
          <Nav>
      <Nav.Item>
        <Nav.Link><Link to="/Nav2">Top Places</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="./Sai">Packages</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Book Now</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
             <Dropdownl/>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />


      </>);
  }

  export default Lnavbar
  