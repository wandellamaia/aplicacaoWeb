import React from 'react';

import {
  makeStyles,
  Grid,
  IconButton,
  TextField,
  Button,
} from '@material-ui/core';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import Layout from '../../../shared/components/Layout';
import history from '../../../shared/history';
import Colors from '../../../shared/styles/Colors';
import TopBox from '../../../shared/components/TopBox';
import ExternalBox from '../../../shared/components/ExternalBox';
import * as registerOperations from '../control/registerOperations';
import PasswordField from '../../../shared/components/PasswordField';
import ErrorMessage from '../../../shared/components/ErrorMessage';

import * as utils from '../../../shared/utils';

const useStyles = makeStyles((theme) => ({
  extern: {
    borderBottomStyle: 'solid',
    borderColor: Colors.IntermediateSecondary,
    borderWidth: '1px',
  },
  pTitle: {
    color: Colors.Alernative,
    fontSize: '32px',
    marginTop: '12px',
    textAlign: 'center',
    lineHeight: '32px',
    marginBottom: '12px',
    letterSpacing: '0.18px',
  },
  textField: {
    width: '70%',
  },
  formControl: {
    margin: theme.spacing(1),
    width: '70%',
    paddingTop: 5,
  },
  buttonRoot: {
    width: '70%',
    color: Colors.IntermediateSecondary,
    marginBottom: 10,
  },
}));

const RegisterPage = () => {
  const classes = useStyles();
  const [maritalStatus, setMaritalStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const [birthday, setBirthday] = React.useState('');
  const [gender, setGender] = React.useState('');

  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [nameValidate, setNameValidate] = React.useState(false);
  const [validateEmail, setValidateEmail] = React.useState(true);

  const onName = (inName) => {
    setName(inName);
    if (inName) setNameValidate(utils.isFullName(inName));
  };

  const onEmail = (inEmail) => {
    setValidateEmail(utils.validateEmailAddress(inEmail));
    setEmail(inEmail);
    if (!inEmail) setValidateEmail(true);
  };

  const handleRegisterButton = async () => {
    const response = await registerOperations.register({
      email,
      nome: name,
      senha: password,
      genero: gender,
      data_nascimento: birthday,
      estado_civil: maritalStatus,
    });
    if (response.status) {
      history.push('/Story');
    }
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
        </Grid>
      </Layout>
      <ExternalBox>
        <TopBox title="Cadastro" />
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justify="center"
          xs
          style={{ paddingTop: 15 }}
        >
          <TextField
            required
            id="standard-required"
            label="Nome"
            className={classes.textField}
            onBlur={(e) => onName(e.target.value)}
          />
          <ErrorMessage title="Nome incorreto" show={nameValidate} />
          <TextField
            required
            id="standard-required"
            label="Email"
            className={classes.textField}
            onChange={(e) => onEmail(e.target.value)}
          />
          <ErrorMessage title="Email incorreto" show={!validateEmail} />
        </Grid>
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs
        >
          <TextField
            id="date"
            label="Data de nascimento"
            type="date"
            defaultValue="2020-05-24"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setBirthday(e.target.value)}
            style={{ width: '70%' }}
          />

          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">
              <span style={{ fontSize: 15 }}>Estado civil</span>
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
            >
              <MenuItem value="solteiro">Solteiro(a)</MenuItem>
              <MenuItem value="casado">Casado(a)</MenuItem>
              <MenuItem value="separado">Separado(a)</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">
              <span style={{ fontSize: 12 }}>Gênero</span>
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value="F">Feminino</MenuItem>
              <MenuItem value="M">Masculino</MenuItem>
              <MenuItem value="O">Outros</MenuItem>
            </Select>
          </FormControl>
          <PasswordField
            onShowPassword={() => setShowPassword(!showPassword)}
            onPassword={(valuePassword) => setPassword(valuePassword)}
            password={password}
            showPassword={showPassword}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs
          style={{ paddingTop: 10 }}
        >
          <Button
            variant="outlined"
            className={classes.buttonRoot}
            disabled={!(password && name && email)}
            onClick={() => handleRegisterButton()}
          >
            <span>Entrar</span>
          </Button>
        </Grid>
      </ExternalBox>
    </>
  );
};

export default RegisterPage;
