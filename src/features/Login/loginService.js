import requestService from '../../shared/utils/requestService';

export const getServiceLogin = async (email, password) => {
  const url = `http://localhost:3000/auth/authenticate`;
  const body = {
    email,
    password,
  };
  return requestService(url, body);
};
