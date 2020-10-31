import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 500,
    color: '#fff',
  },
}));

const LoadingPage = (props) => {
  const classes = useStyles();
  const { open } = props;
  return (
    <Backdrop className={classes.backdrop} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

LoadingPage.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default LoadingPage;
