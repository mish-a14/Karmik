import React from 'react';
import {Link} from 'react-router-dom';

function Board(props) {

    let myBoardsArray = props.myBoards.map( b => 
        <Board Board={b} />)

    return (
        <div className="board">
                    <div className="the-boards">
            {myBoardsArray.length > 0 ? 
            <div className="prev-boards">
            <>
            myBoardsArray;
            <div className="btn-div">
            <button>+</button>
            </div>
            </>
            </div>
            :
            <div className="prev-boards">
            <>
            <p className="no-boards">hmm...no vision boards yet!</p> 
            <div className="btn-div">
            <button>+</button>
            </div>
            </>
            </div>   
        }
        <div className="showcase">
            {myBoardsArray.length > 0 ?
            <>
            myBoardsArray[0] 
            <div className="btn-div">
            <button>+</button>
            </div>
            </>
            :
            <>
            <p>looking to get started? popular board topics include: career, travel, and lifestyle.</p>   
            <div className="btn-div">
            <button>+</button>
            </div>
            </>
        }
        </div>
        </div>
        </div>
    )
}

export default Board;