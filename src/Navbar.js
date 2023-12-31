import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdownl from './Dropdown'

import { Outlet, Link ,useLocation,useNavigate} from "react-router-dom";

function Lnavbar() {
 const navigate=useNavigate()
  const {state} = useLocation();


  const handleclick=()=>{

    if(state==null){
      navigate("/")
    }else{
navigate("/",{state:{...state}})}
  }

 


    return (<>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="homebutton" onClick={handleclick}>Home</Navbar.Brand>

          {/* navs */}
          <Nav className='navv'>
      <Nav.Item>
        <Nav.Link><Link to="/Toplaces">Top Places</Link></Nav.Link>
      </Nav.Item>
            
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
         {state?"":"Login to avail services"}
        </Nav.Link>
      </Nav.Item>
    </Nav>
          <Navbar.Toggle  />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
             <Dropdownl state={state}/>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />


      </>);
  }

  export default Lnavbar
  