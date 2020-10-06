import React from 'react';
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
import LoginBox from './LoginBox';
import Layout from '../../../shared/components/Layout';
import Colors from '../../../shared/styles/Colors';
import * as login from '../control/loginOperations';
import ErrorMessage from '../../../shared/components/ErrorMessage';
import history from '../../../shared/history';

import * as utils from '../../../shared/utils';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 70,
  },
  buttonWrapper: {
    // align: 'center',
    // margin: '20px 0',
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
    width: '80%',
    color: Colors.IntermediateSecondary,
    marginBottom: 10,
  },
  textHeader: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 800,
    lineHeight: '1.5',
    marginLeft: 30,
    marginTop: 5,
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
}));

const LoginPage = (props) => {
  const classes = useStyles();

  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [validateEmail, setValidateEmail] = React.useState(true);
  const [showMessage, setShowMessage] = React.useState(false);
  const [loginSuccess, setloginSuccess] = React.useState(false);
  const [keepConected, setKeepConected] = React.useState(true);

  const onEmail = (inEmail) => {
    setValidateEmail(utils.validateEmailAddress(inEmail));
    setEmail(inEmail);
    if (!inEmail) setValidateEmail(true);
  };

  const handleLoginButton = async () => {
    if (await login.login(email, password)) {
      history.push('/Storie');
      sessionStorage.setItem('email', email);
      setloginSuccess(true);
      setShowMessage(false);
    } else {
      setShowMessage(true);
    }
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
        </Grid>
      </Layout>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item className={classes.divExternal} xs sm={4} md={3}>
          <LoginBox title="Login" />
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            className={classes.form}
            style={{ marginTop: 15 }}
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
        </Grid>
      </Grid>
    </>
  );
};

export default LoginPage;
