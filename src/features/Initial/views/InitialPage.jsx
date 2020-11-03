import React from 'react';
import {
  Typography,
  makeStyles,
  Grid,
  Divider,
  Button,
} from '@material-ui/core';

import Menu from './InitialMenu';
import Footer from './Footer';
import history from '../../../shared/history';
// import OutlinedCard from '../../../shared/components/OutlinedCard';
import Colors from '../../../shared/styles/Colors';

const useStyles = makeStyles((theme) => ({
  root: {
    // position: 'relative',

    width: '100%',
    // maxWidth: 1100,

    height: 600,
    // maxHeight: '100%',

    background: 'url(../girassol.jpg)',
  },
  textHeader: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 800,
    lineHeight: '1.5',
    marginLeft: 250,
  },
  formatText: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  avatar: {
    backgroundColor: Colors.IntermediateSecondary,
    color: Colors.Secondary,
  },
  image: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  text1: {
    fontSize: 70,
    fontWeight: 800,
    color: Colors.Secondary,
  },
  text2: {
    // marginTop: 48,
    fontSize: 20,
    // fontWeight: 900,
    // lineHeight: 34,
    color: Colors.Secondary,
  },
}));

const StartPage = () => {
  const classes = useStyles();
  return (
    <>
      <Grid>
        <Menu />
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.root}
        >
          <Grid item>
            <Typography className={classes.text1}>
              Registre suas memórias
            </Typography>
            <Divider
              variant="middle"
              light="false"
              style={{ backgroundColor: Colors.Alernative }}
            />
          </Grid>
          <Grid item style={{ padding: 30 }}>
            <Typography className={classes.text2}>
              Escreva um diário e tenha onde recordar suas memórias.
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => {
                return history.push('/Registro');
              }}
              className={classes.button}
            >
              Cadastrar
            </Button>
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </>
  );
};

export default StartPage;
