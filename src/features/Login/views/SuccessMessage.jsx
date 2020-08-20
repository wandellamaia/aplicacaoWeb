import PropTypes from 'prop-types';
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export default function CustomizedSnackbars(props) {
  
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          <p>{props.message}</p>
          <p>{props.keepConected && ('Manter conectado foi marcado.')}</p>
        </Alert>
      </Snackbar>
  );
}

CustomizedSnackbars.propTypes = {
  message: PropTypes.string.isRequired,
  keepConected: PropTypes.bool.isRequired,
};
