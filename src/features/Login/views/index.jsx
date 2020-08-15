import React from 'react';
import {makeStyles, Grid} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import PasswordField from './fieldPassword';
import ButtonCheck from './buttonCheckbox';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Header from '../../Header/views';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 70,
    },
    buttonWrapper: {
        align: "center",
        margin:'20px 0'
    },
    div2: {
        width: "40%",
    },
    div1: {
        borderBottomStyle: "solid",
        borderColor: '#4D4DFF',
        borderWidth: "1px",
    },
    divExterna: {
        borderStyle: "solid",
        borderColor: '#4D4DFF',
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
        width:'100%'
    },
    pLogin: {
        color: "black",
        fontSize: "32px",
        marginTop: "12px",
        textAlign: "center",
        lineHeight: "32px",
        marginBottom: "12px",
        letterSpacing: "0.18px",
    }
}));
export default function Login() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        email: '',
        password: '',
    });
    const [enabledButton, setEnabledButton] = React.useState(false);
   
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        if (values.email && values.password) {
            setEnabledButton(true);
        } else {
            setEnabledButton(false);
        }
    };
    return (
        <>
            <Header title={"WebApp"}/>
            <div className={classes.root} >
                <Grid container direction="column" justify="center" alignItems="center">
                    <div className={classes.divExterna}>
                        <div className={classes.div1}>
                            <Grid item xs >
                                <p className={classes.pLogin}>Login</p>
                            </Grid>
                        </div>
                        <div className={classes.formWrapper}>
                            <Grid item xs >
                                <form>
                                    <div style={{marginTop: 15}}>
                                        <TextField className={classes.textField} required id="standard-required" label="Email" onChange={handleChange('email')} />
                                    </div>
                                    <div style={{marginTop: 15}}>
                                        <PasswordField onChange={(password)=>{handleChange('password')({target: {value: password.password}})}}/>
                                    </div>
                                    <div style={{marginTop: 15}}>
                                        <ButtonCheck />
                                    </div>
                                </form>
                            </Grid>
                            <Grid item xs align={"center"}>
                                <div className={classes.buttonWrapper}>
                                    <Button variant="outlined" disabled={!enabledButton} className={classes.buttonRoot} color="primary">
                                        <span>Entrar</span>
                                    </Button>
                                </div>
                            </Grid>
                            <Grid item xs align={"center"}>
                                <div className={classes.buttonWrapper}>
                                    <Button className={classes.buttonRoot} variant="outlined" color="primary">
                                        <span >Voltar</span>
                                    </Button>
                                </div>
                            </Grid>
                            <Grid item xs>
                                <Typography align="center" className={classes.link}>
                                    <Link href="https://www.google.com/">
                                        Esqueci minha senha
                                    </Link>
                                </Typography>
                            </Grid>
                        </div>
                    </div>
                </Grid>
            </div>
        </>
    );
};