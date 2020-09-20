import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Box } from '@material-ui/core';
import Colors from '../styles/Colors';

const useStyles = makeStyles({
  mainHeader: {
    background: Colors.IntermediatePrimary,
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    lineHeight: 1.5,
    marginTop: 20,
  },
});

const Footnote = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <>
      <Box className={classes.mainHeader}>{children}</Box>
    </>
  );
};

Footnote.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footnote;
