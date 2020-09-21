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
import * as operations from '../../Record/control/RecordOperations';

const useStyles = makeStyles((theme) => ({
  textHeader: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 800,
    lineHeight: '1.5',
    marginLeft: 30,
    marginTop: 5,
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
    const login = localStorage.getItem('email');
    if (login) {
      setDisapear(true);
    }
  }, [disapear]);
  console.log(disapear);
  return (
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
        <Grid item container xs sm justify="flex-end">
          {disapear && localStorage.getItem('email') !== null ? (
            <>
              <Avatar className={classes.avatar}>
                {utils.initialLetter()}
              </Avatar>
              <IconButton
                onClick={() => {
                  history.push('/Registro');
                }}
              >
                <LibraryBooksOutlinedIcon />
              </IconButton>
              <IconButton onClick={() => operations.clearUser()}>
                <ExitToAppIcon />
              </IconButton>
            </>
          ) : (
            <>
              <Button
                size="small"
                onClick={() => {
                  return history.push('/Login');
                }}
                className={classes.button}
              >
                Entrar
              </Button>
              <Button size="small" className={classes.button}>
                Cadastrar
              </Button>
            </>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Menu;
