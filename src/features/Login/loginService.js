import requestService from '../../shared/utils/requestService';

export const getServiceLogin = async (email) => {
  const url = `http://localhost:8094/login`;
  const body = {
    email,
  };
  return requestService(url, body);
};
