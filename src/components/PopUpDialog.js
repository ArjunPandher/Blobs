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
  const [openTwo, setOpenTwo] = useState(false);
  
  const handleClose = () => {
    setOpen(false);
    setOpenTwo(true);
  };

  const handleCloseTwo = () => {
    setOpenTwo(false);
  }

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <img src='../blobs.png' alt='' height='12%' width='12%' />
          <b style={{paddingLeft: 100}}>Welcome to Blobs!</b>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            - Blobs is a web-app to help analyze and combat the
          </Typography>
          <Typography gutterBottom>
           negative impacts of urban living on the environment.
          </Typography>
          <Typography gutterBottom>
            - Through the power of tech, we seek to analyze how
          </Typography>
          <Typography gutterBottom>
            different factors of places (air pollution, GDP,
          </Typography>
          <Typography gutterBottom>
            population, etc.) relate to another and affect each other.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant='contained'>
            Next
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog onClose={handleCloseTwo} aria-labelledby="customized-dialog-title" open={openTwo}>
        <DialogTitle id="customized-dialog-title" onClose={handleCloseTwo}>
          <img src='../blobs.png' alt='' height='12%' width='12%' />
          <b style={{paddingLeft: 100}}>Welcome to Blobs!</b>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <img src='../drag.png' alt='' height='5%' width='5%' />
            <> </>
            Drag around to see explore the world!
          </Typography>
          <Typography gutterBottom>
            <img src='../zoom.png' alt='' height='4%' width='4%' />
            <> </>
            Scroll up and down to zoom in and out!
          </Typography>
          <Typography gutterBottom>
            <img src='../marker.png' alt='' height='4%' width='4%' />
            <> </>
            Click on map pins to get information about a place!
          </Typography>
          <Typography gutterBottom>
            <img src='../search.png' alt='' height='4%' width='4%' />
            <> </>
            Use the search bar to hone in on some popular cities!
          </Typography>
          <Typography gutterBottom>
            <img src='../menu.png' alt='' height='4%' width='4%' />
            <> </>
            Click the menu on the top right to select filters!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseTwo} color="secondary" variant='contained'>
            Begin
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PopUpDialog;