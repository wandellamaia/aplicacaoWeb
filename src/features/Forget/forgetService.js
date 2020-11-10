import requestService from '../../shared/utils/requestService';

export const getUserForget = async (email) => {
  const url = `${process.env.REACT_APP_NODE_LOCALHOST}/auth/user`;
  const body = {
    email,
  };
  return requestService(url, body);
};
export const alterPassword = async (email, password) => {
  const url = `${process.env.REACT_APP_NODE_LOCALHOST}/auth/recovery`;
  const body = {
    email,
    password,
  };
  return requestService(url, body);
};
