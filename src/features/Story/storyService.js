import requestService from '../../shared/utils/requestService';

export const sendStory = async (payload, token) => {
  const url = `${process.env.REACT_APP_NODE_LOCALHOST}/story/registerStory`;
  const body = payload;
  const header = {
    Authorization: `Bearer ${token}`,
  };
  return requestService(url, body, header, true);
};

export const saveDocument = async (request) => {
  const url = `${process.env.REACT_APP_NODE_LOCALHOST}/image/register`;
  const body = request;
  return requestService(url, body);
};
