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
    name: "",
    pictures: "",
  };

  handleChange = evt => {
    console.log(evt);
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleOnModify = async evt => {
    evt.preventDefault();
    console.log(this.state.name)
    console.log(this.state.pictures)
    try {
      let jwt = localStorage.getItem("token");
      let fetchResponse = await fetch("/api/board/change", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwt
        },
        body: JSON.stringify({
          id: this.state._id,
          name: this.state.name,
          pictures: this.state.pictures
        })
      });
      console.log("inside the try");
      let serverResponse = await fetchResponse.json();
      console.log("Success:", serverResponse);
      console.log(serverResponse);
      this.setState({ name: "" });
    } catch (err) {
      console.error("Error:", err);
    }
  };

  render() {
    return (
      <div className="board">
        Please enter Name :{" "}
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        change pictures:{" "}
        <input
          name="pictures"
          value={this.state.pictures}
          onChange={this.handleChange}
        />
        <button
          onClick={evt => {
            this.handleOnModify(evt);
          }}
        >
          <img src="https://i.imgur.com/5WSHwlI.png" />
        </button>
      </div>
    );
  }
}

export default EditBoard;
