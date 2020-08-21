import React from 'react';
import { makeStyles } from '@material-ui/core';
import Colors from '../styles/Colors';

const useStyles = makeStyles({
  mainHeader: {
    height: '64px',
    background: Colors.IntermediatePrimary,
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    lineHeight: 1.5,
  },
  textHeader: {
    color: '#FFFFFF',
    fontSize: '32px',
    fontWeight: 800,
    lineHeight: '1.5',
    marginLeft: '30px',
    marginTop: '10px',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
});
const Layout = (props) => {
  const classes = useStyles();
  return (
    <header className={classes.mainHeader}>
      <p className={classes.textHeader}>{props.title}</p>
    </header>
  );
};

export default Layout;
