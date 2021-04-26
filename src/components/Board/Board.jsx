import React from 'react';
import {Link} from 'react-router-dom';

function Board(props) {

    let myBoardsArray = props.myBoards.map( b => 
        <Board Board={b} />)

    return (
        <div className="board">
            {myBoardsArray.length > 0 ? 
            <div className="prev-boards">
            myBoardsArray
            </div>
            :
            <div className="prev-boards">
            <p className="no-boards">no vision boards yet!</p> 
            </div>   
        }
        <div className="showcase">
            {myBoardsArray.length > 0 ?
            myBoardsArray[0] 
            :
            <p></p>   
        }
        </div>
        </div>
    )
}

export default Board;