import { dataBase } from '../../../shared/utils/dataBase';

export const userExists = (email) => {
  return dataBase.find((data) => data.email === email);
};
