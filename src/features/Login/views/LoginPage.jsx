import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Grid,
  TextField,
  Link,
  Typography,
  Button,
} from '@material-ui/core';

import PasswordField from './PasswordField';
import ButtonCheckbox from './ButtonCheckbox';
import SuccessMessage from './SuccessMessage';
import LoginBox from './LoginBox';

import Layout from '../../../shared/components/Layout';
import Colors from '../../../shared/styles/Colors';
import * as login from '../control/loginOperation';
import ErrorMessage from '../../../shared/components/ErrorMessage';

import * as utils from '../../../shared/utils';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 70,
  },
  buttonWrapper: {
    align: 'center',
    margin: '20px 0',
  },
  divExternal: {
    borderStyle: 'solid',
    borderColor: Colors.IntermediateSecondary,
    borderWidth: '1px',
    borderRadius: '3px',
  },
  link: {
    alignItems: 'center',
    paddingBottom: 25,
    fontSize: '0.875rem',
  },
  formWrapper: {
    padding: '10px 40px',
  },
  textField: {
    width: '100%',
  },
  buttonRoot: {
    width: '100%',
    color: Colors.IntermediateSecondary,
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
}));

export default function LoginPage(props) {
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

  const handleLoginButton = () => {
    if (login.login(email, password)) {
      setloginSuccess(true);
      setShowMessage(false);
    } else {
      console.log('Não há este login.');
      setShowMessage(true);
    }
  };

  return (
    <>
      <Layout>
        <p className={classes.textHeader}>Meu diário</p>
      </Layout>
      <Grid container className={classes.root}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item className={classes.divExternal}>
            <LoginBox title="Login" />
            <Grid className={classes.formWrapper}>
              <Grid item xs>
                <form>
                  <Grid style={{ marginTop: 15 }}>
                    <TextField
                      className={classes.textField}
                      required
                      id="standard-required"
                      label="Email"
                      onBlur={(e) => {
                        onEmail(e.target.value);
                      }}
                    />
                    <ErrorMessage
                      title="Email incorreto"
                      show={!validateEmail}
                    />
                  </Grid>
                  <Grid style={{ marginTop: 15 }} />
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
                  <Grid style={{ marginTop: 15 }}>
                    <ButtonCheckbox
                      keepConected={keepConected}
                      handleKeepConected={() => setKeepConected(!keepConected)}
                    />
                  </Grid>
                </form>
              </Grid>
              <Grid item className={classes.buttonWrapper}>
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
              </Grid>
              <Grid item className={classes.buttonWrapper}>
                <Button className={classes.buttonRoot} variant="outlined">
                  <span>Voltar</span>
                </Button>
              </Grid>
              <Typography align="center" className={classes.link}>
                <Link href="https://www.google.com/">Esqueci minha senha</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
LoginPage.propType = {
  onShowPassword: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
  onPassword: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
};
