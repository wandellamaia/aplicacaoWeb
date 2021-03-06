import PropTypes from 'prop-types';
import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const ButtonCheckbox = (props) => {
  const { keepConected, handleKeepConected } = props;

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={keepConected}
            onChange={handleKeepConected}
            name="checked"
            color="default"
          />
        }
        label="Manter conectado"
      />
    </FormGroup>
  );
};
ButtonCheckbox.propTypes = {
  keepConected: PropTypes.bool.isRequired,
  handleKeepConected: PropTypes.func.isRequired,
};
export default ButtonCheckbox;
