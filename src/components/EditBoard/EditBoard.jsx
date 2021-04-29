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

// Not sure what is this doing but Nicole & Vinny knows if it need to be also in the EditBoard comp
const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

// Not sure what is this doing but Nicole & Vinny knows if it need to be also in the EditBoard comp
const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

// Not sure what is this doing but Nicole & Vinny knows if it need to be also in the EditBoard comp
const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

// Not sure what is this doing but Nicole & Vinny knows if it need to be also in the EditBoard comp
const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

const handleOnModify = async evt => {
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

class EditBoard extends React.Component {
  state = {
    name: "",
    pictures: []
  };

  handleChange = evt => {
    console.log(evt);
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <div className="board">
        Please enter Name :{" "}
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        ></input>
        change pictures:{" "}
        <input
          name="pictures"
          value={this.state.pictures}
          onChange={this.handleChange}
        ></input>
        <button
          onClick={evt => {
            handleOnModify(evt);
          }}
        >
          <img src="https://i.imgur.com/5WSHwlI.png" />
        </button>
      </div>
    );
  }
}

export default EditBoard;
