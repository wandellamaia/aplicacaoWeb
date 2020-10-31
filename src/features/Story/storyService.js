import { requestService } from '../../shared/utils/requestService';

export const sendStory = async (payload, token) => {
  const url = `${process.env.REACT_APP_NODE_LOCALHOST}/story/registerStory`;
  const body = payload;
  const header = {
    Authorization: `Bearer ${token}`,
  };
  const response = await requestService(url, body, header, true);
  return response;
};

export const saveDocument = async (request) => {
  const url = `${process.env.REACT_APP_NODE_LOCALHOST}/image/register`;
  const body = request;
  return requestService(url, body);
};
