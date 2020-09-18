import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Paper } from '@material-ui/core';
import Colors from '../styles/Colors';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    // color: Colors.Alernative,
  },
}));

export default function OutlinedCard(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <Paper elevation={3} variant="elevation" className={classes.root}>
      {children}
    </Paper>
  );
}
OutlinedCard.propTypes = {
  children: PropTypes.node.isRequired,
};
