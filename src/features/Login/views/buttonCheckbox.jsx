
import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
  

export default function ButtonCheck () {
    const [state, setState] = React.useState({
        checked: false,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
    return ( 
            <FormGroup>
                <FormControlLabel
                control={
                    <Checkbox
                    checked={state.checked}
                    onChange={handleChange}
                    name="checked"
                    // color="primary"
                    />
                }
                label="Manter conectado"
                />
            </FormGroup>       
    );
};