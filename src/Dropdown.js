import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from "react-router-dom";
import {useState} from 'react'

function Dropdownl({state}) {

const navigate=useNavigate()


   if(state==null){
                    }
  else{
   var b=state.firstname+" "+state.lastname
   var hid={display:"none"}
   
  }

  const handleclick=()=>{
  navigate("/Profile",{state:{...state}})
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" >
        {b||"login/signup"}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item  style={state==null?{display:"none"}:{display:"block"}} onClick={handleclick}>Profile</Dropdown.Item>
        <Dropdown.Item ><Link to="/Login">{state==null?"login":"Logout"}</Link></Dropdown.Item>
        <Dropdown.Item style={hid}><Link to="/Signup">Signup</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdownl;