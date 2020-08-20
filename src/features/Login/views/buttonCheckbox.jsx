import PropTypes from 'prop-types';
import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function ButtonCheckbox (props) {
    const [state, setState] = React.useState({
        checked: true,
    });
    //const { state,  handleChange } = props;
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        props.onChange(event.target.checked);//Passa para o pai
        console.log('Estado -> ',state);
      };
    
    return ( 
            <FormGroup>
                <FormControlLabel
                control={
                    <Checkbox
                    checked={state.checked}
                    onChange={handleChange}
                    name="checked"
                    color='default'
                    />
                }
                label="Manter conectado"
                />
            </FormGroup>       
    );
};
ButtonCheckbox.propType = {
  state: PropTypes.bool.isRequired,
  setState: PropTypes.func.isRequired
};