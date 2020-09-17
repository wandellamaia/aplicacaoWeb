import React from 'react';
import {
  makeStyles,
  Grid,
  TextField,
  Link,
  Typography,
  Button,
  IconButton,
  Avatar,
} from '@material-ui/core';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

import Layout from '../../../shared/components/Layout';
import Colors from '../../../shared/styles/Colors';

import history from '../../../shared/history';

import * as utils from '../../../shared/utils';

const useStyles = makeStyles((theme) => ({
  textHeader: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 800,
    lineHeight: '1.5',
    marginLeft: 30,
    marginTop: 5,
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
  orange: {
    color: Colors.Alernative,
    backgroundColor: Colors.Secondary,
  },
}));

const RecordMenu = (props) => {
  const classes = useStyles();

  return (
    <>
      <Layout>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <IconButton
              onClick={() => {
                history.push('/');
              }}
            >
              <ArrowBackIosOutlinedIcon aria-label="delete" />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography className={classes.textHeader}>Relatos</Typography>
          </Grid>
          <Grid item />
          <Grid item>
            <Avatar className={classes.orange}>N</Avatar>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default RecordMenu;
