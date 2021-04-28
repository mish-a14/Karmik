import React from 'react'
import {Link} from 'react-router-dom';




function Logout(props){

    let LogoutButton = () => {
        localStorage.clear("token")
        props.setUserBackToNull()
        props.history.push('/home')
    }

return (
    <>
    <button onClick={LogoutButton}>logout</button>
    </>
)
}

export default Logout; 