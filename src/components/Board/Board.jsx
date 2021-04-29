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

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOnClick = async evt => {
    evt.preventDefault();
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open dialog
        </Button>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Modal title
          </DialogTitle>
          <DialogContent dividers>
            <Picture />
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };
}


class Board extends React.Component {
  state = {
    selectedName: "",
    selectedAvatar: [],
    userIsEdit: false,
    user: ""
  };

  handleDelete = async board => {
    try {
      let jwt = localStorage.getItem("token");
      let deleted = await fetch("/api/board/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwt
        },
        body: JSON.stringify({
          board: board
        })
      });
      console.log("processed to the end")
    } catch (err) {
      console.error("Error:", err);
    }
  }

  showBoard = (name, avatar) => {
    this.setState({
      selectedName: name,
      selectedAvatar: avatar
    })
    };

  handleEdit = () => {
    this.setState({
      userIsEdit: true,
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
                       this.handleEdit();
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
            <EditBoard name={this.state.name} pictures={this.state.pictures} id={this.state._id}/>
          ) : (
            <Showcase name={this.state.selectedName} avatar={this.state.selectedAvatar} />
          )}
        </div>
      </div>
    );
  }
}

export default Board;
