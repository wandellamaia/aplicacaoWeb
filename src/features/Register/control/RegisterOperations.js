import * as registerManager from '../registerManager';

export const register = async (payload) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await registerManager.register(payload);
    sessionStorage.setItem('token', response.token);
    sessionStorage.setItem('email', payload.email);
    return response;
  } catch (e) {
    throw e;
  }
};
