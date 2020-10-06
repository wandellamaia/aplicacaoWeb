import * as loginService from './loginService';

export const login = async (email, password) =>
  loginService.getServiceLogin(email, password);
