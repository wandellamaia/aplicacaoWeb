import * as loginManager from '../loginManager';

export const login = async (email, password) => {
  try {
    const basicAuth = await loginManager.login(email, password);
    sessionStorage.setItem('token', basicAuth.token);
    sessionStorage.setItem('email', email);
    return true;
  } catch (e) {
    return false;
  }
};
