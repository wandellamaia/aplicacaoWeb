import React from 'react';
import {
  makeStyles,
  Grid,
  Typography,
  IconButton,
  Avatar,
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';

import Layout from '../../../shared/components/Layout';
import Colors from '../../../shared/styles/Colors';
import history from '../../../shared/history';

import * as utils from '../../../shared/utils/index';

const useStyles = makeStyles((theme) => ({
  textHeader: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 800,
    lineHeight: '1.5',
    marginLeft: 30,
    marginTop: 5,
  },
  avatar: {
    color: Colors.IntermediateSecondary,
    backgroundColor: Colors.Secondary,
  },
}));

const RecordMenu = (props) => {
  const classes = useStyles();

  const ClearUser = () => {
    utils.clearUser();
    history.push('/');
  };
  return (
    <>
      <Layout>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs>
            <Typography className={classes.textHeader}>Meu diário</Typography>
          </Grid>
          <Grid item container xs={3} justify="flex-end">
            <Avatar className={classes.avatar}>{utils.initialLetter()}</Avatar>
            <IconButton onClick={() => utils.homePage()}>
              <HomeIcon />
            </IconButton>
            <IconButton onClick={() => ClearUser()}>
              <ExitToAppIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default RecordMenu;
