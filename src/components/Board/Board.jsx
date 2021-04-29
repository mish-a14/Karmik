import React from "react";
import { Link } from "react-router-dom";
import Picture from "../Picture/Picture.jsx";
import './Board.css';

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
      let serverResponse = await fetchResponse.json();
      console.log("Success:", serverResponse);
      console.log(serverResponse);
      this.setState({ name: "" });
    } catch (err) {
      console.error("Error:", err);
    }
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

  const showBoard = async (e) => {
    let display = await fetch('api/boards')
  }

function Board(props) {
  return (
    <div className="board">
      <div className="the-boards">
        {props.board.length > 0 ? (
          <div className="prev-boards">
            <>
              {props.board.map(b => (
                <div className="panel">
                  {" "}
                  {b.name} <img src={b.pictures} />{" "}
                  <div className="btns">
                  <button>
                    <img src="https://i.imgur.com/5WSHwlI.png"/>
                  </button>
                  <button
                    onClick={evt => {
                      this.handleOnModify(evt);
                    }}
                  >
                    <img src="https://i.imgur.com/XXoPWe5.png"/>
                  </button>
                  </div>
                </div>
              ))}
              <div className="btn-div">
              <p>Add New</p>
                <button>
                  <Link to="/boardform">+</Link>
                </button>
              </div>
            </>
          </div>
        ) : (
          <div className="prev-boards">
            <>
              <p className="no-boards">hmm...no vision boards yet!</p>
              <div className="btn-div">
                <p>Add New</p>
                <button className="panel-btn">
                  <Link to="/boardform">+</Link>
                </button>
              </div>
            </>
          </div>
        )}
        <div className="showcase">
          {props.board.length > 0 ? (
            <>
              myBoardArray[0]
              <div className="btn-div">
                <button
                  onClick={evt => {
                    this.handleOnClick(evt);
                  }}
                ><Link to='/board'>
                  +
                  </Link></button>
              </div>
            </>
          ) : (
            <>
              <p>
                looking to get started? popular board topics include: career,
                travel, and lifestyle.
              </p>
              <div className="btn-div">
                <button>+</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Board;
