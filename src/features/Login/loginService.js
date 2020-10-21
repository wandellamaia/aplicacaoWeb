import requestService from '../../shared/utils/requestService';

export const getServiceLogin = async (email, password) => {
  const url = `${process.env.REACT_APP_NODE_LOCALHOST}/auth/authenticate`;
  const body = {
    email,
    password,
  };
  return requestService(url, body);
};
