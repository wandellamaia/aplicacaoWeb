import React, { useState } from 'react';
import {
  makeStyles,
  Grid,
  TextField,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

import PasswordField from '../../../shared/components/PasswordField';
import SuccessMessage from '../../../shared/components/SuccessMessage';
import Layout from '../../../shared/components/Layout';
import Colors from '../../../shared/styles/Colors';
import * as forget from '../control/forgetOperations';
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
    width: '65%',
    // backgroundColor: Colors.IntermediateSecondary,
    marginBottom: 15,
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
  const [showMessageSenha, setShowMessageSenha] = useState(false);
  const [open, setOpen] = useState(false);

  const onEmail = (inEmail) => {
    setValidateEmail(utils.validateEmailAddress(inEmail));
    setEmail(inEmail);
    if (!inEmail) setValidateEmail(true);
  };

  const handleEmailButton = async () => {
    setOpen(true);
    if (!(await forget.getEmail(email))) {
      setShowMessage(true);
    }
    setOpen(false);
  };

  const handleSenhaButton = async () => {
    setOpen(true);
    if (await forget.setPassword(email, password)) {
      setShowMessageSenha(true);
      sessionStorage.removeItem('email');
    }
    setOpen(false);
    setTimeout(() => {
      history.push('/');
    }, 4000);
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
        <TopBox title="Esqueceu sua senha?" />
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
            {sessionStorage.getItem('email') && (
              <PasswordField
                onShowPassword={() => setShowPassword(!showPassword)}
                onPassword={(valuePassword) => setPassword(valuePassword)}
                password={password}
                showPassword={showPassword}
              />
            )}
            <ErrorMessage
              title="Não foi possivel fazer alteração"
              show={showMessage}
            />
          </form>
          {sessionStorage.getItem('email') ? (
            <Button
              variant="outlined"
              color="primary"
              disabled={!(password && email && validateEmail)}
              className={classes.buttonRoot}
              onClick={() => handleSenhaButton()}
            >
              <span>Enviar</span>
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="primary"
              disabled={!(email && validateEmail)}
              className={classes.buttonRoot}
              onClick={() => handleEmailButton()}
            >
              <span>Enviar</span>
            </Button>
          )}
        </Grid>
        <Loading open={open} />
        {showMessage && (
          <SuccessMessage
            type="warning"
            message="Usuário não foi encontrado."
          />
        )}
        {showMessageSenha && (
          <SuccessMessage
            type="info"
            message="Sua senha foi alterada com sucesso"
          />
        )}
      </ExternalBox>
    </>
  );
};

export default LoginPage;
