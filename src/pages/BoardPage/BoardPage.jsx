import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Board from '../../components/Board/Board';
import './BoardPage.css'
import Logout from '../../components/Logout/Logout'

class BoardPage extends React.Component {
    
    
    state = {
        myBoards: [],
        // user: null
    }


    async componentDidMount() {
        try {
            let jwt = localStorage.getItem('token')
            let fetchBoardsResponse = await fetch('api/users/', {headers: {'Authorization': 'Bearer ' + jwt}})
            let boards = await fetchBoardsResponse.json();
            this.setState({myBoards: boards})
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
                    <Logout />              
                </div>
            </nav>
            <Board myBoards={this.state.myBoards} />
        </div>
    )
    }
}


export default BoardPage;



