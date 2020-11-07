import React, { useState } from 'react';
import {
  makeStyles,
  Grid,
  TextField,
  Link,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

import PasswordField from './PasswordField';
import ButtonCheckbox from './ButtonCheckbox';
import SuccessMessage from './SuccessMessage';
import Layout from '../../../shared/components/Layout';
import Colors from '../../../shared/styles/Colors';
import * as login from '../control/loginOperations';
import ErrorMessage from '../../../shared/components/ErrorMessage';
import history from '../../../shared/history';
import TopBox from '../../../shared/components/TopBox';
import ExternalBox from '../../../shared/components/ExternalBox';
import Loading from '../../../shared/components/LoadingPage';

import * as utils from '../../../shared/utils';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 70,
  },
  divExternal: {
    borderStyle: 'solid',
    borderColor: Colors.IntermediateSecondary,
    borderWidth: '1px',
    borderRadius: '3px',
    width: '70%',
  },
  link: {
    alignItems: 'center',
    paddingBottom: 25,
    fontSize: '0.875rem',
  },
  formWrapper: {
    padding: '10px 40px',
  },
  form: {
    marginLeft: 10,
    marginRigth: 10,
  },
  textField: {
    width: '100%',
  },
  buttonRoot: {
    width: '70%',
    color: Colors.IntermediateSecondary,
    marginBottom: 10,
  },
  textHeader: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 800,
    lineHeight: 1.5,
    paddingRight: 100,
  },
}));

const LoginPage = (props) => {
  const classes = useStyles();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validateEmail, setValidateEmail] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [loginSuccess, setloginSuccess] = useState(false);
  const [keepConected, setKeepConected] = useState(true);
  const [open, setOpen] = useState(false);

  const onEmail = (inEmail) => {
    setValidateEmail(utils.validateEmailAddress(inEmail));
    setEmail(inEmail);
    if (!inEmail) setValidateEmail(true);
  };

  const handleLoginButton = async () => {
    setOpen(true);
    if (await login.login(email, password)) {
      history.push('/Story');
      sessionStorage.setItem('email', email);
      setloginSuccess(true);
      setShowMessage(false);
    } else {
      setShowMessage(true);
    }
    setOpen(false);
  };
  sessionStorage.setItem('keepConected', keepConected);

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
              <ArrowBackIosOutlinedIcon />
            </IconButton>
          </Grid>
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            sm={11}
            xs={8}
          >
            <Typography className={classes.textHeader}>Meu diário</Typography>
          </Grid>
        </Grid>
      </Layout>
      <ExternalBox>
        <TopBox title="Login" />
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          className={classes.form}
          style={{ paddingTop: 15 }}
          xs={11}
        >
          <form>
            <TextField
              className={classes.textField}
              required
              id="standard-required"
              label="Email"
              onBlur={(e) => {
                onEmail(e.target.value);
              }}
            />
            <ErrorMessage title="Email incorreto" show={!validateEmail} />
            <PasswordField
              onShowPassword={() => setShowPassword(!showPassword)}
              onPassword={(valuePassword) => setPassword(valuePassword)}
              password={password}
              showPassword={showPassword}
            />
            <ErrorMessage
              title="Email e/ou senha incorretos"
              show={showMessage}
            />
          </form>
          <ButtonCheckbox
            style={{ marginTop: 15 }}
            keepConected={keepConected}
            handleKeepConected={() => setKeepConected(!keepConected)}
          />
          <Button
            variant="outlined"
            disabled={!(email && password && validateEmail)}
            className={classes.buttonRoot}
            onClick={() => handleLoginButton()}
          >
            <span>Entrar</span>
          </Button>
          {loginSuccess && (
            <SuccessMessage
              message="Você está conectado."
              keepConected={keepConected}
            />
          )}
          <Button
            className={classes.buttonRoot}
            variant="outlined"
            onClick={() => history.push('/')}
          >
            <span>Voltar</span>
          </Button>
          <Grid item>
            <Typography align="center" className={classes.link}>
              <Link href="https://www.google.com/">Esqueci minha senha</Link>
            </Typography>
          </Grid>
        </Grid>
        <Loading open={open} />
      </ExternalBox>
    </>
  );
};

export default LoginPage;
