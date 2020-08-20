import PropTypes from 'prop-types';
import React from 'react';
import {makeStyles, Grid, TextField, Link, Typography,Button} from '@material-ui/core';

// import { Alert } from '@material-ui/lab';

import PasswordField from './PasswordField';
import ButtonCheckbox from './ButtonCheckbox';

import Layout from '../../../shared/components/Layout';
import Colors from '../../../shared/styles/Colors';
import * as loginOperations from '../loginOperation';
import ErrorMessage from '../../../shared/components/ErrorMessage';
import LoginBox from './LoginBox';
import * as utils from '../../../shared/utils';
import SuccessMessage from './SuccessMessage';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 70,
    },
    buttonWrapper: {
        align: "center",
        margin:'20px 0'
    },
    divExternal: {
        borderStyle: "solid",
        borderColor: Colors.IntermediateSecondary,
        borderWidth: "1px",
        borderRadius: "3px",
    },
    link: {
        alignItems: "center",
        paddingBottom: 25,
        fontSize: "0.875rem",
    },
    formWrapper:{
        padding: '10px 40px'
    },
    textField:{
        width:'100%'
    },
    buttonRoot:{
        width:'100%',
        color: Colors.IntermediateSecondary
    }
}));
export default function LoginPage(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        email: '',
        password: '',
    });
    // const { state,  setState } = props;
    //  const [state, setState] = React.useState({
    //     checked: true,
    // });
    
   
    const [enabledButton, setEnabledButton] = React.useState(false);
    const [validateEmail, setValidateEmail] = React.useState(false);
    const [showMessage, setShowMessage] = React.useState(false);
    const [loginSuccess, setloginSuccess] = React.useState(false);
    const [keepConected, setKeepConected] = React.useState(true);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });

        setValidateEmail(utils.validateEmailAddress(values.email));
        
        if (values.email && values.password && validateEmail) {
            setEnabledButton(true);
        }
    };

    const handleKeepConected = (keepConected) => {
        setKeepConected(!keepConected);
    };

    const handleLoginButton = () => {
        if (loginOperations.login(values.email, values.password)) {
            setloginSuccess(true);
            props.history.push("/Registro");
        } else {
            setShowMessage(true);
        }
    };

    return (
        <>
        <Layout title="Meu diário"/>
            <Grid container className={classes.root} >
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item className={classes.divExternal}>
                        <LoginBox title="Login"/>
                        <Grid className={classes.formWrapper}>
                            <Grid item xs >
                                <form>
                                    <Grid style={{marginTop: 15}}>
                                        <TextField className={classes.textField} required id="standard-required" label="Email" onChange={handleChange('email')} />
                                        <ErrorMessage title="Email incorreto" show={validateEmail}/>
                                    </Grid>
                                    <Grid style={{marginTop: 15}}>
                                    </Grid>
                                        <PasswordField onChange={(password)=>{handleChange('password')({target: {value: password.password}})}}/>
                                        <ErrorMessage title="Email e senha incorretos" show={showMessage}/>
                                        <Grid style={{marginTop: 15}}>
                                        <ButtonCheckbox state={keepConected} setState={setKeepConected} onChange={handleKeepConected}/>
                                    </Grid>
                                </form>
                            </Grid>
                            <Grid item className={classes.buttonWrapper}>
                                <Button variant="outlined" disabled={!enabledButton} className={classes.buttonRoot} onClick={handleLoginButton}>
                                    <span>Entrar</span>
                                </Button>
                                {loginSuccess && (<SuccessMessage message="Você está conectado." keepConected={keepConected}/>)}
                            </Grid>
                            <Grid item className={classes.buttonWrapper}>
                                <Button className={classes.buttonRoot} variant="outlined">
                                    <span >Voltar</span>
                                </Button>
                            </Grid>
                            <Typography align="center" className={classes.link}>
                                <Link href="https://www.google.com/">
                                    Esqueci minha senha
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};
