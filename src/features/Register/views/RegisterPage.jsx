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
import * as registerOperations from '../control/RegisterOperations';

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
    width: '90%',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '80%',
    paddingTop: 10,
  },
  buttonRoot: {
    width: '80%',
    color: Colors.IntermediateSecondary,
    marginBottom: 10,
  },
}));

const RegisterPage = () => {
  const classes = useStyles();
  const [maritalStatus, setMaritalStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [birthday, setBirthday] = React.useState('');
  const [gender, setGender] = React.useState('f');

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
        <form>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            justify="center"
            xs
          >
            <TextField
              required
              id="standard-required"
              label="Nome"
              className={classes.textField}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              required
              id="standard-required"
              label="Email"
              className={classes.textField}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="flex-start"
            justify="center"
            xs
            style={{ paddingLeft: 15, paddingTop: 10 }}
          >
            <form noValidate>
              <TextField
                id="date"
                label="Data de nascimento"
                type="date"
                defaultValue="2020-05-24"
                // className={classes.textField}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </form>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs
          />
          <Grid
            container
            justify="space-between"
            alignItems="center"
            style={{ paddingTop: 10 }}
          >
            <Grid item style={{ paddingLeft: 10 }} xs={9} sm={7}>
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
            </Grid>
            <Grid item xs={8} sm>
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
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs
            style={{ paddingTop: 5 }}
          >
            <TextField
              required
              id="standard-required"
              label="Senha"
              style={{ width: '70%' }}
              onChange={(e) => setSenha(e.target.value)}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs
            style={{ paddingTop: 20 }}
          >
            <Button
              variant="outlined"
              className={classes.buttonRoot}
              onClick={() =>
                registerOperations.register({
                  email,
                  nome: name,
                  senha,
                  genero: gender,
                  data_nascimento: birthday,
                  estado_civil: maritalStatus,
                })
              }
            >
              <span>Entrar</span>
            </Button>
          </Grid>
        </form>
      </ExternalBox>
    </>
  );
};

export default RegisterPage;
