import axios from 'axios';
import history from '../history';

export const requestService = async (
  url,
  body,
  headers,
  pureHeaders = false
) => {
  try {
    const response = await axios.post(url, body, {
      headers,
      pureHeaders,
    });
    return response.data;
  } catch (error) {
    if (error.request.status === 401) history.push('/Login');
    error.message = error;
    throw error;
  }
};

export default requestService;
