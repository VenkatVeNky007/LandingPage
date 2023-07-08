import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";

function Dropdownl() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Login/Signup
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item><Link to="/Login">Login</Link></Dropdown.Item>
        <Dropdown.Item ><Link to="/Signup">Signup</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdownl;