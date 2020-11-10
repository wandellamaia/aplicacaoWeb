import * as forgetService from './forgetService';

export const getEmail = async (email) => forgetService.getUserForget(email);

export const alterPassword = async (email, password) =>
  forgetService.alterPassword(email, password);
