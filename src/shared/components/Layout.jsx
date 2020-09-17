import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Box } from '@material-ui/core';
import Colors from '../styles/Colors';

const useStyles = makeStyles({
  mainHeader: {
    marginBottom: 20,
    background: Colors.Primary,
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    lineHeight: 1.5,
    position: 'sticky',
  },
});

const Layout = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <>
      <Box className={classes.mainHeader}>{children}</Box>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
