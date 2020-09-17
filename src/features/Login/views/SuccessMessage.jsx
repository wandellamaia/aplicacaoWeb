import PropTypes from 'prop-types';
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export default function CustomizedSnackbars({ message, keepConected }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">
        <p>{message}</p>
        <p>{keepConected && 'Manter conectado foi marcado.'}</p>
      </Alert>
    </Snackbar>
  );
}

CustomizedSnackbars.propTypes = {
  message: PropTypes.string.isRequired,
  keepConected: PropTypes.bool.isRequired,
};
