import logo from './logo.svg';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lnavbar from './Navbar'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'

function App() {


  return (<>
    <BrowserRouter basename='/LandingPage'>
    <Routes>
      <Route path="/" element={<Lnavbar />}>
         <Route index element={<Home />} />
         <Route path="/Login" element={<Login />}/>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/Profile" element={<Profile />}/>
         
       
      </Route>
    </Routes>
  </BrowserRouter>

<footer class="bg-dark text-center text-white">
{/*  Grid container  */}
<h1>Get In Touch</h1>


{/* <!-- Copyright --> */}
<div class="text-center p-3" style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}>
  © 2020 Copyright:
  <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
</div>
{/* <!-- Copyright --> */}
</footer>
</> );
}

export default App;
