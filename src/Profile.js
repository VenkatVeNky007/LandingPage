import { useLocation } from "react-router-dom"

function Profile(){
    const {state} = useLocation();
   const prof=state
    
    return(<>
    <div className="profilecontainer">
        <div className="profilemain">
            <h1>Profile: </h1>
            <div>
                <p>Name: {prof.firstname+" "+prof.lastname||" "} </p>
                <p>Mobile Number: {prof.mobilenumber||" "}</p>
                <p>MailId: {prof.mailid||" "}</p>
            </div>

        </div>


    </div>
    </>)
}

export default Profile