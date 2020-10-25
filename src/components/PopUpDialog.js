import React, {useState} from 'react';
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

const PopUpDialog = () => {
  const [open, setOpen] = useState(true);
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <img  src='../townLogo.png' alt='' height = '12%' width = '12%' className="App-logo" alt="logo" />
          Welcome to Blobs!
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Blobs is a web-app to help analyze and combat the
          </Typography>
          <Typography gutterBottom>
           negative impacts of urban living on the environment.
          </Typography>
          <Typography gutterBottom>
            -  Drag around to see air quality and population of an area! 
          </Typography>
          <Typography gutterBottom>
            -  Zoom in and out to get a detailed view of an area.
          </Typography>
          <Typography gutterBottom>
            -  Use the search bar to hone in on some popular cities.
          </Typography>
          <Typography gutterBottom>
            - Click the menu on the top right to select filters!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Enter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PopUpDialog;