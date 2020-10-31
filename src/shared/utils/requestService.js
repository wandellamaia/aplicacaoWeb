import axios from 'axios';

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
    console.log('req ->', response.data);
    return response.data;
  } catch (error) {
    error.message = error;
    throw error;
  }
};

export default requestService;
