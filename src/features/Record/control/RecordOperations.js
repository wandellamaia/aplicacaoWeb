import history from '../../../shared/history';

export const clearUser = () => {
  localStorage.removeItem('email');
  localStorage.removeItem('keepConected');
  history.push('/');
};

export const homePage = () => {
  const teste = localStorage.getItem('keepConected');
  if (teste === 'false') {
    clearUser();
    return;
  }
  history.push('/');
};
