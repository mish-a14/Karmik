import React from 'react';
import {Link} from 'react-router-dom';
import Images from '../Images/Images.jsx'

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
  
    function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    handleOnClick = async (evt) => {
        evt.preventDefault()
        return(
            <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
            <Images />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
        )
    } 

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
            <button button onClick = {(evt) => 
            {this.handleOnClick(evt)}}>+</button>
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

export default{ Board, CustomizedDialogs };