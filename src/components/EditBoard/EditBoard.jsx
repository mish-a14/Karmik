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


class EditBoard extends React.Component {
  state = {
    name: "",
    pictures: []
    //passs in props as state 
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
          id: this.state.id,
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
      <div className="showcase">
        change word:{" "}
        <input
          name="name"
          value={this.props.name}
          onChange={this.handleChange}
        ></input>
        change picture:{" "}
        <input
          name="pictures"
          value={this.props.pictures}
          onChange={this.handleChange}
        ></input>
        <button className="edit-btn"
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
