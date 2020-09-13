import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
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
    <Card variant="outlined">
      <CardContent className={classes.root}>{children}</CardContent>
    </Card>
  );
}
OutlinedCard.propTypes = {
  children: PropTypes.node.isRequired,
};
