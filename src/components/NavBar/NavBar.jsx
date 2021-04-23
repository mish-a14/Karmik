import {Link} from 'react-router-dom'

export default function NavBar(props) {
    return(

        <div>
        {props.user ? 
            <div>secret?</div>
            :
            <div>Login | 
                <Link to='/signup'>
                Signup 
                </Link>
                </div>
        }
        </div>
    )
}