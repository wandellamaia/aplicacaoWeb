import { userExists } from '../model/loginManager';
import history from '../../../shared/history';

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
