import React from "react";
import { Link } from "react-router-dom";
import Picture from "../Picture/Picture.jsx";
import Showcase from "../Showcase/Showcase";
import EditBoard from "../EditBoard/EditBoard";
import "./Board.css";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

class Board extends React.Component {
  state = {
    selectedName: "",
    selectedAvatar: "",
    selectedId: "",
    userIsEdit: false,
    user: ""
  };

  handleDelete = async board => {
    try {
      let jwt = localStorage.getItem("token");
      let fetchResponse = await fetch("/api/board/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwt
        },
        body: JSON.stringify({
          board: board
        })
      });
      let allBoards = await fetchResponse.json()
      console.log(allBoards)
      this.props.updateBoards(allBoards)
      console.log("processed to the end")
    } catch (err) {
      console.error("Error:", err);
    }
  }

  showBoard = (name, avatar) => {
    this.setState({
      selectedName: name,
      selectedAvatar: avatar,
      
      userIsEdit: false,
    })
    };

  handleEdit = (name, avatar, id) => {
    this.setState({
     userIsEdit: true,
     selectedName: name,
     selectedId: id,
     selectedAvatar: avatar,
    })
  }

  render() {
    return (
      <div className="board">
        <div className="the-boards">
          {this.props.board.length > 0 ? (
            <div className="prev-boards">
              <>
                {this.props.board.map(b => (
                  <div className="panel">
                    {" "}
                    {b.name} <img src={b.pictures} />
                    <div className="btns">
                    <button onClick={() => this.showBoard(b.name, b.pictures)}>
                        <img src="https://i.imgur.com/5WSHwlI.png" />
                      </button>
                      <button
                     onClick={() => {
                       this.handleEdit(b.name, b.pictures, b._id);
                     }}
                   >
                        <img src="https://i.imgur.com/rd5PUNr.png" />
                      </button>
                      <button
                     onClick={() => {
                       this.handleDelete(b._id);
                     }}
                   >
                        <img src="https://i.imgur.com/XXoPWe5.png" />
                      </button>
                    </div>
                  </div>
                ))}
                <div className="btn-div">
                  <button>
                    <Link to="/boardform">+</Link>
                  </button>
                </div>
              </>
            </div>
          ) : (
            <div className="prev-boards">
              <>
                <div className="btn-div">
                  <button className="panel-btn">
                    <Link to="/boardform">+</Link>
                  </button>
                </div>
              </>
            </div>
          )}
          {this.state.userIsEdit ? (
            <EditBoard name={this.state.selectedName} pictures={this.state.selectedAvatar} id={this.state.selectedId}/>
          ) : (
            <Showcase name={this.state.selectedName} avatar={this.state.selectedAvatar} />
          )}
        </div>
      </div>
    );
  }
}

export default Board;
