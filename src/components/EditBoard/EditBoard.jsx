import React from "react";
import { Link } from "react-router-dom";
import Picture from "../Picture/Picture.jsx";
import Showcase from "../Showcase/Showcase";
import "./EditBoard.css";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

class EditBoard extends React.Component {
  state = {
    name: `${this.props.name}`,
    pictures: `${this.props.pictures}`
  };

  updateBoards = allBoards => {
    this.setState({ board: allBoards });
  };

  handleChange = evt => {
    console.log(evt);
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleOnModify = async evt => {
    evt.preventDefault();
    try {
      let jwt = localStorage.getItem("token");
      let fetchResponse = await fetch("/api/board/change", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwt
        },
        body: JSON.stringify({
          id: this.props.id,
          name: this.state.name,
          pictures: this.state.pictures
        })
      });
      let serverResponse = await fetchResponse.json();
      console.log("Success:", serverResponse);
      console.log(serverResponse);
      this.setState({ name: "" });
      let allBoards = await fetchResponse.json();
      this.props.updateBoards(allBoards);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  render() {
    return (
      <div className="showcase">
        change word:{" "}
        <input
          name="name"
          // placeholder={this.props.name}
          value={this.state.name}
          onChange={this.handleChange}
        />
        change pictures:{" "}
        <input
          name="pictures"
          // placeholder={this.props.pictures}
          value={this.state.pictures}
          onChange={this.handleChange}
        />
        <button
          onClick={evt => {
            this.handleOnModify(evt);
          }}
        >
          Enter
        </button>
      </div>
    );
  }
}

export default EditBoard;
