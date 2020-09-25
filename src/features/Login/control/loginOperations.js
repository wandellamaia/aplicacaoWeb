import * as loginManager from '../loginManager';

import history from '../../../shared/history';
import { dataBase } from '../../../shared/utils/dataBase';

export const userExists = (email) => {
  return dataBase.find((data) => data.email === email);
};

export const login = async (email, password) => {
  console.log('Email ->', email);
  const user = await loginManager.login(email);
  console.log('Usuario ->', user[0]);
  if (user && user[0].senha === password) {
    history.push('/Registro');
    localStorage.setItem('email', email);
    return true;
  }
  return false;
};
