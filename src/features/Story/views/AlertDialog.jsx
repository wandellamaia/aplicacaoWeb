import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import history from '../../../shared/history';

const AlertDialog = (props) => {
  const { open, setOpen } = props;
  const handleCloseYes = () => {
    setOpen(false);
  };
  const handleCloseNo = () => {
    setOpen(false);
    history.push('/');
  };
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Deseja fazer mais relatos?
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleCloseNo} color="primary">
          Não
        </Button>
        <Button onClick={handleCloseYes} color="primary" autoFocus>
          Sim
        </Button>
      </DialogActions>
    </Dialog>
  );
};
AlertDialog.propType = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
AlertDialog.defaultProps = {
  open: undefined,
  setOpen: undefined,
};
export default AlertDialog;
