import requestService from '../../shared/utils/requestService';

export const sendRegister = async (payload) => {
  const url = `${process.env.REACT_APP_NODE_LOCALHOST}/user/cadastrar`;
  const body = payload;
  return requestService(url, body);
};
