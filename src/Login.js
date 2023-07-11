import {useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'

function Login(){

    const [login,setlogin]=useState("")

    const navigate=useNavigate()

    const handlechange=(e)=>{
        const name=e.target.name
        const value=e.target.value
       return setlogin((val)=>{return {...val,[name]:value}})
              
    }

    const handlesubmit=(e)=>{
        e.preventDefault()
        axios.get("http://localhost:3000/posts").then((valu)=>{
            let b=valu.data.find((find)=>{
                return login.gmail===find.gmail&&login.password===find.password
            })
        if(b===undefined){

            alert("please enter valid gmail and password")
        }else{
            navigate('/',{ state: {...b} })
                        
        }
    })
    }
    

    return(<>
    <div class="signcontainer">
    <div class="signbox">
    <h1 class="ms-3 mt-3 d-inline">Tourism.Co</h1>
        <span class="text-danger"> Login...</span>

        <div className="signupcomponent">
        <form onSubmit={handlesubmit} >
        <input type="text" placeholder="Enter Mail Id" className="loginn" name="mailid" onChange={handlechange}/><br/>
        <input type="password" placeholder="enter password" className="loginn" name="password" onChange={handlechange}/><br/>
        <input type="submit" value="Login" class="m-2"/><br/>
        </form>
        <label class="me-2 mt-3">Don't have an Account: </label>
        <Link className='Link' to='/Signup'><button>Signup </button></Link><sub> Here.</sub>
        </div>

    </div>
    </div>
    </>)
}

export default Login
