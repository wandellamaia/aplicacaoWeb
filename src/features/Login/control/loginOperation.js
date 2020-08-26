import history from '../../../shared/history';
import { dataBase } from '../../../shared/utils/dataBase';

export const userExists = (email) => {
  return dataBase.find((data) => data.email === email);
};

export const login = (email, password) => {
  const user = userExists(email);
  if (user.senha === password) {
    setTimeout(() => {
      history.push('/Registro');
    }, 6000);
    return true;
  }
  return false;
};
