import history from '../../../shared/history';
import { dataBase } from '../../../shared/utils/dataBase';

export const userExists = (email) => {
  return dataBase.find((data) => data.email === email);
};

export const login = (email, password) => {
  const user = userExists(email);
  if (user && user.senha === password) {
    history.push('/Registro');
    localStorage.setItem('@meuDiario/username', email);
    return true;
  }
  return false;
};
