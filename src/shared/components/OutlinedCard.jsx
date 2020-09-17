import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Paper } from '@material-ui/core';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

export default function OutlinedCard(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <Paper elevation={3} variant="outlined" className={classes.root}>
      {children}
    </Paper>
  );
}
OutlinedCard.propTypes = {
  children: PropTypes.node.isRequired,
};
