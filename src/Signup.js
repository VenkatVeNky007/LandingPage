import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'



function Signup(){
    const navigate=useNavigate()
    const [signupdetails,setsignupdetails]=useState("")
   const [finaldetails,setfinaldetails]=useState("")

    const [error1,seterror1]=useState("")
    const [error2,seterror2]=useState("")
    const [error3,seterror3]=useState("")
  

const handleChange=(e)=>{
 const name=e.target.name
 const value=e.target.value
return setsignupdetails((val)=>{return{...val,[name]:value}})
}




//form validation using blur

const validfname=(e)=>{
   let fname=e.target.value
if(fname.match(/^[a-z]+$/)||fname.match(/^[A-Z]+$/)){
    seterror1("") 
    setfinaldetails(signupdetails)
}else{
   seterror1("first name should be in alphabets*") 
setfinaldetails("0")
e.target.value=""
}}

const validlname=(e)=>{
    let lname=e.target.value
    if(lname.match(/^[a-z]+$/)||lname.match(/^[A-Z]+$/)){
        seterror1("") 
        setfinaldetails(signupdetails)
    }else{
       seterror1("last name should be in alphabets*") 
    setfinaldetails("0")
    e.target.value=""
    }}

const validgmail=(e)=>{
 let   mailid=e.target.value
if(mailid.endsWith("@gmail.com")){
    seterror2("")
    setfinaldetails(signupdetails)
}else{seterror2("Invalid Mail Id*")
setfinaldetails("0")
e.target.value=""
}
}

const validnumber=(e)=>{
    let mnumber=e.target.value
if(mnumber.length==10){
    seterror2("")
    setfinaldetails(signupdetails)
    }else{seterror2("Invalid Mobile Number*")
    setfinaldetails("0")
    e.target.value=""
}}
    
const [pass,setpass]=useState("") //for cpass validation to send value
const validpass=(e)=>{
    var pass=e.target.value
if(pass.slice(0,1).match(/^[A-Z]/)&&pass.length>8&&pass.match(/[1-9]/g)){
setpass(pass)
setfinaldetails(signupdetails)
seterror3("")
}
else{seterror3("password: starts with capital letter and combonation of letters and numbers* >8")
setfinaldetails("0")
e.target.value=""}
}

const validcpass=(e)=>{

    let cpass=e.target.value
if(pass==cpass){
    seterror3("")
    setfinaldetails(signupdetails)
    }
    else{seterror3("password and confirmpassword not matched*")
setfinaldetails("0")
e.target.value=""
}}

const [signup,setsignup]=useState("SignUp")
const handlesubmit=(e)=>{
    
    e.preventDefault()
 setsignup("Loading please wait")

    if(finaldetails==0){
        
        
    }else{
       

       axios.get("https://tourismproject-gi7h.onrender.com/posts",finaldetails).then(val=>{
        let b=val.data.find((vall)=>{
          let c=finaldetails.mailid==vall.mailid
         return c
          
        })
  
        if(b!==undefined){
            setsignup("SignUp")
            alert("mail id is present please enter another mailid*")
        }else{
            axios.post("https://tourismproject-gi7h.onrender.com/posts",finaldetails)  
            alert("signed up successfully login your account now")
            navigate("/Login")
           
        }
        
       })
       
    }
    }



  
   return(<>
   <div class="signcontainer">
    <div class="signbox">
        <h1 class="ms-3 mt-3 d-inline">Tourism.Co</h1>
        <span class="text-danger"> SignUp...</span>
    <div className="signupcomponent">
        <form onSubmit={handlesubmit}>
        <input type="text" placeholder="First Name" name='firstname' className="inputt" onChange={handleChange} onBlur={validfname} required/>
        <input type="text" placeholder="Last Name" name='lastname' className="inputt" onChange={handleChange} onBlur={validlname} required /><br/>
       <span class="text-danger">{error1}</span><br/>
        <input type="text" placeholder="Mail Id" name='mailid'className="inputt" onChange={handleChange}  onBlur={validgmail} required/>
        <input type="number" placeholder="Mobile Number" name='mobilenumber' className="inputt" onChange={handleChange} onBlur={validnumber} required/><br/>
        <span class="text-danger">{error2}</span><br/>
        <input type="password" placeholder="Password" name='password' className="inputt" onChange={handleChange} onBlur={validpass} required/>
        <input type="password" placeholder="Confirm Password" name="confirmpassword" onChange={handleChange} className="inputt" onBlur={validcpass} required /><br/>
        <span class="text-danger">{error3}</span><br/>
        <input type="submit" value={signup} class="m-2"/><br/>
        </form>
        <label class="me-2 mt-3">Already have an Account: </label>
        <Link className='Link' to='/Login'><button>Login </button></Link><sub> Here.</sub>
    

    </div>

    </div>
   </div>
   
   </>) 
}

export default Signup