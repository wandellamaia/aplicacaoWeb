import axios from 'axios';

const requestService = async (url, body, headers, pureHeaders = false) => {
  try {
    const response = await axios.post(url, body, {
      headers,
      pureHeaders,
    });
    console.log('Service ->', response.data);
    return response.data;
  } catch (error) {
    error.message = error;
    throw error;
  }
};

export default requestService;
