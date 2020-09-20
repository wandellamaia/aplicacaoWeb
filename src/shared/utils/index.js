export const validateEmailAddress = (email) => {
  const regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return regex.test(email);
};

export const initialLetter = () => {
  return localStorage.getItem('email')[0].toUpperCase();
};
