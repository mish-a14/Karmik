import React from 'react'
import {useHistory, Link} from 'react-router-dom';


function LogoutButton() {
    // const history = useHistory();
    localStorage.clear("token")
    // history.push('/home')
}

function Logout(props){
return (
    <>
    <button onClick={LogoutButton}><Link to="/home">Logout</Link></button>
    </>
)
}

export default Logout; 