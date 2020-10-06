import * as registerService from './registerService';

export const register = async (payload) =>
  registerService.sendRegister(payload);
