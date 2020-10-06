import requestService from '../../shared/utils/requestService';

export const sendRegister = async (payload) => {
  const url = `http://localhost:3000/cadastrar`;
  const body = payload;
  return requestService(url, body);
};
