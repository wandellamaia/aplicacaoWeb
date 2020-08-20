import PropTypes from 'prop-types';
import React from 'react';
import {makeStyles,FormHelperText} from '@material-ui/core';


import Colors from '../styles/Colors';



const useStyles = makeStyles((theme) => ({
    alert: {
        fontSize: 14,
        lineHeight: '20px',
        letterSpacing: 0.15,
        color: Colors.Warm,
        marginBottom: 24,
      }
}));
const ErrorMessage = (props) => {
    const classes= useStyles();
    return (
        <FormHelperText className={classes.alert}>
        {props.show && props.title}
        </FormHelperText>
    );
};

ErrorMessage.propTypes = {
    title: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
};

export default ErrorMessage;