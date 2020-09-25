import * as loginService from './loginService';

export const login = async (email) => loginService.getServiceLogin(email);
