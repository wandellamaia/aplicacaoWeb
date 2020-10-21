import React from 'react';
// import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  button: {
    // display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  select: {
    paddingBottom: 45,
  },
}));

export default function SelectHumor(props) {
  const classes = useStyles();
  const { humor, handleHumor } = props;
  // const [humor, setHumor] = React.useState('');
  const [open, setOpen] = React.useState(false);

  // const handleChange = (event) => {
  //   setHumor(event.target.value);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-controlled-open-select-label">Humor</InputLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={humor}
        onChange={handleHumor}
      >
        <MenuItem value="triste">
          <img alt="emoji3" src="triste.png" style={{ paddingRight: 5 }} />
          Triste
        </MenuItem>
        <MenuItem value="feliz">
          <img alt="emoji2" src="feliz.png" style={{ paddingRight: 5 }} />
          Feliz
        </MenuItem>
        <MenuItem value="neutro">
          <img alt="emoji1" src="neutro.png" style={{ paddingRight: 5 }} />
          Indiferente
        </MenuItem>
      </Select>
    </FormControl>
  );
}
// SelectHumor.protoTypes = {
//   handleHumor: PropTypes.func.isRequired,
//   humor: PropTypes.string.isRequired,
// };
