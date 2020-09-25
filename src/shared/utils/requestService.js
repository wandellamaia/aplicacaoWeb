import axios from 'axios';

const requestService = async (url, body) => {
  try {
    const response = await axios.post(url, body);
    return response.data;
  } catch (error) {
    error.message = error;
    throw error;
  }
};

export default requestService;
