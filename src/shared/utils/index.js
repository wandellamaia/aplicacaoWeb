import history from '../history';

export const validateEmailAddress = (email) => {
  const regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return regex.test(email);
};

export const initialLetter = () => {
  const letter = sessionStorage.getItem('email');
  if (letter !== null) {
    return letter[0].toUpperCase();
  }
  return null;
};

export const isFullName = (name) => {
  return name.split(' ').length < 2;
};

export const clearUser = () => {
  sessionStorage.removeItem('email');
  sessionStorage.removeItem('keepConected');
  sessionStorage.removeItem('token');
  history.push('/');
};

export const homePage = () => {
  const keepConected = sessionStorage.getItem('keepConected');
  if (keepConected === 'false') {
    clearUser();
    return;
  }
  history.push('/');
};

export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const changeByte = (bytes) => {
  const kilobyte = 1024;

  if (bytes >= kilobyte ** 3) {
    return `${parseFloat(bytes / kilobyte ** 3).toFixed(2)}GB`;
  }
  if (bytes >= kilobyte ** 2) {
    return `${parseFloat(bytes / kilobyte ** 2).toFixed(2)}MB`;
  }
  if (bytes >= 1024) {
    return `${parseFloat(bytes / kilobyte).toFixed(2)}KB`;
  }
  return `${bytes}B`;
};
