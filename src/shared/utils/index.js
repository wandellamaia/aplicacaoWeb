export const validateEmailAddress = (email) => {
  const regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return regex.test(email);
};

export const initialLetter = () => {
  const letter = sessionStorage.getItem('email');
  if (letter !== null) {
    return letter[0].toUpperCase();
  }
};

export const isFullName = (name) => {
  return name.split(' ').length < 2;
};
