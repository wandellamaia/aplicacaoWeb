import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export default function CustomizedSnackbars({ message, type }) {
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type}>
        <p>{message}</p>
      </Alert>
    </Snackbar>
  );
}

CustomizedSnackbars.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
