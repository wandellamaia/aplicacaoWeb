import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup(props) {
  // const [value, setValue] = React.useState('female');
  const { gender, setGender } = props;
  //   const handleChange = (event) => {
  //     setValue(event.target.value);
  //   };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gênero</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={gender}
        onChange={setGender}
        row
      >
        <FormControlLabel value="f" control={<Radio />} label="Feminino" />
        <FormControlLabel value="m" control={<Radio />} label="Masculino" />
        <FormControlLabel value="o" control={<Radio />} label="Outros" />
      </RadioGroup>
    </FormControl>
  );
}
RadioButtonsGroup.propTypes = {
  gender: PropTypes.string.isRequired,
  setGender: PropTypes.func.isRequired,
};
