export const validateEmailAddress = (email) => {
  const regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return regex.test(email);
};

export const initialLetter = () => {
  const letter = localStorage.getItem('email');
  if (letter !== null) {
    return letter[0].toUpperCase();
  }
};
