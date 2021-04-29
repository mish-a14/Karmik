import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import Board from "../../components/Board/Board";
import "./BoardPage.css";
import Logout from "../../components/Logout/Logout";

class BoardPage extends React.Component {
  state = {
    board: [],
    display: []
  };
  // const history = useHistory();

  updateBoards = (allBoards) => {
    this.setState({ board: allBoards})
  }

  async componentDidMount() {
    try {
      let jwt = localStorage.getItem("token");
      let fetchBoardResponse = await fetch("/api/board/", {
        headers: { Authorization: "Bearer " + jwt }
      });
      let boardObjects = await fetchBoardResponse.json();
      this.setState({ board: boardObjects });
    } catch (err) {
      console.error("ERROR:", err);
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
            <Logout
              setUserBackToNull={this.props.setUserBackToNull}
              {...this.props}
            />
          </div>
        </nav>
        <Board updateBoards={this.updateBoards} board={this.state.board} display={this.state.display} />
      </div>
    );
  }
}

export default BoardPage;
