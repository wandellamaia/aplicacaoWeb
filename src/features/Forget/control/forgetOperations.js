import * as forgetManager from '../forgetManager';

export const getEmail = async (email) => {
  try {
    const basicAuth = await forgetManager.getEmail(email);
    if (basicAuth?.status) {
      sessionStorage.setItem('email', email);
    }
    return true;
  } catch (e) {
    if (e.response.status === 400) return false;
  }
};
export const setPassword = async (email, password) => {
  try {
    await forgetManager.alterPassword(email, password);
    return true;
  } catch (e) {
    if (e.response.status === 400) return false;
  }
};
