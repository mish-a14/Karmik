import React, {Component} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Board from '../../components/Board/Board';
import './BoardPage.css'
import Logout from '../../components/Logout/Logout'

class BoardPage extends React.Component {
    
    
    state = {
        user: [],
        board: []
    }
    // const history = useHistory();

    async componentDidMount() {
        try {
            let jwt = localStorage.getItem('token')
            let fetchUserResponse = await fetch('api/users/', {headers: {'Authorization': 'Bearer ' + jwt}})
            let fetchBoardResponse = await fetch('/api/board')
            let user = await fetchUserResponse.json();
            let boardObjects = await fetchBoardResponse.json();
            let boardStrings = boardObjects.map(b => b.name)
            this.setState({ user: user, board: boardStrings})
            // let board = await fetchBoardResponse.json();
            // this.setState({user: user, board: board})
        } catch (err) {
            console.error('ERROR:', err)
        }
    }

    render() {
       
    return (
        <div className="board">
            <nav className="nav">
                <div className="logo">
                    <Link to="/home">karmik</Link>
                </div>
                <div className="links">
                    <Logout setUserBackToNull={this.props.setUserBackToNull} {...this.props}/>              
                </div>
            </nav>
            <Board user={this.state.user} />
        </div>
    )
    }
}


export default BoardPage;



