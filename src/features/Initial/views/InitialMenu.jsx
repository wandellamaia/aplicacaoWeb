import React, { useState, useEffect } from 'react';
import {
  Typography,
  makeStyles,
  Grid,
  Button,
  Avatar,
  IconButton,
} from '@material-ui/core';

import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Colors from '../../../shared/styles/Colors';
import * as utils from '../../../shared/utils/index';
import Layout from '../../../shared/components/Layout';
import history from '../../../shared/history';

const useStyles = makeStyles((theme) => ({
  textHeader: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 800,
    lineHeight: 1.5,
    marginLeft: 200,
  },
  button: {
    color: '#FFFFFF',
  },
  avatar: {
    color: Colors.IntermediateSecondary,
    backgroundColor: Colors.Secondary,
  },
}));

const Menu = () => {
  const [disapear, setDisapear] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const login = sessionStorage.getItem('email');
    if (login) {
      setDisapear(true);
    }
  }, [disapear]);

  return (
    <Layout>
      <Grid container justify="center" alignItems="center">
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          sm={10}
          xs={8}
        >
          <Typography className={classes.textHeader}>Meu diário</Typography>
        </Grid>
        {disapear && sessionStorage.getItem('email') !== null ? (
          <>
            <Grid item xs={4} sm>
              <IconButton>
                <Avatar className={classes.avatar}>
                  {utils.initialLetter()}
                </Avatar>
              </IconButton>
              <IconButton
                onClick={() => {
                  history.push('/Story');
                }}
              >
                <LibraryBooksOutlinedIcon />
              </IconButton>
              <IconButton onClick={() => utils.clearUser()}>
                <ExitToAppIcon />
              </IconButton>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs sm style={{ paddingLeft: 10, lineHeight: 1.5 }}>
              <Button
                size="small"
                variant="outlined"
                onClick={() => {
                  return history.push('/Login');
                }}
                className={classes.button}
              >
                Entrar
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </Layout>
  );
};

export default Menu;
