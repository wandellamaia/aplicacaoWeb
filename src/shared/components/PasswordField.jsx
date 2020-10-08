import React from 'react';
import PropTypes from 'prop-types';

import {
  Input,
  IconButton,
  InputLabel,
  InputAdornment,
  FormControl,
} from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default function PasswordField(props) {
  const { onShowPassword, showPassword, onPassword, password } = props;

  return (
    <FormControl>
      <InputLabel htmlFor="standard-adornment-password" required>
        Password
      </InputLabel>
      <Input
        id="standard-adornment-password"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => onPassword(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={onShowPassword}
              onMouseDown={onShowPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
PasswordField.propTypes = {
  onShowPassword: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
  onPassword: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
};
